import { motion } from 'framer-motion'

export default function PageHeader({ eyebrow, title }) {
  return (
    <section className="bg-ink-900 text-white pt-40 pb-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.2em] uppercase text-terracotta-300 mb-4"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif italic text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  )
}
