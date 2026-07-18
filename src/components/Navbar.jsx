import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Tecnologia', href: '#tecnologia' },
  { label: 'Applicazioni', href: '#applicazioni' },
  { label: 'Chi siamo', href: '#chi-siamo' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-nova-border bg-nova-night/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Navigazione principale"
      >
        {/* Logo con quadratino gradient blu -> verde */}
        <a href="#hero" className="flex items-center gap-2.5 text-white">
          <span
            className="h-8 w-8 rounded-lg bg-gradient-to-br from-nova-blue to-nova-green shadow-[0_0_18px_rgba(46,230,166,0.35)]"
            aria-hidden="true"
          />
          <span className="text-lg font-semibold tracking-tight">NOVAGENESIS</span>
        </a>

        {/* Link desktop */}
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
          <a
            href="#contatti"
            className="hidden rounded-lg bg-nova-green px-4 py-2 text-sm font-semibold text-nova-night shadow-[0_0_20px_rgba(46,230,166,0.35)] transition-colors hover:bg-nova-green-2 md:inline-flex"
          >
            Parla con noi
          </a>

          {/* Toggle mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex rounded-lg border border-nova-border p-2 text-white md:hidden"
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
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
              <a
                href="#contatti"
                onClick={() => setOpen(false)}
                className="mt-2 block w-full rounded-lg bg-nova-green px-4 py-2 text-center text-sm font-semibold text-nova-night hover:bg-nova-green-2"
              >
                Parla con noi
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
