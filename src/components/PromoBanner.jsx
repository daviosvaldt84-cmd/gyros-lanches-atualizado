import Reveal from './Reveal'
import { WhatsAppLink } from './WhatsAppButton'

export default function PromoBanner() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-flame via-flame-dark to-night" />
      <div className="absolute inset-0 opacity-20 bg-grain bg-[length:18px_18px]" />
      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <Reveal variant="scale">
          <p className="font-mono text-xs uppercase tracking-widest text-headlight-soft">Bateu aquela fome?</p>
          <h2 className="font-display text-3xl md:text-5xl text-cream mt-4 leading-tight">
            Seu lanche favorito está esperando por você!
          </h2>
          <WhatsAppLink className="inline-flex items-center gap-2 mt-8 rounded-full bg-night hover:bg-night-soft text-cream font-bold px-7 py-4 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-headlight/60">
            <span aria-hidden="true">📱</span> Faça seu pedido pelo WhatsApp
          </WhatsAppLink>
        </Reveal>
      </div>
    </section>
  )
}
