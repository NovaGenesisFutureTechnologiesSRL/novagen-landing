import { useState } from 'react'
import { Menu, X, Hexagon } from 'lucide-react'

const links = [
  { label: 'Tecnologia', href: '#tecnologia' },
  { label: 'Applicazioni', href: '#applicazioni' },
  { label: 'Chi siamo', href: '#chi-siamo' },
  { label: 'Risorse', href: '#risorse' },
]

export default function Navbar({ onContact }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-nova-border bg-nova-night/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Navigazione principale"
      >
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-nova-electric/15 ring-1 ring-nova-electric/40">
            <Hexagon className="h-5 w-5 text-nova-electric-2" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight">NOVAGENESIS</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-nova-muted transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onContact}
            className="hidden rounded-lg bg-nova-electric px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,91,255,0.4)] transition-colors hover:bg-nova-electric-2 md:inline-flex"
          >
            Contattaci
          </button>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex rounded-lg border border-nova-border p-2 text-white md:hidden"
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-nova-border bg-nova-night px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-nova-muted hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  onContact()
                }}
                className="mt-2 w-full rounded-lg bg-nova-electric px-4 py-2 text-sm font-semibold text-white hover:bg-nova-electric-2"
              >
                Contattaci
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
