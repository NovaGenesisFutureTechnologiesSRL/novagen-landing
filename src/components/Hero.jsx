const stats = [
  { label: 'Cost Efficient', value: '~36%', desc: 'più economico dei sistemi attuali' },
  { label: 'High durability', value: 'PGM-free', desc: 'Polimero innovativo' },
  { label: 'PFAS-free', value: '', desc: 'senza fluoro' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-nova-night pt-16 pb-20 sm:pt-20 sm:pb-28"
    >
      {/* Glow decorativi */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-24 h-80 w-80 rounded-full bg-nova-blue/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-nova-green/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        {/* Colonna testo */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-nova-border bg-nova-panel px-3.5 py-1.5 text-xs font-semibold tracking-wide text-nova-green">
            <span className="h-1.5 w-1.5 rounded-full bg-nova-green" aria-hidden="true" />
            IDROGENO VERDE · TECNOLOGIA AEM
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            La membrana che sblocca
            <br className="hidden sm:block" /> l&apos;idrogeno verde
          </h1>

          <p className="mt-5 text-lg font-medium text-nova-green sm:text-xl">
            Elettrolizzatori AEM di nuova generazione, senza fluoro e ad alta
            durabilità.
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-nova-muted">
            Progettiamo membrane proprietarie che rendono la produzione di
            idrogeno più semplice, più economica e più pulita. Un cuore
            tecnologico pensato per scalare, dai laboratori agli impianti
            industriali.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contatti"
              className="inline-flex items-center justify-center rounded-lg bg-nova-green px-6 py-3 text-sm font-semibold text-nova-night shadow-[0_0_24px_rgba(46,230,166,0.35)] transition-colors hover:bg-nova-green-2"
            >
              Parla con noi
            </a>
            <a
              href="#tecnologia"
              className="inline-flex items-center justify-center rounded-lg border border-nova-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-nova-blue hover:text-nova-blue-2"
            >
              Scopri la tecnologia
            </a>
          </div>

          {/* Stat */}
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-nova-border pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-nova-green">
                  {s.label}
                </p>
                {s.value && (
                  <dt className="mt-1 text-xl font-bold text-white sm:text-2xl">{s.value}</dt>
                )}
                <dd className="mt-1 text-xs leading-snug text-nova-muted">{s.desc}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Colonna grafica: card scura con onde SVG */}
        <div className="relative">
          <div className="rounded-2xl border border-nova-border bg-nova-panel p-6 shadow-2xl">
            <svg
              viewBox="0 0 400 280"
              className="h-auto w-full"
              role="img"
              aria-label="Rappresentazione astratta del flusso di elettroni attraverso la membrana AEM"
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

              {/* Membrana centrale */}
              <line x1="200" y1="20" x2="200" y2="260" stroke="#1b2540" strokeWidth="2" strokeDasharray="4 6" />

              {/* Onde blu (lato anodo) */}
              <path d="M20 70 C 80 40, 140 100, 200 70" fill="none" stroke="url(#waveBlue)" strokeWidth="2.5" />
              <path d="M20 120 C 80 90, 140 150, 200 120" fill="none" stroke="url(#waveBlue)" strokeWidth="2.5" />
              <path d="M20 170 C 80 140, 140 200, 200 170" fill="none" stroke="url(#waveBlue)" strokeWidth="2.5" />

              {/* Onde verdi (lato catodo) */}
              <path d="M200 90 C 260 60, 320 120, 380 90" fill="none" stroke="url(#waveGreen)" strokeWidth="2.5" />
              <path d="M200 140 C 260 110, 320 170, 380 140" fill="none" stroke="url(#waveGreen)" strokeWidth="2.5" />
              <path d="M200 190 C 260 160, 320 220, 380 190" fill="none" stroke="url(#waveGreen)" strokeWidth="2.5" />

              {/* Punti / ioni */}
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
        </div>
      </div>
    </section>
  )
}
