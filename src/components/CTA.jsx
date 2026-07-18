import { ArrowRight } from 'lucide-react'

export default function CTA({ onContact }) {
  return (
    <section id="risorse" className="relative overflow-hidden bg-nova-night">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-nova-electric/20 blur-[120px]"
      />
      <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Parliamo della tua prossima sfida.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-nova-muted">
          Che tu voglia decarbonizzare la produzione, integrare l&apos;idrogeno
          verde o valutare una partnership tecnologica: siamo pronti ad
          ascoltarti.
        </p>
        <button
          type="button"
          onClick={onContact}
          className="mt-9 inline-flex items-center justify-center gap-2 rounded-lg bg-nova-electric px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_rgba(59,91,255,0.5)] transition-colors hover:bg-nova-electric-2"
        >
          Contattaci
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
