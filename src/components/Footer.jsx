import { Hexagon } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-nova-border bg-nova-night">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row">
        <div className="flex items-center gap-2 text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-nova-electric/15 ring-1 ring-nova-electric/40">
            <Hexagon className="h-4 w-4 text-nova-electric-2" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold tracking-tight">NOVAGENESIS</span>
        </div>

        <p className="text-center text-sm text-nova-muted">
          &copy; 2025 Novagenesis Future Technologies S.r.l.
        </p>

        <nav aria-label="Link legali" className="flex items-center gap-6">
          <a href="#privacy" className="text-sm text-nova-muted transition-colors hover:text-white">
            Privacy
          </a>
          <a href="#cookie" className="text-sm text-nova-muted transition-colors hover:text-white">
            Cookie
          </a>
        </nav>
      </div>
    </footer>
  )
}
