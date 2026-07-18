import { ArrowRight } from 'lucide-react'

export default function CTA({ onContact }) {
  return (
    <section id="contatti" className="bg-nova-cta py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-nova-border bg-nova-panel px-6 py-14 shadow-2xl sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-nova-green/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-nova-blue/15 blur-3xl"
          />

          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Parliamo della tua prossima sfida
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-nova-muted">
            Cerchi un partner tecnologico per l&apos;idrogeno verde o la
            decarbonizzazione? Raccontaci il tuo progetto: troviamo insieme la
            soluzione.
          </p>

          <button
            type="button"
            onClick={onContact}
            className="relative mt-8 inline-flex items-center gap-2 rounded-lg bg-nova-green px-7 py-3 text-sm font-semibold text-nova-night shadow-[0_0_24px_rgba(46,230,166,0.4)] transition-colors hover:bg-nova-green-2"
          >
            Contattaci
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
