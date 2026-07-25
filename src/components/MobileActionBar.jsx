import { WhatsAppLink } from './WhatsAppButton'
import business from '../data/business'

export default function MobileActionBar() {
  return (
    <nav
      aria-label="Ações rápidas"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 border-t border-night-line bg-night/95 backdrop-blur supports-[backdrop-filter]:bg-night/80"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href="#cardapio"
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-cream/90 text-xs font-semibold active:bg-night-card focus:outline-none focus-visible:ring-2 focus-visible:ring-headlight/60"
      >
        <span className="text-lg" aria-hidden="true">🍔</span>
        Cardápio
      </a>
      <WhatsAppLink className="flex flex-col items-center justify-center gap-0.5 py-2.5 bg-flame text-cream text-xs font-bold active:bg-flame-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-headlight/60">
        <span className="text-lg" aria-hidden="true">📱</span>
        WhatsApp
      </WhatsAppLink>
      <a
        href="#localizacao"
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-cream/90 text-xs font-semibold active:bg-night-card focus:outline-none focus-visible:ring-2 focus-visible:ring-headlight/60"
      >
        <span className="text-lg" aria-hidden="true">📍</span>
        Localização
      </a>
    </nav>
  )
}
