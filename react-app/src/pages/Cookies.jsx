import LegalLayout from '../components/LegalLayout'

function Section({ title, children }) {
  return (
    <div>
      <h2 className="font-serif text-2xl text-ink-900 font-medium mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

export default function Cookies() {
  return (
    <LegalLayout eyebrow="Legal" title="Política de Cookies" updated="1 de julho de 2026">
      <Section title="1. O Que São Cookies">
        <p>
          Cookies são pequenos ficheiros de texto guardados no seu dispositivo quando visita um
          website, permitindo reconhecer o seu browser e melhorar a experiência de navegação.
        </p>
      </Section>

      <Section title="2. Cookies que Utilizamos">
        <p>Este website utiliza apenas cookies essenciais ao seu funcionamento, nomeadamente para:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Lembrar a sua escolha relativamente ao consentimento de cookies;</li>
          <li>Garantir a navegação correta entre as páginas do site.</li>
        </ul>
        <p>
          Não utilizamos cookies de publicidade nem de rastreio de terceiros. Caso venhamos a
          introduzir ferramentas de análise de tráfego no futuro, esta página será atualizada em
          conformidade.
        </p>
      </Section>

      <Section title="3. Como Gerir os Cookies">
        <p>
          Pode a qualquer momento apagar os cookies guardados ou alterar as permissões do seu browser
          para bloquear novos cookies. Note que desativar cookies essenciais pode afetar o normal
          funcionamento do site.
        </p>
      </Section>

      <Section title="4. Mais Informação">
        <p>
          Para qualquer questão sobre esta política, contacte-nos através da página de{' '}
          <a href="/contacto" className="text-terracotta-500 underline">Contacto</a>.
        </p>
      </Section>
    </LegalLayout>
  )
}
