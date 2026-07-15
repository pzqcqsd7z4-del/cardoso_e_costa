import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectGallery({ images }) {
  const [active, setActive] = useState(null)

  if (images.length === 0) return null

  return (
    <section className="bg-ink-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-xs tracking-[0.2em] uppercase text-terracotta-400 mb-4">Galeria</p>
        <h2 className="font-serif text-white text-3xl lg:text-4xl mb-10">Todas as Fotografias</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((src, i) => (
            <motion.button
              key={src}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (i % 8) * 0.05, duration: 0.5 }}
              className="aspect-square overflow-hidden bg-white/5"
            >
              <motion.img
                src={src}
                alt={`Foto ${i + 1}`}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.closest('button').style.display = 'none' }}
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-10"
            onClick={() => setActive(null)}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Fechar"
              className="absolute top-6 right-6 text-white text-3xl leading-none"
            >
              &times;
            </button>

            {active > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setActive(active - 1) }}
                aria-label="Anterior"
                className="absolute left-4 sm:left-8 text-white text-3xl"
              >
                &larr;
              </button>
            )}
            {active < images.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setActive(active + 1) }}
                aria-label="Seguinte"
                className="absolute right-4 sm:right-8 text-white text-3xl"
              >
                &rarr;
              </button>
            )}

            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              src={images[active]}
              alt={`Foto ${active + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-full object-contain"
            />

            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.1em]">
              {active + 1} / {images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
