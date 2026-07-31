import { useEffect, useState } from 'react'
import { WhatsAppLink } from './WhatsAppButton'
import BrandLogo from './BrandLogo'

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
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-headlight/25 bg-night/95 shadow-lg shadow-black/20 backdrop-blur'
          : 'bg-gradient-to-b from-black/75 to-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 md:h-[88px] md:px-8">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="Gyros Lanches — início">
          <BrandLogo compact />
          <span className="hidden font-display text-[11px] font-bold uppercase leading-tight tracking-[0.12em] text-cream sm:block md:text-xs">
            Gyros<br /><span className="text-headlight">Lanches</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 font-body text-sm text-cream/75 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="relative py-2 transition-colors hover:text-headlight after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-headlight after:transition-all hover:after:w-full">
              {link.label}
            </a>
          ))}
        </nav>

        <WhatsAppLink className="gold-button hidden items-center gap-2 rounded-sm px-4 py-2.5 text-sm font-extrabold md:inline-flex focus:outline-none focus-visible:ring-4 focus-visible:ring-headlight/50">
          <span aria-hidden="true">📱</span> Pedir agora
        </WhatsAppLink>

        <button
          className="-mr-2 p-2 text-headlight md:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <div className="flex w-6 flex-col gap-1.5">
            <span className={`h-0.5 bg-headlight transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 bg-headlight transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-headlight transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <nav className="brand-section flex flex-col gap-4 bg-night px-5 pb-5 pt-7 font-body text-cream/90 md:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="border-b border-headlight/10 py-2 transition-colors hover:text-headlight">
              {link.label}
            </a>
          ))}
          <WhatsAppLink className="gold-button mt-1 inline-flex items-center justify-center gap-2 rounded-sm px-4 py-3 text-sm font-extrabold">
            <span aria-hidden="true">📱</span> Pedir pelo WhatsApp
          </WhatsAppLink>
        </nav>
      )}
    </header>
  )
}
