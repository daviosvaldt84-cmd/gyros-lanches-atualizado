import Reveal from './Reveal'
import RouteSign from './RouteSign'
import SceneImage from './SceneImage'
import { WhatsAppLink } from './WhatsAppButton'
import business from '../data/business'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:px-8">
        <div>
          <Reveal variant="left">
            <RouteSign>Praça Alvorada · Camaquã, RS</RouteSign>
          </Reveal>

          <Reveal variant="left" delay={100}>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] text-cream sm:text-5xl md:text-6xl">
              O sabor que <span className="text-flame">transforma</span> sua noite!
            </h1>
          </Reveal>

          <Reveal variant="left" delay={200}>
            <p className="mt-5 max-w-md font-body text-lg text-smoke">
              Lanches variados, bebidas geladas e aquele ambiente descontraído para curtir com quem você gosta.
            </p>
          </Reveal>

          <Reveal variant="left" delay={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cardapio" className="rounded-full bg-headlight px-6 py-3.5 font-body font-bold text-night transition-transform hover:scale-105 hover:bg-headlight-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-headlight/50">
                Ver Cardápio
              </a>
              <WhatsAppLink className="inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3.5 font-body font-bold text-cream transition-transform hover:scale-105 hover:bg-flame-light focus:outline-none focus-visible:ring-4 focus-visible:ring-headlight/50">
                <span aria-hidden="true">📱</span> Pedir pelo WhatsApp
              </WhatsAppLink>
            </div>
          </Reveal>

          <Reveal variant="up" delay={400}>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wide text-smoke">
              <span>⭐ {business.rating.value.toFixed(1).replace('.', ',')} no Google</span>
              <span>📍 Camaquã – RS</span>
              <span>🍔 Cardápio real</span>
              <span>🚌 Food bus</span>
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={150}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-night-line shadow-glow sm:aspect-[5/4] md:aspect-[4/3]">
            <SceneImage
              src="/media/gyros-bus-cerveja.webp"
              alt="Ônibus real do Gyros Lanches na Praça Alvorada, com um copo de chopp em primeiro plano"
              loading="eager"
              fetchPriority="high"
              className="absolute inset-0"
              imageClassName="object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/75 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-night/75 p-3 backdrop-blur">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-headlight">O ônibus da Praça Alvorada</p>
              <p className="mt-1 font-body text-xs text-cream/85">Um ponto diferente para aproveitar a noite em Camaquã.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
