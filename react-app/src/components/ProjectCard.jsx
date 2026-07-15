import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProjectCard({ title, meta, image, to }) {
  const Wrapper = to ? motion(Link) : motion.div
  const wrapperProps = to ? { to } : {}

  return (
    <Wrapper
      {...wrapperProps}
      whileHover={{ y: -3 }}
      className="group relative block aspect-[4/3] overflow-hidden border border-slate-200/60 bg-slate-100 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.4)] transition-all duration-500 hover:shadow-[0_28px_80px_-30px_rgba(15,23,42,0.35)]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => { e.currentTarget.style.opacity = 0 }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm">
          Projeto
        </span>
        <h3 className="font-serif text-2xl text-white mt-4 mb-2">{title}</h3>
        <p className="text-sm uppercase tracking-[0.18em] text-slate-200">{meta}</p>
      </div>
    </Wrapper>
  )
}
