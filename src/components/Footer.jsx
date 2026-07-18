import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-nova-border bg-nova-night">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <div className="flex items-center text-white">
          <Logo markClass="h-8 w-auto" />
        </div>

        <p className="text-center text-xs text-nova-muted">
          © 2026 NovaGenesis — in costituzione
        </p>

        <nav aria-label="Note legali" className="flex items-center gap-6">
          <Link to="/privacy" className="text-xs text-nova-muted transition-colors hover:text-white">
            Privacy
          </Link>
          <Link to="/cookie" className="text-xs text-nova-muted transition-colors hover:text-white">
            Cookie
          </Link>
        </nav>
      </div>
    </footer>
  )
}
