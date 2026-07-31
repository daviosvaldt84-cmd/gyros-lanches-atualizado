import { WhatsAppLink } from './WhatsAppButton'

export default function MobileActionBar() {
  return (
    <nav
      aria-label="Ações rápidas"
      className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 border-t border-headlight/25 bg-night/95 backdrop-blur supports-[backdrop-filter]:bg-night/85 md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href="#cardapio"
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-semibold text-cream/90 active:bg-night-card focus:outline-none focus-visible:ring-2 focus-visible:ring-headlight/60"
      >
        <span className="text-lg" aria-hidden="true">🍔</span>
        Cardápio
      </a>
      <WhatsAppLink className="flex flex-col items-center justify-center gap-0.5 bg-gradient-to-br from-headlight to-flame py-2.5 text-xs font-extrabold text-night active:brightness-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-headlight/60">
        <span className="text-lg" aria-hidden="true">📱</span>
        WhatsApp
      </WhatsAppLink>
      <a
        href="#localizacao"
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-semibold text-cream/90 active:bg-night-card focus:outline-none focus-visible:ring-2 focus-visible:ring-headlight/60"
      >
        <span className="text-lg" aria-hidden="true">📍</span>
        Localização
      </a>
    </nav>
  )
}
