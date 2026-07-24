import { useParams, Link, useNavigate } from 'react-router-dom'
import ProjectHero from '../components/ProjectHero'
import ProjectGallery from '../components/ProjectGallery'
import ProjectPlans from '../components/ProjectPlans'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects[slug]

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-40 text-center">
        <h1 className="font-serif text-3xl mb-4">Projeto não encontrado</h1>
        <Link to="/portfolio" className="text-terracotta-500 underline">Voltar ao Portfolio</Link>
      </div>
    )
  }

  const PORTFOLIO_KEYS = ['casas-das-oliveiras', 'edificio-bismark', 'crasto-living']

  const suggestedProjects = PORTFOLIO_KEYS
    .filter((key) => key !== slug && projects[key])
    .slice(0, 2)
    .map((key) => ({ slug: key, ...projects[key] }))

  return (
    <>
      <ProjectHero
        eyebrow={project.eyebrow}
        title={project.title}
        image={project.hero}
        meta={project.meta}
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center rounded-full border border-slate-300/80 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            &larr; Voltar atrás
          </button>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Ver Portfolio completo
          </Link>
        </div>
      </section>

      <ProjectGallery images={project.gallery} />
      <ProjectPlans plans={project.plans} />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8 gap-4">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-terracotta-400 mb-2">Sugestões</p>
            <h2 className="font-serif text-3xl">Veja outros projetos</h2>
          </div>
          <Link to="/portfolio" className="text-xs tracking-[0.1em] uppercase text-terracotta-500 hover:text-ink-900 transition-colors">
            Ver portfolio completo &rarr;
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {suggestedProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              meta={project.meta.join ? project.meta.join(' · ') : project.meta}
              image={project.hero}
              to={`/portfolio/${project.slug}`}
            />
          ))}
        </div>
      </section>

      {project.gallery.length === 0 && project.plans.length === 0 && (
        <p className="text-center text-stone-400 font-light py-24">
          Conteúdo deste projeto brevemente disponível.
        </p>
      )}
    </>
  )
}
