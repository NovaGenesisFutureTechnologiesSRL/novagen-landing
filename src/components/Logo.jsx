import { useState } from 'react'

/*
  Logo NovaGenesis.
  Priorità: se esiste /brand/logo.png (lockup completo fornito dall'utente)
  viene mostrato da solo. Altrimenti si usa l'icona vettoriale
  /brand/logo-mark.svg affiancata al wordmark bianco "NOVAGENESIS"
  (leggibile sullo sfondo scuro del sito). Fallback finale: quadratino gradient.
*/
export default function Logo({ imgClass = 'h-10 w-auto', markClass = 'h-9 w-9' }) {
  const [pngFailed, setPngFailed] = useState(false)
  const [svgFailed, setSvgFailed] = useState(false)

  if (!pngFailed) {
    return (
      <img
        src="/brand/logo.png"
        alt="NovaGenesis"
        onError={() => setPngFailed(true)}
        className={imgClass}
      />
    )
  }

  return (
    <span className="flex items-center gap-2.5">
      {svgFailed ? (
        <span
          className={`${markClass} rounded-lg bg-gradient-to-br from-nova-blue to-nova-green`}
          aria-hidden="true"
        />
      ) : (
        <img
          src="/brand/logo-mark.svg"
          alt=""
          aria-hidden="true"
          onError={() => setSvgFailed(true)}
          className={markClass}
        />
      )}
      <span className="text-lg font-semibold tracking-tight">NOVAGENESIS</span>
    </span>
  )
}
