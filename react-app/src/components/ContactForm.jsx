import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../data/projects'

export default function ContactForm() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] items-stretch w-full">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 lg:p-10 shadow-sm shadow-black/5 h-full"
      >
        <p className="text-xs tracking-[0.2em] uppercase text-terracotta-500 mb-4">Contact &amp; Values</p>
        <h2 className="font-serif text-3xl lg:text-5xl mb-6">Solicite uma Apresentação Privada</h2>
        <p className="text-slate-600 font-light max-w-[46ch] leading-8 mb-8">
          A nossa equipa de consultores está disponível para apresentar todos os detalhes
          técnicos e as opções de personalização do seu futuro lar.
        </p>
        <div className="grid gap-4 text-sm text-slate-700">
          <div className="rounded-2xl bg-slate-100 p-5">
            <p className="font-semibold mb-2">O que oferecemos</p>
            <p>Apresentações privadas, acompanhamento dedicado e soluções à medida para o seu investimento.</p>
          </div>
          <div className="rounded-2xl bg-slate-100 p-5">
            <p className="font-semibold mb-2">Porquê escolher-nos</p>
            <p>Experiência comprovada em projetos residenciais com foco em qualidade, prazo e confiança.</p>
          </div>
        </div>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="rounded-[2rem] border border-slate-200/70 bg-white p-6 lg:p-8 shadow-xl shadow-black/5 min-h-[460px] lg:min-h-[560px] h-full"
      >
        <div className="grid gap-4">
          <label className="flex flex-col gap-2 text-xs tracking-[0.06em] uppercase text-slate-500">
            Nome Completo
            <input type="text" name="nome" required placeholder="Nome completo" className="w-full font-sans text-base px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-300" />
          </label>
          <label className="flex flex-col gap-2 text-xs tracking-[0.06em] uppercase text-slate-500">
            Email Profissional
            <input type="email" name="email" required placeholder="email@empresa.pt" className="w-full font-sans text-base px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-300" />
          </label>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-xs tracking-[0.06em] uppercase text-slate-500">
              Telefone
              <input type="tel" name="telefone" placeholder="224 000 000" className="w-full font-sans text-base px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-300" />
            </label>
            <label className="flex flex-col gap-2 text-xs tracking-[0.06em] uppercase text-slate-500">
              Interessado em
              <select name="interesse" className="w-full font-sans text-base px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-300">
                <option value="moradias-regadas">Moradias de Regadas</option>
                <option value="edificio-bismark">Edifício Bismark</option>
                <option value="casas-das-oliveiras">Casas das Oliveiras</option>
                <option value="crasto-living">Edifício Crasto Living</option>
              </select>
            </label>
          </div>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-ink-900 px-6 py-3 text-sm tracking-[0.1em] uppercase text-white font-semibold"
        >
          Agendar Visita <span>&rarr;</span>
        </motion.button>

        {sent && (
          <p className="text-sm text-terracotta-600 mt-4 text-center">
            Obrigado! A nossa equipa entrará em contacto brevemente.
          </p>
        )}

        <p className="text-xs text-slate-400 mt-5 text-center">
          Os seus dados são tratados com total confidencialidade e nunca partilhados com terceiros.
        </p>
      </motion.form>
    </div>
  )
}
