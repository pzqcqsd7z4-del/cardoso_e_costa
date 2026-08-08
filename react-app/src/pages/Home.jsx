import { Link } from 'react-router-dom'
import ProjectHero from '../components/ProjectHero'
import Stats from '../components/Stats'
import ProjectCard from '../components/ProjectCard'
import CtaBanner from '../components/CtaBanner'

const otherProjects = [
  { title: 'Edifício Bismark', meta: 'Apartamentos T2, T3, T4 · Concluído', image: '/images/edificio-bismark/hero.jpg', to: '/portfolio/edificio-bismark' },
  { title: 'Edifício Crasto Living', meta: '20 Frações · Em Construção', image: '/images/casas-das-oliveiras/hero.jpg', to: '/portfolio/crasto-living' },
]

export default function Home() {
  return (
    <>
      <ProjectHero
        eyebrow="Cardoso & Costa · Desde 1990"
        title="Construção com alma. Arquitetura com propósito."
        image="/images/edificio-real-serenity/hero.jpg"
        meta={['35+ anos de experiência', 'Projetos residenciais', 'Acompanhamento integral']}
        actions={(
          <>
            <Link
              to="/portfolio"
              className="inline-flex items-center bg-white px-7 py-4 text-xs font-medium uppercase tracking-[0.1em] text-ink-900 transition-colors hover:bg-terracotta-400 hover:text-white"
            >
              Ver Portfolio
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center border border-white/50 px-7 py-4 text-xs font-medium uppercase tracking-[0.1em] text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Fale Connosco
            </Link>
          </>
        )}
      />

      <Stats />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-terracotta-500 mb-4">Projeto em Destaque</p>
          <h2 className="font-serif text-3xl lg:text-5xl mb-6">Casas das oliveiras</h2>
          <p className="text-stone-500 font-light max-w-[46ch] mb-8">
            8 moradias T3 com jardim próprio, pensadas para conforto familiar e
            proximidade com a natureza.
          </p>
          <Link to="/portfolio/casas-das-oliveiras" className="inline-flex items-center gap-3 bg-ink-900 text-white px-7 py-4 text-xs tracking-[0.1em] uppercase font-medium">
            Ver Projeto <span>&rarr;</span>
          </Link>
        </div>
        <div className="aspect-[4/5] bg-stone-300 overflow-hidden">
          <img
            src="/images/moradias-regadas/moradia-1/interior-sala-01.jpg"
            alt="Moradias de Regadas"
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24 lg:pb-32">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-terracotta-500 mb-4">Mais Projetos</p>
            <h2 className="font-serif text-3xl lg:text-4xl">Outros Empreendimentos</h2>
          </div>
          <Link to="/portfolio" className="text-xs tracking-[0.1em] uppercase text-terracotta-500 hover:text-ink-900 transition-colors">
            Ver Portfolio Completo &rarr;
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {otherProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
