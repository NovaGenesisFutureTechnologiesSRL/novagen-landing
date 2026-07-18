/*
  Modello base per societa in costituzione.
  Aggiornare con P.IVA, sede legale ed eventuale PEC appena disponibili.
  Far verificare da un legale prima della pubblicazione definitiva.
*/
import LegalLayout, { LegalSection } from '../components/LegalLayout'

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="Luglio 2026">
      <p>
        La presente informativa è resa ai sensi degli artt. 13 e 14 del
        Regolamento (UE) 2016/679 (&laquo;GDPR&raquo;) a chi interagisce con il
        sito di NovaGenesis e utilizza il form di contatto.
      </p>

      <LegalSection heading="Titolare del trattamento">
        <p>
          Il Titolare del trattamento è <strong>NovaGenesis</strong> (società in
          costituzione), in attesa di attribuzione di Partita IVA e sede legale.
        </p>
        <p>
          Per qualsiasi richiesta relativa al trattamento dei dati è possibile
          scrivere a{' '}
          <a className="text-nova-green hover:text-nova-green-2" href="mailto:it@novagentech.it">
            it@novagentech.it
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Dati raccolti">
        <p>
          Vengono trattati esclusivamente i dati che l&apos;utente invia
          volontariamente tramite il form di contatto: <strong>nome</strong>,{' '}
          <strong>email</strong> e <strong>messaggio</strong>. Non raccogliamo
          altri dati e non utilizziamo strumenti di analisi, pixel o tracker.
        </p>
      </LegalSection>

      <LegalSection heading="Finalità del trattamento">
        <p>
          I dati sono trattati al solo fine di rispondere alle richieste di
          contatto inviate dall&apos;utente.
        </p>
      </LegalSection>

      <LegalSection heading="Base giuridica">
        <p>
          Il trattamento si fonda sul consenso dell&apos;interessato e/o
          sull&apos;esecuzione di misure precontrattuali adottate su richiesta
          dello stesso (art. 6, par. 1, lett. a e b, GDPR).
        </p>
      </LegalSection>

      <LegalSection heading="Modalità del trattamento">
        <p>
          L&apos;invio del messaggio avviene tramite il client di posta
          elettronica dell&apos;utente (funzione <em>mailto</em>): i dati
          inseriti vengono recapitati all&apos;indirizzo{' '}
          <a className="text-nova-green hover:text-nova-green-2" href="mailto:it@novagentech.it">
            it@novagentech.it
          </a>
          . Il sito non memorizza i dati su alcun server proprio.
        </p>
      </LegalSection>

      <LegalSection heading="Conservazione dei dati">
        <p>
          I dati sono conservati per il tempo strettamente necessario a gestire
          la richiesta dell&apos;utente e adempiere alle finalità sopra
          indicate.
        </p>
      </LegalSection>

      <LegalSection heading="Comunicazione e trasferimento">
        <p>
          I dati non sono comunicati a terzi, non sono oggetto di trasferimento
          verso Paesi extra-UE e non sono soggetti ad alcun processo di
          profilazione o decisione automatizzata.
        </p>
      </LegalSection>

      <LegalSection heading="Diritti dell'interessato">
        <p>
          L&apos;interessato può in qualsiasi momento esercitare i diritti
          previsti dagli artt. 15-22 del GDPR:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>accesso ai propri dati personali;</li>
          <li>rettifica dei dati inesatti;</li>
          <li>cancellazione dei dati (&laquo;diritto all&apos;oblio&raquo;);</li>
          <li>limitazione e opposizione al trattamento;</li>
          <li>portabilità dei dati;</li>
          <li>
            reclamo all&apos;Autorità di controllo (Garante per la protezione
            dei dati personali).
          </li>
        </ul>
        <p>
          Per esercitare tali diritti è sufficiente scrivere a{' '}
          <a className="text-nova-green hover:text-nova-green-2" href="mailto:it@novagentech.it">
            it@novagentech.it
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
