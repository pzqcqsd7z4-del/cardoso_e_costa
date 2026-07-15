import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CtaBanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-40 lg:py-52 px-6 lg:px-8 text-center overflow-hidden">
      <img
        src="/images/site/cta-banner.jpg"
        alt="Obra Cardoso e Costa ao entardecer"
        className="absolute inset-0 w-full h-full object-cover bg-ink-900"
        onError={(e) => { e.currentTarget.style.background = '#16140f' }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div ref={ref} className="relative max-w-3xl mx-auto text-white">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.2em] uppercase text-stone-200 mb-6"
        >
          O Nosso Compromisso
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif italic text-2xl lg:text-4xl leading-snug mb-10"
        >
          &ldquo;Não construímos apenas edifícios; criamos os palcos onde a vida se
          desenrola com distinção.&rdquo;
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/contacto"
            className="inline-flex items-center gap-3 bg-white text-ink-900 px-8 py-4 text-xs tracking-[0.1em] uppercase font-medium hover:bg-terracotta-400 hover:text-white transition-colors duration-300"
          >
            Inicie o seu Legado Connosco
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
