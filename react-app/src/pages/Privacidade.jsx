import LegalLayout from '../components/LegalLayout'

function Section({ title, children }) {
  return (
    <div>
      <h2 className="font-serif text-2xl text-ink-900 font-medium mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

export default function Privacidade() {
  return (
    <LegalLayout eyebrow="Legal" title="Política de Privacidade" updated="1 de julho de 2026">
      <Section title="1. Quem Somos">
        <p>
          A Cardoso &amp; Costa, Construções, Lda. ("Cardoso &amp; Costa", "nós") é responsável pelo
          tratamento dos dados pessoais recolhidos através deste website, no âmbito da sua atividade
          de construção e promoção imobiliária.
        </p>
      </Section>

      <Section title="2. Dados que Recolhemos">
        <p>
          Recolhemos os dados que nos fornece voluntariamente através dos formulários do site, como
          nome, email, telefone e tipologia de imóvel de interesse, quando solicita uma apresentação
          privada ou entra em contacto connosco.
        </p>
      </Section>

      <Section title="3. Finalidade do Tratamento">
        <p>
          Os dados recolhidos são utilizados exclusivamente para responder a pedidos de informação,
          agendar visitas e apresentações, e manter contacto comercial relacionado com os nossos
          empreendimentos. Não vendemos nem partilhamos os seus dados com terceiros para fins de
          marketing alheios à Cardoso &amp; Costa.
        </p>
      </Section>

      <Section title="4. Prazo de Conservação">
        <p>
          Os dados pessoais são conservados apenas durante o período necessário para cumprir a
          finalidade que motivou a sua recolha, ou enquanto durar a relação comercial connosco.
        </p>
      </Section>

      <Section title="5. Os Seus Direitos">
        <p>
          Nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD), tem direito a aceder,
          retificar, apagar ou limitar o tratamento dos seus dados, bem como a opor-se ao tratamento e
          solicitar a portabilidade dos mesmos. Pode exercer estes direitos contactando-nos através dos
          canais indicados abaixo.
        </p>
      </Section>

      <Section title="6. Contacto">
        <p>
          Para qualquer questão relacionada com esta política ou com o tratamento dos seus dados
          pessoais, contacte-nos através da página de{' '}
          <a href="/contacto" className="text-terracotta-500 underline">Contacto</a>.
        </p>
      </Section>
    </LegalLayout>
  )
}
