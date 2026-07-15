import LegalLayout from '../components/LegalLayout'

function Section({ title, children }) {
  return (
    <div>
      <h2 className="font-serif text-2xl text-ink-900 font-medium mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

export default function Termos() {
  return (
    <LegalLayout eyebrow="Legal" title="Termos e Condições" updated="1 de julho de 2026">
      <Section title="1. Objeto">
        <p>
          Estes Termos e Condições regulam o acesso e utilização do website da Cardoso &amp; Costa,
          Construções, Lda. Ao navegar neste site, aceita os termos aqui descritos.
        </p>
      </Section>

      <Section title="2. Informação sobre os Empreendimentos">
        <p>
          As imagens, plantas, áreas e prazos de conclusão apresentados para cada empreendimento têm
          caráter meramente informativo e ilustrativo, podendo sofrer alterações no decorrer da obra
          por motivos técnicos, legais ou de licenciamento. A Cardoso &amp; Costa não se responsabiliza
          por pequenas discrepâncias entre o material promocional e o produto final.
        </p>
      </Section>

      <Section title="3. Propriedade Intelectual">
        <p>
          Todo o conteúdo deste website — textos, imagens, logótipos e materiais gráficos — é
          propriedade da Cardoso &amp; Costa ou dos seus parceiros, sendo proibida a sua reprodução,
          distribuição ou utilização sem autorização prévia por escrito.
        </p>
      </Section>

      <Section title="4. Pedidos de Contacto">
        <p>
          Ao submeter um formulário de contacto ou de agendamento de visita, autoriza a Cardoso &amp;
          Costa a contactá-lo através dos dados fornecidos, para os fins descritos na nossa{' '}
          <a href="/privacidade" className="text-terracotta-500 underline">Política de Privacidade</a>.
        </p>
      </Section>

      <Section title="5. Limitação de Responsabilidade">
        <p>
          A Cardoso &amp; Costa envida os melhores esforços para manter a informação deste site
          atualizada e correta, mas não garante a ausência de erros ou omissões, nem se responsabiliza
          por decisões tomadas exclusivamente com base no conteúdo aqui publicado sem confirmação
          direta junto da nossa equipa.
        </p>
      </Section>

      <Section title="6. Lei Aplicável">
        <p>
          Estes termos regem-se pela lei portuguesa, sendo competente o foro da comarca de Lisboa para
          a resolução de qualquer litígio.
        </p>
      </Section>
    </LegalLayout>
  )
}
