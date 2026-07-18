import { Link } from 'react-router-dom'
import LegalLayout, { LegalSection } from '../components/LegalLayout'

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" updated="Luglio 2026">
      <p>
        La presente Cookie Policy descrive i cookie utilizzati dal sito di
        NovaGenesis e le modalità con cui l&apos;utente può gestirli.
      </p>

      <LegalSection heading="Cookie utilizzati">
        <p>
          Il sito utilizza <strong>esclusivamente cookie tecnici</strong>,
          necessari al corretto funzionamento e alla navigazione delle pagine.
          Non vengono impiegati cookie di profilazione, cookie analitici né
          cookie di terze parti.
        </p>
      </LegalSection>

      <LegalSection heading="Consenso">
        <p>
          I cookie tecnici non richiedono il consenso preventivo
          dell&apos;utente, come previsto dai provvedimenti del Garante per la
          protezione dei dati personali in materia di cookie. Per questo il sito
          non presenta alcun sistema di raccolta del consenso ai cookie.
        </p>
      </LegalSection>

      <LegalSection heading="Come gestire o disabilitare i cookie">
        <p>
          L&apos;utente può in ogni momento gestire, limitare o disabilitare i
          cookie direttamente dalle impostazioni del proprio browser. Di seguito
          i riferimenti per i browser più diffusi:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Google Chrome: Impostazioni → Privacy e sicurezza → Cookie;</li>
          <li>Mozilla Firefox: Impostazioni → Privacy e sicurezza;</li>
          <li>Microsoft Edge: Impostazioni → Cookie e autorizzazioni sito;</li>
          <li>Safari: Preferenze → Privacy.</li>
        </ul>
        <p>
          La disabilitazione dei cookie tecnici potrebbe compromettere alcune
          funzionalità del sito.
        </p>
      </LegalSection>

      <LegalSection heading="Ulteriori informazioni">
        <p>
          Per informazioni sul trattamento dei dati personali si rimanda alla{' '}
          <Link className="text-nova-green hover:text-nova-green-2" to="/privacy">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
