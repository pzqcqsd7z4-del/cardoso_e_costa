import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const TOTAL_FRAMES = 142
const SEQUENCE_VERSION = 'cardoso-cinematic-hq-2'
const BACKGROUND_COLOR = '#16140f'

const frameSource = (frame) =>
  `/home-sequence-hq/frame-${String(frame).padStart(3, '0')}.webp?v=${SEQUENCE_VERSION}`

const clampFrame = (frame) => Math.min(TOTAL_FRAMES, Math.max(1, frame))
const clampProgress = (progress) => Math.min(1, Math.max(0, progress))

export default function CinematicScrollHero() {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const introRef = useRef(null)
  const nextRef = useRef(null)
  const progressRef = useRef(null)
  const framesRef = useRef(Array.from({ length: TOTAL_FRAMES }, () => null))
  const framePromisesRef = useRef(Array.from({ length: TOTAL_FRAMES }, () => null))
  const fallbackFrameRef = useRef(null)
  const lastValidFrameRef = useRef(null)
  const currentFrameRef = useRef(1)
  const displayedFrameRef = useRef(1)
  const targetFrameRef = useRef(1)
  const animationRequestRef = useRef(null)
  const canvasMetricsRef = useRef({ width: 0, height: 0, pixelRatio: 1 })
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [firstFrameReady, setFirstFrameReady] = useState(false)
  const [staticExperience, setStaticExperience] = useState(false)

  const loadFrame = useCallback((requestedFrame) => {
    const frameNumber = Math.round(clampFrame(requestedFrame))
    const index = frameNumber - 1

    if (framesRef.current[index]) return Promise.resolve(framesRef.current[index])
    if (framePromisesRef.current[index]) return framePromisesRef.current[index]

    const promise = new Promise((resolve) => {
      const image =
        typeof window.Image === 'function'
          ? new window.Image()
          : typeof document.createElement === 'function'
            ? document.createElement('img')
            : null

      if (!image) {
        resolve(null)
        return
      }

      image.decoding = 'async'
      image.fetchPriority = frameNumber === 1 ? 'high' : 'auto'
      let settled = false
      const timeout = window.setTimeout(() => finish(null), frameNumber === 1 ? 6500 : 12000)

      const finish = (result) => {
        if (settled) return
        settled = true
        window.clearTimeout(timeout)
        image.onload = null
        image.onerror = null
        framePromisesRef.current[index] = null
        resolve(result)
      }

      image.onload = async () => {
        if (frameNumber === 1) {
          try {
            await image.decode()
          } catch {
            // onload is sufficient when decode is unavailable.
          }
        }

        framesRef.current[index] = image
        if (frameNumber === 1) fallbackFrameRef.current = image
        finish(image)
      }
      image.onerror = () => finish(null)
      image.src = frameSource(frameNumber)
    })

    framePromisesRef.current[index] = promise
    return promise
  }, [])

  const renderFrame = useCallback((requestedFrame, force = false) => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d', { alpha: false })
    if (!canvas || !context) return

    const frameNumber = Math.round(clampFrame(requestedFrame))
    currentFrameRef.current = frameNumber
    const exactFrame = framesRef.current[frameNumber - 1]
    const image = exactFrame ?? lastValidFrameRef.current ?? fallbackFrameRef.current

    if (!force && exactFrame && currentFrameRef.current === frameNumber) return
    if (!image?.naturalWidth || !image?.naturalHeight) return

    let metrics = canvasMetricsRef.current
    if (metrics.width === 0 || metrics.height === 0) {
      const bounds = canvas.getBoundingClientRect()
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
      metrics = {
        width: Math.max(1, bounds.width),
        height: Math.max(1, bounds.height),
        pixelRatio,
      }
      canvasMetricsRef.current = metrics
      canvas.width = Math.round(metrics.width * pixelRatio)
      canvas.height = Math.round(metrics.height * pixelRatio)
    }

    const { width, height, pixelRatio } = metrics
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    context.fillStyle = BACKGROUND_COLOR
    context.fillRect(0, 0, width, height)

    const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight)
    const drawWidth = image.naturalWidth * scale
    const drawHeight = image.naturalHeight * scale
    const offsetX = (width - drawWidth) / 2
    const offsetY = (height - drawHeight) / 2

    context.imageSmoothingEnabled = true
    context.imageSmoothingQuality = 'high'
    context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight)
    lastValidFrameRef.current = image
  }, [])

  const requestFrame = useCallback(
    (requestedFrame) => {
      targetFrameRef.current = clampFrame(requestedFrame)
      const priorityFrame = Math.round(targetFrameRef.current)

      void loadFrame(priorityFrame).then((image) => {
        if (image && Math.abs(targetFrameRef.current - priorityFrame) < 2) {
          renderFrame(priorityFrame, true)
        }
      })

      if (animationRequestRef.current !== null) return

      const animate = () => {
        const distance = targetFrameRef.current - displayedFrameRef.current

        if (Math.abs(distance) < 0.25) {
          displayedFrameRef.current = targetFrameRef.current
          renderFrame(displayedFrameRef.current, true)
          animationRequestRef.current = null
          return
        }

        displayedFrameRef.current += distance * 0.3
        renderFrame(displayedFrameRef.current, true)
        animationRequestRef.current = window.requestAnimationFrame(animate)
      }

      animationRequestRef.current = window.requestAnimationFrame(animate)
    },
    [loadFrame, renderFrame],
  )

  useEffect(() => {
    let cancelled = false
    let loaded = 0

    const loadAndTrack = async (frame) => {
      const image = await loadFrame(frame)
      loaded += 1
      if (!cancelled) setLoadingProgress(Math.round((loaded / TOTAL_FRAMES) * 100))
      return image
    }

    const prepare = async () => {
      const firstFrame = await loadAndTrack(1)
      if (cancelled) return

      fallbackFrameRef.current = firstFrame
      lastValidFrameRef.current = firstFrame
      setFirstFrameReady(true)

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const saveData = Boolean(navigator.connection?.saveData)

      if (!firstFrame || prefersReducedMotion || saveData) {
        setStaticExperience(true)
        setLoadingProgress(100)
        return
      }

      renderFrame(1, true)

      const queue = Array.from({ length: TOTAL_FRAMES - 1 }, (_, index) => index + 2)
      let queueIndex = 0
      const workers = window.matchMedia('(max-width: 767px)').matches ? 3 : 6

      const worker = async () => {
        while (!cancelled && queueIndex < queue.length) {
          const frame = queue[queueIndex]
          queueIndex += 1
          await loadAndTrack(frame)
        }
      }

      await Promise.all(Array.from({ length: workers }, () => worker()))
      if (!cancelled) setLoadingProgress(100)
    }

    void prepare()
    return () => {
      cancelled = true
    }
  }, [loadFrame, renderFrame])

  useLayoutEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
      canvasMetricsRef.current = {
        width: Math.max(1, bounds.width),
        height: Math.max(1, bounds.height),
        pixelRatio,
      }
      canvas.width = Math.round(bounds.width * pixelRatio)
      canvas.height = Math.round(bounds.height * pixelRatio)
      renderFrame(currentFrameRef.current, true)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    window.addEventListener('resize', resize, { passive: true })
    resize()

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', resize)
    }
  }, [renderFrame])

  useEffect(() => {
    const section = sectionRef.current
    if (!section || !firstFrameReady || staticExperience) return undefined

    const update = () => {
      const bounds = section.getBoundingClientRect()
      const distance = Math.max(1, bounds.height - window.innerHeight)
      const progress = clampProgress(-bounds.top / distance)

      requestFrame(1 + progress * (TOTAL_FRAMES - 1))

      if (introRef.current) {
        const opacity = Math.max(0, 1 - progress / 0.2)
        introRef.current.style.opacity = String(opacity)
        introRef.current.style.transform = `translate3d(0, ${-progress * 90}px, 0)`
        introRef.current.style.visibility = opacity < 0.02 ? 'hidden' : 'visible'
      }

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${Math.max(0.03, progress)})`
      }

      if (nextRef.current) {
        const reveal = clampProgress((progress - 0.82) / 0.18)
        nextRef.current.style.opacity = String(reveal)
        nextRef.current.style.transform = `translate3d(0, ${(1 - reveal) * 30}px, 0)`
      }
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [firstFrameReady, requestFrame, staticExperience])

  useEffect(
    () => () => {
      if (animationRequestRef.current !== null) {
        window.cancelAnimationFrame(animationRequestRef.current)
      }
    },
    [],
  )

  return (
    <section
      ref={sectionRef}
      aria-label="Visita cinematográfica a um empreendimento Cardoso e Costa"
      className={`relative bg-ink-900 ${staticExperience ? 'h-[100svh]' : 'h-[420vh]'}`}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-ink-900 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${frameSource(1)})` }}
        />
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Sequência do edifício controlada pelo scroll"
          className="relative z-[1] block h-full w-full"
        />

        <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(22,20,15,0.94)_0%,rgba(22,20,15,0.62)_38%,rgba(22,20,15,0.12)_72%),linear-gradient(180deg,rgba(22,20,15,0.36)_0%,transparent_38%,rgba(22,20,15,0.72)_100%)]" />
        <div className="pointer-events-none absolute inset-0 z-[3] opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_right,black,transparent_72%)]" />

        {!firstFrameReady && (
          <div className="absolute inset-0 z-20 grid place-items-center bg-ink-900" aria-live="polite">
            <div className="w-64 text-center">
              <p className="font-serif text-3xl italic">A preparar a visita</p>
              <div className="mt-6 h-px overflow-hidden bg-white/20">
                <div
                  className="h-full bg-terracotta-400 transition-[width] duration-300"
                  style={{ width: `${Math.max(4, loadingProgress)}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {firstFrameReady && (
          <div ref={introRef} className="pointer-events-none absolute inset-0 z-10 will-change-[opacity,transform]">
            <div className="mx-auto flex h-full max-w-7xl flex-col justify-between px-6 pb-8 pt-28 lg:px-8 lg:pb-10 lg:pt-36">
              <div className="max-w-3xl">
                <p className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-stone-200 sm:text-xs">
                  <span className="h-px w-8 bg-terracotta-400" />
                  Cardoso &amp; Costa · Desde 1990
                </p>
                <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
                  Construção com alma.
                  <span className="mt-2 block italic text-stone-200">Arquitetura com propósito.</span>
                </h1>
                <p className="mt-7 max-w-xl border-l border-terracotta-400/80 pl-5 text-sm font-light leading-relaxed text-stone-200 sm:text-base">
                  Criamos edifícios contemporâneos pensados para valorizar o lugar,
                  o investimento e a vida de quem os habita.
                </p>

                <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/portfolio"
                    className="inline-flex h-12 items-center justify-center bg-white px-7 text-xs font-medium uppercase tracking-[0.12em] text-ink-900 transition-colors hover:bg-terracotta-400 hover:text-white"
                  >
                    Ver portfolio
                  </Link>
                  <Link
                    to="/contacto"
                    className="inline-flex h-12 items-center justify-center border border-white/45 bg-black/10 px-7 text-xs font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10"
                  >
                    Fale connosco
                  </Link>
                </div>
              </div>

              <div className="flex items-end justify-between gap-8 border-t border-white/20 pt-5 text-[10px] uppercase tracking-[0.22em] text-stone-200">
                <span className="hidden sm:block">Do projeto à entrega · acompanhamento integral</span>
                <span>{staticExperience ? 'Continue para explorar ↓' : 'Deslize para percorrer ↓'}</span>
              </div>
            </div>
          </div>
        )}

        {!staticExperience && (
          <div className="pointer-events-none absolute inset-x-6 bottom-3 z-10 mx-auto max-w-7xl lg:inset-x-8">
            <div className="h-px overflow-hidden bg-white/15">
              <div
                ref={progressRef}
                className="h-full origin-left scale-x-[0.03] bg-terracotta-400 will-change-transform"
              />
            </div>
          </div>
        )}

        <div
          ref={nextRef}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[8] translate-y-8 opacity-0"
        >
          <div className="h-64 bg-gradient-to-t from-ink-900 via-ink-900/90 to-transparent" />
          <div className="absolute inset-x-0 bottom-10 mx-auto flex max-w-7xl items-end justify-between px-6 lg:px-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-terracotta-300">A seguir</p>
              <p className="mt-2 font-serif text-3xl italic text-white">Um legado construído com rigor.</p>
            </div>
            <span className="hidden text-[10px] uppercase tracking-[0.22em] text-stone-300 sm:block">Continue ↓</span>
          </div>
        </div>
      </div>
    </section>
  )
}
