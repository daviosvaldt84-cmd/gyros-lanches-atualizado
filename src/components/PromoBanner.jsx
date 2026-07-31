import Reveal from './Reveal'
import { WhatsAppLink } from './WhatsAppButton'

export default function PromoBanner() {
  return (
    <section className="relative isolate overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(242,193,91,.18),transparent_30%),linear-gradient(120deg,#090908_0%,#21170b_55%,#6b4219_100%)]" />
      <div className="absolute inset-x-0 top-0 h-4 bg-[url('/media/greek-key.svg')] bg-repeat-x opacity-55" />
      <div className="absolute inset-x-0 bottom-0 h-4 bg-[url('/media/greek-key.svg')] bg-repeat-x opacity-35" />
      <img src="/media/gyros-logo.png" alt="" className="pointer-events-none absolute -right-12 top-1/2 h-72 w-72 -translate-y-1/2 object-contain opacity-[0.08] md:right-6 md:h-96 md:w-96" />
      <div className="absolute inset-0 bg-grain bg-[length:18px_18px] opacity-20" />

      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal variant="scale">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-headlight-soft">Bateu aquela fome?</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-cream md:text-5xl">
            Seu lanche favorito está <span className="gold-text">esperando por você!</span>
          </h2>
          <WhatsAppLink className="gold-button mt-8 inline-flex items-center gap-2 rounded-sm px-7 py-4 font-extrabold transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-4 focus-visible:ring-headlight/60">
            <span aria-hidden="true">📱</span> Faça seu pedido pelo WhatsApp
          </WhatsAppLink>
        </Reveal>
      </div>
    </section>
  )
}
