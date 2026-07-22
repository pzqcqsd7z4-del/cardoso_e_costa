export default function CompletedProjectCard({ title, meta, image }) {
  return (
    <div className="group cursor-default">
      <div className="relative overflow-hidden bg-slate-100 rounded-lg aspect-square mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="text-xs tracking-[0.1em] uppercase text-terracotta-400 mb-2">Projeto</p>
      <h3 className="text-lg font-serif font-semibold text-ink-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-600">{meta}</p>
    </div>
  )
}
