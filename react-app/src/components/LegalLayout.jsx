import PageHeader from './PageHeader'

export default function LegalLayout({ eyebrow, title, updated, children }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} />
      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <p className="text-xs text-stone-400 mb-12">Última atualização: {updated}</p>
        <div className="space-y-10 text-stone-600 font-light leading-relaxed">
          {children}
        </div>
      </section>
    </>
  )
}
