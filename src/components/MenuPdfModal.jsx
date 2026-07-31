import { useEffect } from 'react'
import business from '../data/business'

export default function MenuPdfModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-3 md:p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-pdf-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-headlight/35 bg-night shadow-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-night-line px-4 py-3 md:px-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-headlight">Cardápio oficial</p>
            <h3 id="menu-pdf-title" className="font-display text-lg text-cream md:text-xl">Gyros Lanches</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full border border-night-line text-xl text-cream transition-colors hover:border-headlight hover:text-headlight focus:outline-none focus-visible:ring-2 focus-visible:ring-headlight"
            aria-label="Fechar cardápio completo"
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto bg-[#ece7df] p-3 md:p-5">
          <div className="mx-auto grid max-w-4xl gap-4">
            <img
              src="/media/cardapio-pagina-1.webp"
              alt="Página 1 do cardápio oficial do Gyros Lanches"
              className="h-auto w-full rounded-lg shadow-xl"
            />
            <img
              src="/media/cardapio-pagina-2.webp"
              alt="Página 2 do cardápio oficial do Gyros Lanches"
              loading="lazy"
              className="h-auto w-full rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-night-line px-4 py-3 md:px-6">
          <p className="font-body text-xs text-smoke">Preços e disponibilidade podem ser atualizados pelo estabelecimento.</p>
          <div className="flex flex-wrap gap-2">
            <a
              href={business.menuPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-gold rounded-sm border px-4 py-2 text-xs font-bold transition-colors"
            >
              Abrir PDF
            </a>
            <a
              href={business.menuPdfUrl}
              download="cardapio-gyros-lanches.pdf"
              className="gold-button rounded-sm px-4 py-2 text-xs font-extrabold"
            >
              Baixar cardápio
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
