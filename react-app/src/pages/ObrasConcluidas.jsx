import PageHeader from '../components/PageHeader'
import CompletedProjectCard from '../components/CompletedProjectCard'

const completedProjects = [
  { title: 'Edifício S. Pedro Design I e II', meta: '30 Apartamentos + 4 Lojas · Vendido', image: '/images/s-pedro-design/hero.jpg' },
  { title: 'Moradias de Regadas 2ª e 3ª Fase', meta: '13 Moradias T3 · Vendido', image: '/images/moradias-regadas/hero.jpg' },
  { title: 'Empreendimento Villas Premium', meta: '15 Moradias T3 · Vendido', image: '/images/villas-premium/hero.jpg' },
  { title: 'Edifício Real Serenity', meta: '18 Frações (T2/T3/T3+1/T4) · Vendido', image: '/images/edificio-real-serenity/hero.jpg' },
]

export default function ObrasConcluidas() {
  return (
    <>
      <PageHeader eyebrow="Projetos Finalizados" title="Obras Concluídas e Vendidas" />
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-terracotta-400 mb-4">Galeria de Sucesso</p>
          <p className="text-slate-700 text-base leading-7">
            Conheça os nossos projetos já finalizados e vendidos, que refletem o compromisso da Cardoso &amp; Costa com a excelência arquitetônica e a satisfação dos nossos clientes.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {completedProjects.map((p) => (
            <CompletedProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </>
  )
}
