import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const milestones = [
  { year: '1990', title: 'A Fundação', text: 'Serafim Alberto Cardoso funda a Cardoso & Costa com uma pequena equipa e um objetivo claro: construir com rigor e honestidade.' },
  { year: '2008', title: 'Primeiros Grandes Projetos', text: 'A empresa consolida-se com os primeiros edifícios de habitação multifamiliar, ganhando reputação pela qualidade dos acabamentos.' },
  { year: '2016', title: 'Expansão da Equipa', text: 'Reforço do gabinete técnico e de arquitetura, permitindo abraçar projetos maiores e mais exigentes.' },
  { year: '2026', title: 'O Presente', text: 'Moradias de Regadas, Edifício Bismark e Casas das Oliveiras representam a fase mais ambiciosa da nossa história.' },
]

export default function History() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
      <div className="mb-16">
        <p className="text-xs tracking-[0.2em] uppercase text-terracotta-500 mb-4">A Nossa História</p>
        <h2 className="font-serif text-3xl lg:text-5xl">Como Tudo Começou</h2>
      </div>

      <div ref={ref} className="relative pl-8 sm:pl-12">
        <div className="absolute left-0 sm:left-4 top-2 bottom-2 w-px bg-stone-200" />

        {milestones.map((m, i) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.18, duration: 0.6 }}
            className="relative pb-14 last:pb-0"
          >
            <span className="absolute -left-8 sm:-left-12 top-1 w-3 h-3 rounded-full bg-terracotta-500 ring-4 ring-[#faf7f2]" />
            <p className="font-serif italic text-terracotta-500 text-xl mb-2">{m.year}</p>
            <h3 className="font-sans font-semibold text-lg mb-2">{m.title}</h3>
            <p className="text-stone-500 font-light max-w-[56ch]">{m.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
