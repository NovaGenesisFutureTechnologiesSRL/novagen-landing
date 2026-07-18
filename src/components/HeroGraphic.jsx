import { useState } from 'react'

/*
  Grafica dell'Hero.
  Prova prima /brand/membrana.png (eventuale immagine fornita dall'utente),
  poi l'illustrazione vettoriale /brand/membrana.svg; se nessuna è
  disponibile ripiega sulla grafica SVG a onde inline. Il sito resta sempre
  integro.
*/
const SOURCES = ['/brand/membrana.png', '/brand/membrana.svg']

export default function HeroGraphic() {
  const [idx, setIdx] = useState(0)

  if (idx < SOURCES.length) {
    return (
      <div className="overflow-hidden rounded-2xl border border-nova-border bg-white shadow-2xl">
        <img
          src={SOURCES[idx]}
          alt="Schema della membrana AEM: gli ioni OH⁻ attraversano la membrana dal lato anodo al lato catodo"
          onError={() => setIdx((i) => i + 1)}
          className="h-auto w-full"
        />
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-nova-border bg-nova-panel p-6 shadow-2xl">
      <svg
        viewBox="0 0 400 280"
        className="h-auto w-full"
        role="img"
        aria-label="Rappresentazione astratta del flusso di ioni attraverso la membrana AEM"
      >
        <defs>
          <linearGradient id="waveBlue" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b5bff" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#3b5bff" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b5bff" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="waveGreen" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2ee6a6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#2ee6a6" stopOpacity="1" />
            <stop offset="100%" stopColor="#2ee6a6" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <line x1="200" y1="20" x2="200" y2="260" stroke="#1b2540" strokeWidth="2" strokeDasharray="4 6" />

        <path d="M20 70 C 80 40, 140 100, 200 70" fill="none" stroke="url(#waveBlue)" strokeWidth="2.5" />
        <path d="M20 120 C 80 90, 140 150, 200 120" fill="none" stroke="url(#waveBlue)" strokeWidth="2.5" />
        <path d="M20 170 C 80 140, 140 200, 200 170" fill="none" stroke="url(#waveBlue)" strokeWidth="2.5" />

        <path d="M200 90 C 260 60, 320 120, 380 90" fill="none" stroke="url(#waveGreen)" strokeWidth="2.5" />
        <path d="M200 140 C 260 110, 320 170, 380 140" fill="none" stroke="url(#waveGreen)" strokeWidth="2.5" />
        <path d="M200 190 C 260 160, 320 220, 380 190" fill="none" stroke="url(#waveGreen)" strokeWidth="2.5" />

        <circle cx="70" cy="60" r="4" fill="#3b5bff" />
        <circle cx="130" cy="130" r="3" fill="#5b7bff" />
        <circle cx="90" cy="175" r="3.5" fill="#3b5bff" />
        <circle cx="270" cy="80" r="4" fill="#2ee6a6" />
        <circle cx="330" cy="150" r="3" fill="#57f0bd" />
        <circle cx="300" cy="195" r="3.5" fill="#2ee6a6" />
        <circle cx="200" cy="140" r="5" fill="#ffffff" />
      </svg>

      <div className="mt-4 flex items-center justify-between text-xs text-nova-muted">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-nova-blue" aria-hidden="true" /> Anodo
        </span>
        <span>Membrana AEM</span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-nova-green" aria-hidden="true" /> Catodo · H₂
        </span>
      </div>
    </div>
  )
}
