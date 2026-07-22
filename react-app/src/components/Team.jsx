import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const team = [
  { name: 'Ricardo Cardoso', role: 'Sócio Fundador & CEO', img: '/images/empresa/ricardo-cardoso.jpg' },
  { name: 'Miguel Costa',    role: 'Diretor de Projetos',   img: '/images/empresa/miguel-costa.jpg' },
  { name: 'Ana Martins',     role: 'Diretora de Operações', img: '/images/empresa/ana-martins.jpg' },
  { name: 'Duarte Lima',     role: 'Engenheiro Chefe',      img: '/images/empresa/duarte-lima.jpg' },
]

export default function Team() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
      <div ref={ref} className="flex flex-wrap justify-between items-end gap-10 mb-14">
        <div>
          <h2 className="font-serif text-3xl lg:text-5xl">CARDOSO & COSTA</h2>
        </div>
        <p className="font-serif italic text-lg text-stone-500 max-w-[40ch]">
          &ldquo;O nosso foco reside no cuidado do detalhe, complementaridade e uma parceria
          duradoura para o seu futuro.&rdquo;
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg text-slate-600 leading-8 mb-4">
            A Cardoso & Costa combina mais de duas décadas de experiência na construção
            e desenvolvimento de projetos residenciais e comerciais. Trabalhamos com
            foco na qualidade dos materiais, rigor técnico e atenção ao detalhe,
            promovendo soluções adaptadas ao cliente e entrega dentro do prazo.
          </p>
          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
            <li>Rigor técnico e gestão de obra eficiente.</li>
            <li>Compromisso com prazos e qualidade construtiva.</li>
            <li>Atendimento personalizado e acompanhamento pós-entrega.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center"
        >
          <div className="w-full max-w-lg aspect-[4/3] rounded-2xl bg-stone-200 overflow-hidden relative shadow-xl border border-stone-200/60 group">
            <img
              src="/images/empresa/IMG_0463.jpg"
              alt="Cardoso & Costa - Liderança"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                if (!e.currentTarget.dataset.retried) {
                  e.currentTarget.dataset.retried = 'true';
                  e.currentTarget.src = '/assets/img/IMG_0463.jpg';
                }
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

