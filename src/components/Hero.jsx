import { ArrowRight, Play } from 'lucide-react'

export default function Hero({ onContact }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-nova-border bg-nova-night"
    >
      {/* glow di sfondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-nova-electric/20 blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        {/* Colonna testo */}
        <div className="text-left">
          <p className="mb-5 inline-flex items-center rounded-full border border-nova-border bg-nova-night-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-nova-electric-2">
            Tecnologia profonda. Impatto reale.
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            L&apos;idrogeno verde
            <br />
            che alimenta il domani
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-nova-muted">
            Novagenesis Future Technologies trasforma la ricerca deep-tech in
            infrastrutture per l&apos;idrogeno verde: efficienti, scalabili e
            sostenibili. Dalla scienza dei materiali alla piattaforma
            intelligente.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onContact}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-nova-electric px-6 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(59,91,255,0.45)] transition-colors hover:bg-nova-electric-2"
            >
              Contattaci
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <a
              href="#tecnologia"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-nova-border bg-nova-night-2 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-nova-electric/50"
            >
              <Play className="h-4 w-4" aria-hidden="true" />
              Scopri la tecnologia
            </a>
          </div>
        </div>

        {/* Colonna grafica a onde */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-nova-border bg-nova-night-2 p-4 shadow-2xl">
            <WaveGraphic />
          </div>
        </div>
      </div>
    </section>
  )
}

function WaveGraphic() {
  return (
    <svg
      viewBox="0 0 480 320"
      className="h-auto w-full"
      role="img"
      aria-label="Grafica astratta a onde che rappresenta il flusso di energia dell'idrogeno verde"
    >
      <defs>
        <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b5bff" />
          <stop offset="100%" stopColor="#5b7bff" />
        </linearGradient>
      </defs>
      <rect width="480" height="320" fill="#0a0e1a" rx="12" />
      {Array.from({ length: 9 }).map((_, i) => {
        const y = 40 + i * 28
        const opacity = 0.25 + i * 0.08
        return (
          <path
            key={i}
            d={`M0 ${y} C 120 ${y - 34}, 240 ${y + 34}, 480 ${y - 10}`}
            fill="none"
            stroke="url(#waveGrad)"
            strokeWidth="2"
            opacity={Math.min(opacity, 0.9)}
          />
        )
      })}
      {[[120, 96], [300, 150], [400, 210]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#5b7bff">
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur={`${2 + i}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  )
}
