export default function Footer() {
  return (
    <footer className="border-t border-nova-border bg-nova-night">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2.5 text-white">
          <span
            className="h-7 w-7 rounded-lg bg-gradient-to-br from-nova-blue to-nova-green"
            aria-hidden="true"
          />
          <span className="text-sm font-semibold tracking-tight">NOVAGENESIS</span>
        </div>

        <p className="text-center text-xs text-nova-muted">
          © 2026 NovaGenesis — in costituzione
        </p>

        <nav aria-label="Note legali" className="flex items-center gap-6">
          <a href="#" className="text-xs text-nova-muted transition-colors hover:text-white">
            Privacy
          </a>
          <a href="#" className="text-xs text-nova-muted transition-colors hover:text-white">
            Cookie
          </a>
        </nav>
      </div>
    </footer>
  )
}
