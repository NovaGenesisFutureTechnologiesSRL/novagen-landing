import HeroGraphic from './HeroGraphic'

const stats = [
  { label: 'Cost Efficient', value: '', desc: 'più economico dei sistemi attuali' },
  { label: 'High durability', value: '', desc: 'Polimero innovativo high resistance' },
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

        {/* Colonna grafica: immagine membrana (con fallback SVG) */}
        <div className="relative">
          <HeroGraphic />
        </div>
      </div>
    </section>
  )
}
