import PageHeader from '../components/PageHeader'
import ContactForm from '../components/ContactForm'

export default function Contacto() {
  return (
    <>
      <PageHeader eyebrow="Fale Connosco" title="Contacto" />
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid gap-16">
        <ContactForm />
        <aside className="rounded-[2rem] border border-slate-200/60 bg-white/90 p-8 shadow-xl shadow-black/5">
          <p className="text-xs tracking-[0.2em] uppercase text-terracotta-500 mb-4">Contactos</p>
          <h2 className="font-serif text-3xl mb-6">Fale connosco diretamente</h2>
          <p className="text-slate-600 leading-8 mb-8">
            Estamos disponíveis para responder a todas as suas perguntas e ajudá-lo a encontrar o projeto certo.
            Utilize o formulário ou contacte-nos pelos canais abaixo.
          </p>

          <div className="space-y-6 text-sm text-slate-700">
            <div>
              <p className="font-semibold text-slate-900">Morada</p>
              <p>R. Dr. Francisco Sá Carneiro, 653 - 1º</p>
              <p>4420-129 S. Cosme</p>
              <p>Gondomar</p>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Telefone fixo</p>
              <p><a href="tel:224647887" className="text-ink-900 hover:text-terracotta-500 transition-colors">22 464 78 87</a></p>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Telemóvel</p>
              <p><a href="tel:962089482" className="text-ink-900 hover:text-terracotta-500 transition-colors">96 208 94 82</a></p>
              <p><a href="tel:966345324" className="text-ink-900 hover:text-terracotta-500 transition-colors">96 634 53 24</a></p>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Email</p>
              <p><a href="mailto:geral@cardosoecosta.pt" className="text-ink-900 hover:text-terracotta-500 transition-colors">geral@cardosoecosta.pt</a></p>
            </div>
          </div>
        </aside>
      </section>
    </>
  )
}
