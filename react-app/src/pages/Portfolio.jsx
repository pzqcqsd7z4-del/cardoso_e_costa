import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'

const projects = [
  { title: 'Moradias de Regadas', meta: '13 Moradias T3 · 2ª Fase', image: '/images/moradias-regadas/hero.jpg', to: '/portfolio/moradias-regadas' },
  { title: 'Edifício Bismark', meta: 'Apartamentos T2 · Concluído', image: '/images/edificio-bismark/hero.jpg', to: '/portfolio/edificio-bismark' },
  { title: 'Casas das Oliveiras', meta: '20 Frações T1+1 · Em Construção', image: '/images/casas-das-oliveiras/hero.jpg', to: '/portfolio/casas-das-oliveiras' },
]

export default function Portfolio() {
  return (
    <>
      <PageHeader eyebrow="Os Nossos Projetos" title="Portfolio" />
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-terracotta-400 mb-4">Seleção de Projetos</p>
          <p className="text-slate-700 text-base leading-7">
            Descubra as nossas intervenções residenciais e habitacionais, pensadas com materiais nobres, espaços luminosos e acabamentos elegantes.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </>
  )
}
