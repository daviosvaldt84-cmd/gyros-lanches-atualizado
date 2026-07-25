import business from '../data/business'
import { WhatsAppLink } from './WhatsAppButton'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#sobre', label: 'Sobre nós' },
  { href: '#localizacao', label: 'Localização' },
]

export default function Footer() {
  return (
    <footer id="contato" className="border-t border-night-line pb-28 pt-14 md:pb-14">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-2 md:grid-cols-4 md:px-8">
        <div className="col-span-2">
          <p className="font-display text-lg text-cream">GYROS <span className="text-flame">LANCHES</span></p>
          <p className="mt-2 max-w-xs font-body text-sm text-smoke">{business.tagline}</p>
          <p className="mt-4 font-body text-sm text-smoke">📍 {business.address.city} – {business.address.state}</p>
          <p className="font-body text-sm text-smoke">📱 {business.phoneDisplay}</p>
          <p className="mt-2 font-body text-sm text-smoke">⏰ Terça a domingo, 18h às 00h</p>
        </div>

        <div>
          <p className="mb-3 font-display text-xs uppercase tracking-wide text-headlight">Navegação</p>
          <ul className="space-y-2 font-body text-sm text-smoke">
            {links.map((link) => (
              <li key={link.href}><a href={link.href} className="transition-colors hover:text-cream">{link.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 font-display text-xs uppercase tracking-wide text-headlight">Fale conosco</p>
          <ul className="space-y-2 font-body text-sm text-smoke">
            <li><a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cream">Instagram</a></li>
            <li><WhatsAppLink className="transition-colors hover:text-cream">WhatsApp</WhatsAppLink></li>
            <li><a href={business.menuPdfUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cream">Cardápio em PDF</a></li>
          </ul>
        </div>
      </div>

      <p className="mt-12 text-center font-mono text-xs text-smoke/60">
        © 2026 Gyros Lanches. Todos os direitos reservados.
      </p>
    </footer>
  )
}
