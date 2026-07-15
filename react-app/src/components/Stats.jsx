import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Counter from './Counter'

const stats = [
  { to: new Date().getFullYear() - 1998, suffix: '+', label: 'Anos de Experiência' },
  { to: 3, suffix: '', label: 'Projetos em Curso' },
  { to: 100, suffix: '%', label: 'Acompanhamento Personalizado' },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="border-y border-stone-200 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <p className="font-serif text-4xl lg:text-5xl text-terracotta-500">
              <Counter to={s.to} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-xs tracking-[0.12em] uppercase text-stone-500">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
