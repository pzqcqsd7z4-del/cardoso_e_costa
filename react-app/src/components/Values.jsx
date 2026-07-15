import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const values = [
  { icon: '◆', title: 'Qualidade', text: 'Rigor em cada detalhe, da fundação ao acabamento final.' },
  { icon: '✦', title: 'Confiança', text: 'Relações transparentes e duradouras com clientes e parceiros.' },
  { icon: '◇', title: 'Inovação', text: 'Técnicas e materiais atuais ao serviço de projetos atemporais.' },
  { icon: '❖', title: 'Sustentabilidade', text: 'Construção responsável, pensada para gerações futuras.' },
]

export default function Values() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-white py-24 lg:py-32 border-t border-stone-200">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 max-w-xl">
          <p className="text-xs tracking-[0.2em] uppercase text-terracotta-500 mb-4">O Que Nos Move</p>
          <h2 className="font-serif text-3xl lg:text-5xl">Os Nossos Valores</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="border border-stone-200 p-8 hover:border-terracotta-300 transition-colors"
            >
              <span className="text-terracotta-500 text-2xl">{v.icon}</span>
              <h3 className="font-serif text-xl mt-5 mb-3">{v.title}</h3>
              <p className="text-sm text-stone-500 font-light leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
