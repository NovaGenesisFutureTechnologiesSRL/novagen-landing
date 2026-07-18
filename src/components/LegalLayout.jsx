import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function LegalLayout({ title, updated, children }) {
  return (
    <div className="flex min-h-screen flex-col bg-nova-night">
      {/* Navbar semplificata: solo logo che torna alla home */}
      <header className="sticky top-0 z-40 border-b border-nova-border bg-nova-night/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center px-5 py-4 sm:px-8">
          <Link to="/" className="flex items-center gap-2.5 text-white" aria-label="Torna alla home NovaGenesis">
            <span
              className="h-8 w-8 rounded-lg bg-gradient-to-br from-nova-blue to-nova-green shadow-[0_0_18px_rgba(46,230,166,0.35)]"
              aria-hidden="true"
            />
            <span className="text-lg font-semibold tracking-tight">NOVAGENESIS</span>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
          {updated && (
            <p className="mt-3 text-sm text-nova-muted">Ultimo aggiornamento: {updated}</p>
          )}
          <div className="legal mt-10 space-y-8 text-[0.95rem] leading-relaxed text-nova-muted">
            {children}
          </div>
          <div className="mt-12 border-t border-nova-border pt-6">
            <Link to="/" className="text-sm font-medium text-nova-green hover:text-nova-green-2">
              ← Torna alla home
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}

/* Sottotitolo di sezione riutilizzabile nelle pagine legali */
export function LegalSection({ heading, children }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-white">{heading}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  )
}
