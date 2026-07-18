import { useState } from 'react'

/*
  Logo NovaGenesis con fallback.
  Mostra l'immagine /brand/logo.png se presente; in sua assenza (o errore di
  caricamento) ripiega sul quadratino gradient + wordmark testuale, così il
  sito resta integro anche prima che il file venga caricato.
*/
export default function Logo({ imgClass = 'h-9 w-auto', squareClass = 'h-8 w-8' }) {
  const [errored, setErrored] = useState(false)

  if (!errored) {
    return (
      <img
        src="/brand/logo.png"
        alt="NovaGenesis"
        onError={() => setErrored(true)}
        className={imgClass}
      />
    )
  }

  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`${squareClass} rounded-lg bg-gradient-to-br from-nova-blue to-nova-green shadow-[0_0_18px_rgba(46,230,166,0.35)]`}
        aria-hidden="true"
      />
      <span className="text-lg font-semibold tracking-tight">NOVAGENESIS</span>
    </span>
  )
}
