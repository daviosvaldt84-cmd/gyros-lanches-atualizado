import { useEffect, useState } from 'react'
import { WhatsAppLink } from './WhatsAppButton'
import business from '../data/business'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#sobre', label: 'Sobre nós' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-night/95 backdrop-blur border-b border-night-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="font-display text-lg md:text-xl text-cream tracking-tight">
          GYROS <span className="text-flame">LANCHES</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm text-cream/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-headlight transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <WhatsAppLink className="hidden md:inline-flex items-center gap-2 rounded-full bg-flame hover:bg-flame-light px-4 py-2 text-sm font-semibold text-cream transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-headlight/60">
          <span aria-hidden="true">📱</span> Pedir pelo WhatsApp
        </WhatsAppLink>

        <button
          className="md:hidden text-cream p-2 -mr-2"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-cream transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 bg-cream transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-cream transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-night border-t border-night-line px-5 py-4 flex flex-col gap-4 font-body text-cream/90">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="py-1">
              {l.label}
            </a>
          ))}
          <WhatsAppLink className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-flame px-4 py-2.5 text-sm font-semibold text-cream">
            <span aria-hidden="true">📱</span> Pedir pelo WhatsApp
          </WhatsAppLink>
        </nav>
      )}
    </header>
  )
}
