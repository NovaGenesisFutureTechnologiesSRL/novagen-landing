import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'novagen_cookie_ok'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Mostra il banner solo se l'utente non ha già dato l'ok in passato
    try {
      if (localStorage.getItem(STORAGE_KEY) !== '1') setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // localStorage non disponibile: nascondiamo comunque per questa sessione
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Informativa sui cookie"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-xl border border-nova-border bg-nova-panel/95 p-4 shadow-2xl backdrop-blur-md sm:p-5"
    >
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-nova-muted">
          Questo sito usa solo cookie tecnici necessari al funzionamento.
          Continuando la navigazione ne accetti l&apos;uso.{' '}
          <Link to="/cookie" className="font-medium text-nova-green hover:text-nova-green-2">
            Cookie Policy
          </Link>
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-lg bg-nova-green px-5 py-2 text-sm font-semibold text-nova-night transition-colors hover:bg-nova-green-2"
        >
          Ho capito
        </button>
      </div>
    </div>
  )
}
