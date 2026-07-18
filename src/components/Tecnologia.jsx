import { ShieldCheck, Gauge, Leaf, Atom } from 'lucide-react'

const cards = [
  {
    icon: ShieldCheck,
    title: 'Membrana durevole',
    text: 'Il cuore della cella resiste all’uso intenso e nel tempo, per impianti che lavorano a lungo senza cali di rendimento.',
  },
  {
    icon: Gauge,
    title: 'Alte prestazioni',
    text: 'Produce più idrogeno con la stessa energia: meno consumi, più efficienza a ogni ciclo.',
  },
  {
    icon: Leaf,
    title: 'Chimica sostenibile',
    text: 'Niente fluoro (PFAS) né metalli preziosi: materiali più semplici da reperire e da smaltire.',
  },
  {
    icon: Atom,
    title: 'Catalizzatori flessibili',
    text: 'Funziona con materiali comuni e a basso costo, riducendo la dipendenza da elementi rari.',
  },
]

export default function Tecnologia() {
  return (
    <section id="tecnologia" className="bg-nova-light py-20 text-nova-ink sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-nova-blue">
            La tecnologia, in breve
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Ripensiamo il cuore dell&apos;elettrolisi
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            L&apos;idrogeno verde nasce dividendo l&apos;acqua in idrogeno e ossigeno
            usando elettricità rinnovabile. Il punto critico è la membrana, dove
            avviene la reazione. Noi la abbiamo riprogettata da zero per renderla
            più efficiente, più economica e più pulita.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-nova-blue/10 text-nova-blue">
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
