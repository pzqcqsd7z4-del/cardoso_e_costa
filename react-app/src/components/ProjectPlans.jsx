import { motion } from 'framer-motion'

export default function ProjectPlans({ plans }) {
  if (plans.length === 0) return null

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
      <p className="text-xs tracking-[0.2em] uppercase text-terracotta-500 mb-4">Documentação</p>
      <h2 className="font-serif text-3xl lg:text-4xl mb-10">Plantas &amp; Frações</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map((plan, i) => (
          <motion.a
            key={plan.file}
            href={encodeURI(plan.file)}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: (i % 6) * 0.05, duration: 0.5 }}
            whileHover={{ x: 4 }}
            className="flex items-center justify-between gap-4 border border-stone-200 px-6 py-4 hover:border-terracotta-400 transition-colors"
          >
            <span className="text-sm font-medium">{plan.label}</span>
            <span className="text-xs tracking-[0.1em] uppercase text-terracotta-500">PDF &rarr;</span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
