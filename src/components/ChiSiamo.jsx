import { useState } from 'react'

const founders = [
  {
    name: 'Gioele Primiterra',
    role: 'Founder, Chairman/CTO',
    photo: '/team/gioele-primiterra.jpg',
    initials: 'GP',
  },
  {
    name: 'Irene Serra',
    role: 'Advisor',
    photo: '/team/irene-serra.jpg',
    initials: 'IS',
  },
  {
    name: 'Andrea Giardini',
    role: 'Co-founder, CEO',
    photo: '/team/andrea-giardini.jpg',
    initials: 'AG',
  },
]

function Avatar({ photo, name, initials }) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div
        className="grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-nova-blue to-nova-green text-2xl font-bold text-nova-night"
        aria-hidden="true"
      >
        {initials}
      </div>
    )
  }

  return (
    <img
      src={photo}
      alt={`Foto di ${name}`}
      onError={() => setErrored(true)}
      className="h-28 w-28 rounded-full object-cover ring-2 ring-nova-border"
    />
  )
}

export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className="bg-nova-night py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-nova-green">
            Chi siamo
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Il team che sta costruendo Novagenesis
          </h2>
          <p className="mt-5 text-base leading-relaxed text-nova-muted">
            Uniamo ricerca sui materiali, ingegneria e visione d&apos;impresa per
            portare l&apos;idrogeno verde fuori dal laboratorio.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          {founders.map((f) => (
            <div
              key={f.name}
              className="flex flex-col items-center rounded-2xl border border-nova-border bg-nova-panel p-8 text-center"
            >
              <Avatar photo={f.photo} name={f.name} initials={f.initials} />
              <h3 className="mt-5 text-lg font-semibold text-white">{f.name}</h3>
              <p className="mt-1 text-sm text-nova-green">{f.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
