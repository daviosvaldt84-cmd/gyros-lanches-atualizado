import business from '../data/business'

function buildWhatsappUrl() {
  const text = encodeURIComponent(business.whatsappMessage)
  return `https://wa.me/${business.phoneWhatsapp}?text=${text}`
}

export function WhatsAppLink({ children, className = '' }) {
  return (
    <a
      href={buildWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fazer pedido pelo WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 rounded-full bg-flame hover:bg-flame-light text-cream font-body font-semibold px-5 py-3.5 shadow-flame transition-all hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-headlight/60"
    >
      <span className="text-lg" aria-hidden="true">📱</span>
      Faça seu pedido!
    </a>
  )
}
