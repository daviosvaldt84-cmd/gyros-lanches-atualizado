import business from '../data/business'
import { WhatsAppLink } from './WhatsAppButton'
import BrandLogo from './BrandLogo'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#sobre', label: 'Sobre nós' },
  { href: '#localizacao', label: 'Localização' },
]

export default function Footer() {
  return (
    <footer id="contato" className="brand-section relative overflow-hidden pb-28 pt-20 md:pb-14">
      <img src="/media/gyros-logo.png" alt="" className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 object-contain opacity-[0.045]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 md:grid-cols-4 md:px-8">
        <div className="col-span-2">
          <div className="flex items-center gap-4">
            <BrandLogo className="h-20 w-20 shrink-0" />
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-cream">Gyros</p>
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-headlight">Lanches</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-smoke">{business.tagline}</p>
          <div className="mt-5 space-y-1 border-l border-headlight/45 pl-4">
            <p className="font-body text-sm text-smoke">📍 {business.address.city} – {business.address.state}</p>
            <p className="font-body text-sm text-smoke">📱 {business.phoneDisplay}</p>
            <p className="font-body text-sm text-smoke">⏰ Terça a domingo, 18h às 00h</p>
          </div>
        </div>

        <div>
          <p className="mb-4 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-headlight">Navegação</p>
          <ul className="space-y-3 font-body text-sm text-smoke">
            {links.map((link) => (
              <li key={link.href}><a href={link.href} className="transition-colors hover:text-headlight">{link.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-headlight">Fale conosco</p>
          <ul className="space-y-3 font-body text-sm text-smoke">
            <li><a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-headlight">Instagram</a></li>
            <li><WhatsAppLink className="transition-colors hover:text-headlight">WhatsApp</WhatsAppLink></li>
            <li><a href={business.menuPdfUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-headlight">Cardápio em PDF</a></li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-12 h-4 max-w-6xl bg-[url('/media/greek-key.svg')] bg-repeat-x opacity-35" />
      <p className="relative mt-6 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-smoke/55">
        © 2026 Gyros Lanches. Todos os direitos reservados.
      </p>
    </footer>
  )
}
