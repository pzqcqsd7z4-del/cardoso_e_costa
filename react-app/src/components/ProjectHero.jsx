import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }

export default function ProjectHero({ eyebrow, title, meta = [], image, actions }) {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden text-white">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover bg-stone-300"
        onError={(e) => { e.currentTarget.style.background = '#3a342a' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/20 via-ink-900/20 to-ink-900/90" />

      <motion.div variants={container} initial="hidden" animate="show" className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-24 w-full">
        <motion.p variants={fadeUp} className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-stone-200 mb-6">
          <span className="w-7 h-px bg-terracotta-400" />{eyebrow}
        </motion.p>
        <motion.h1 variants={fadeUp} className="font-serif italic text-5xl sm:text-6xl lg:text-7xl font-medium mb-8">
          {title}
        </motion.h1>

        {meta.length > 0 && (
          <motion.div variants={fadeUp} className="flex flex-wrap gap-8 text-sm">
            {meta.map((m) => (
              <span key={m} className="flex items-center gap-2 text-stone-200">
                <span className="text-terracotta-400">&#10022;</span>{m}
              </span>
            ))}
          </motion.div>
        )}

        {actions && (
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-8">
            {actions}
          </motion.div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute right-8 bottom-10 hidden sm:flex flex-col items-center gap-2 text-stone-300"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-white/40"
        />
      </motion.div>
    </section>
  )
}
