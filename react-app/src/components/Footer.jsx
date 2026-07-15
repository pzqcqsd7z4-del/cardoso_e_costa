import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-900 text-ink-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-8">
        <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div>
            <Link to="/" className="font-serif text-xl font-semibold text-white">
              Cardoso <span className="text-terracotta-400">&amp;</span> Costa
            </Link>
            <p className="text-sm font-light leading-relaxed text-stone-400 mt-5 max-w-[34ch]">
              Referência na construção de espaços arquitetónicos contemporâneos em Portugal desde 1998.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[11px] hover:border-terracotta-400 hover:text-terracotta-300 transition-colors">IG</a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[11px] hover:border-terracotta-400 hover:text-terracotta-300 transition-colors">IN</a>
            </div>
          </div>

          <div>
            <h5 className="text-terracotta-400 text-xs tracking-[0.15em] uppercase mb-5">Projetos</h5>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/portfolio/moradias-regadas" className="hover:text-white transition-colors">Moradias de Regadas</Link></li>
              <li><Link to="/portfolio/edificio-bismark" className="hover:text-white transition-colors">Edifício Bismark</Link></li>
              <li><Link to="/portfolio/casas-das-oliveiras" className="hover:text-white transition-colors">Casas das Oliveiras</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-terracotta-400 text-xs tracking-[0.15em] uppercase mb-5">Empresa</h5>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/empresa" className="hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-terracotta-400 text-xs tracking-[0.15em] uppercase mb-5">Legal</h5>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/termos" className="hover:text-white transition-colors">Termos e Condições</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-stone-400">
          <span>&copy; {year} Cardoso &amp; Costa. Todos os direitos reservados.</span>
          <span>R. Dr. Francisco Sá Carneiro, 653 - 1º · 4420-129 S. Cosme · Gondomar</span>
          <span>22 464 78 87 · 96 208 94 82 · 96 634 53 24 · geral@cardosoecosta.pt</span>
        </div>
      </div>
    </footer>
  )
}
