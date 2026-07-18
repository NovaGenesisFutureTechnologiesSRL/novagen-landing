import { Factory, CloudDrizzle, Cpu } from 'lucide-react'

const cards = [
  {
    icon: Factory,
    title: 'Produzione di idrogeno',
    text: 'Elettrolizzatori AEM per generare idrogeno verde on-site, dalla piccola scala fino agli impianti industriali.',
  },
  {
    icon: CloudDrizzle,
    title: 'Riduzione CO₂',
    text: 'La stessa tecnologia elettrochimica applicata alla conversione della CO₂ in prodotti utili, per chiudere il ciclo del carbonio.',
  },
  {
    icon: Cpu,
    title: 'Componenti per OEM',
    text: 'Membrane e celle fornite come componenti a produttori e integratori che vogliono costruire i propri sistemi.',
  },
]

export default function Applicazioni() {
  return (
    <section id="applicazioni" className="bg-nova-light-2 py-20 text-nova-ink sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-nova-blue">
            Applicazioni
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Una tecnologia, molti impieghi
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Dalla produzione di energia pulita alla decarbonizzazione dei
            processi industriali, la nostra piattaforma elettrochimica si adatta
            a scenari diversi.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-nova-blue/10 to-nova-green/10 text-nova-blue">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
