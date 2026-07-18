import { Check, Layers, Server, Database, AppWindow } from 'lucide-react'

const features = [
  'AI / ML per l’ottimizzazione dei processi',
  'Big Data dai sensori di impianto in tempo reale',
  'Modelli predittivi per manutenzione e resa',
  'Architettura API-first, integrabile ovunque',
]

const layers = [
  { icon: AppWindow, name: 'Applicazioni', desc: 'Dashboard, report, controllo remoto' },
  { icon: Layers, name: 'Piattaforma', desc: 'AI, analytics, orchestrazione' },
  { icon: Server, name: 'Infrastruttura', desc: 'Elettrolizzatori, stack, edge' },
  { icon: Database, name: 'Dati', desc: 'Telemetria, storico, modelli' },
]

export default function Piattaforma() {
  return (
    <section id="tecnologia" className="bg-white text-nova-ink">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        {/* Testo + check */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-nova-electric">
            La piattaforma
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-nova-ink sm:text-4xl">
            Un cervello digitale per ogni impianto
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Il nostro software converte i dati d&apos;impianto in decisioni:
            più efficienza, meno fermi, produzione prevedibile.
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-nova-electric/10 text-nova-electric">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-base text-slate-700">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card scura con diagramma a 4 livelli */}
        <div className="rounded-2xl border border-nova-border bg-nova-night p-6 shadow-2xl sm:p-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-nova-electric-2">
            Architettura a livelli
          </p>
          <div className="space-y-3">
            {layers.map(({ icon: Icon, name, desc }, i) => (
              <div
                key={name}
                className="flex items-center gap-4 rounded-xl border border-nova-border bg-nova-night-2 p-4"
                style={{ marginLeft: `${i * 12}px` }}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-nova-electric/15 text-nova-electric-2">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">{name}</p>
                  <p className="text-xs text-nova-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
