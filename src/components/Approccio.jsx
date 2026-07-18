import { FlaskConical, Cpu, ShieldCheck, Leaf } from 'lucide-react'

const cards = [
  {
    icon: FlaskConical,
    title: 'Ricerca proprietaria',
    text: 'Elettrocatalizzatori e materiali sviluppati nei nostri laboratori per massimizzare la resa dell’elettrolisi.',
  },
  {
    icon: Cpu,
    title: 'Ingegneria avanzata',
    text: 'Progettazione di stack e sistemi ad alta densità, dal prototipo alla produzione industriale.',
  },
  {
    icon: ShieldCheck,
    title: 'Sicurezza by design',
    text: 'Protocolli di sicurezza integrati in ogni livello, dalla cella al sistema di controllo.',
  },
  {
    icon: Leaf,
    title: 'Impatto sostenibile',
    text: 'Idrogeno verde a zero emissioni, alimentato al 100% da fonti rinnovabili.',
  },
]

export default function Approccio() {
  return (
    <section id="chi-siamo" className="bg-nova-light text-nova-ink">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-nova-electric">
            Il nostro approccio
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-nova-ink sm:text-4xl">
            Ricerca. Sviluppo. Impatto.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Uniamo scienza dei materiali, ingegneria di sistema e un modello
            operativo sostenibile per portare l&apos;idrogeno verde su scala reale.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-nova-electric/10 text-nova-electric transition-colors group-hover:bg-nova-electric group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-nova-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
