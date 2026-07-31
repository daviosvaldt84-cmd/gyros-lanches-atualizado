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
      className="gold-button fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-sm px-5 py-3.5 font-body font-extrabold shadow-flame transition-transform hover:scale-[1.04] focus:outline-none focus-visible:ring-4 focus-visible:ring-headlight/60 md:flex"
    >
      <span className="text-lg" aria-hidden="true">📱</span>
      Faça seu pedido!
    </a>
  )
}
