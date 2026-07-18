import { useState } from 'react'

/*
  Logo NovaGenesis: icona + wordmark "NOVAGENESIS".
  L'icona usa il file fornito /brand/logo.png (sfondo trasparente); in caso di
  errore ripiega sull'icona vettoriale /brand/logo-mark.svg e, come ultima
  spiaggia, sul quadratino gradient. Il wordmark bianco resta sempre leggibile
  sullo sfondo scuro del sito.
*/
const MARKS = ['/brand/logo.png', '/brand/logo-mark.svg']

export default function Logo({ markClass = 'h-10 w-auto' }) {
  const [idx, setIdx] = useState(0)
  const [failed, setFailed] = useState(false)

  return (
    <span className="flex items-center gap-2.5">
      {failed ? (
        <span
          className={`${markClass} aspect-square rounded-lg bg-gradient-to-br from-nova-blue to-nova-green`}
          aria-hidden="true"
        />
      ) : (
        <img
          src={MARKS[idx]}
          alt=""
          aria-hidden="true"
          onError={() => (idx + 1 < MARKS.length ? setIdx(idx + 1) : setFailed(true))}
          className={markClass}
        />
      )}
      <span className="text-lg font-semibold tracking-tight">NOVAGENESIS</span>
    </span>
  )
}
