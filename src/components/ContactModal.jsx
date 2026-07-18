import { useState } from 'react'
import { X, Send, CheckCircle2 } from 'lucide-react'

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ nome: '', email: '', messaggio: '' })
  const [sent, setSent] = useState(false)

  if (!open) return null

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const valid =
    form.nome.trim() !== '' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.messaggio.trim() !== ''

  const handleSend = () => {
    if (!valid) return
    // Nessun backend in questa landing: simuliamo l'invio lato client.
    setSent(true)
  }

  const handleClose = () => {
    setSent(false)
    setForm({ nome: '', email: '', messaggio: '' })
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label="Chiudi la finestra di contatto"
        onClick={handleClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Dialog */}
      <div className="relative w-full max-w-md rounded-2xl border border-nova-border bg-nova-panel p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Chiudi"
          className="absolute right-4 top-4 rounded-lg p-1.5 text-nova-muted transition-colors hover:bg-nova-night hover:text-white"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {sent ? (
          <div className="py-6 text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-nova-green/15 text-nova-green">
              <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
            </span>
            <h2 id="contact-title" className="mt-5 text-xl font-semibold text-white">
              Messaggio inviato
            </h2>
            <p className="mt-2 text-sm text-nova-muted">
              Grazie, {form.nome || 'a presto'}. Ti risponderemo al più presto.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-6 w-full rounded-lg bg-nova-green px-4 py-2.5 text-sm font-semibold text-nova-night hover:bg-nova-green-2"
            >
              Chiudi
            </button>
          </div>
        ) : (
          <div>
            <h2 id="contact-title" className="text-xl font-semibold text-white">
              Contattaci
            </h2>
            <p className="mt-1 text-sm text-nova-muted">
              Raccontaci il tuo progetto: ti ricontattiamo noi.
            </p>

            <div className="mt-6 space-y-4 text-left">
              <div>
                <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-white">
                  Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  value={form.nome}
                  onChange={update('nome')}
                  placeholder="Il tuo nome"
                  className="w-full rounded-lg border border-nova-border bg-nova-night px-3.5 py-2.5 text-sm text-white placeholder:text-nova-muted focus:border-nova-green focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="nome@azienda.com"
                  className="w-full rounded-lg border border-nova-border bg-nova-night px-3.5 py-2.5 text-sm text-white placeholder:text-nova-muted focus:border-nova-green focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="messaggio" className="mb-1.5 block text-sm font-medium text-white">
                  Messaggio
                </label>
                <textarea
                  id="messaggio"
                  rows={4}
                  value={form.messaggio}
                  onChange={update('messaggio')}
                  placeholder="Come possiamo aiutarti?"
                  className="w-full resize-none rounded-lg border border-nova-border bg-nova-night px-3.5 py-2.5 text-sm text-white placeholder:text-nova-muted focus:border-nova-green focus:outline-none"
                />
              </div>

              <button
                type="button"
                onClick={handleSend}
                disabled={!valid}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-nova-green px-4 py-2.5 text-sm font-semibold text-nova-night transition-colors hover:bg-nova-green-2 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Invia messaggio
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
