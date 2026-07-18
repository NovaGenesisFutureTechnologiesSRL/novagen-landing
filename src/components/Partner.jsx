const partners = ['Helion Energy', 'AtlasGrid', 'Terra Institute', 'HydroWorks', 'Voltaic Labs']

export default function Partner() {
  return (
    <section id="applicazioni" className="border-y border-nova-border bg-nova-night-2">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-nova-muted">
          Partner di aziende e istituzioni
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16">
          {partners.map((name) => (
            <li
              key={name}
              className="flex items-center gap-2 text-lg font-semibold text-nova-muted/80 grayscale transition hover:text-white hover:grayscale-0"
            >
              <span
                aria-hidden="true"
                className="h-6 w-6 rounded-md bg-gradient-to-br from-nova-electric to-nova-electric-2"
              />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
