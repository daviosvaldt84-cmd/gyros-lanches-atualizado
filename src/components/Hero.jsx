import Reveal from './Reveal'
import RouteSign from './RouteSign'
import SceneImage from './SceneImage'
import BrandLogo from './BrandLogo'
import { WhatsAppLink } from './WhatsAppButton'
import business from '../data/business'

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
      <div className="pointer-events-none absolute -right-20 top-12 h-80 w-80 rounded-full bg-headlight/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-flame/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-[102px] h-4 bg-[url('/media/greek-key.svg')] bg-repeat-x opacity-20 md:top-[120px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.02fr_.98fr] md:px-8">
        <div>
          <Reveal variant="left">
            <div className="flex items-center gap-4">
              <BrandLogo className="h-20 w-20 shrink-0 md:h-24 md:w-24" />
              <div>
                <RouteSign>Praça Alvorada · Camaquã, RS</RouteSign>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-smoke/65">Food bus · desde a praça para sua noite</p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="left" delay={100}>
            <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.08] text-cream sm:text-5xl md:text-[3.45rem]">
              O sabor que <span className="gold-text">transforma</span> sua noite!
            </h1>
          </Reveal>

          <Reveal variant="left" delay={200}>
            <p className="mt-5 max-w-lg font-body text-lg leading-relaxed text-smoke">
              Lanches variados, bebidas geladas e uma experiência marcante dentro do ônibus mais conhecido da Praça Alvorada.
            </p>
          </Reveal>

          <Reveal variant="left" delay={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cardapio" className="gold-button rounded-sm px-6 py-3.5 font-body font-extrabold transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-4 focus-visible:ring-headlight/50">
                Ver Cardápio
              </a>
              <WhatsAppLink className="outline-gold inline-flex items-center gap-2 rounded-sm border px-6 py-3.5 font-body font-bold transition-all hover:scale-[1.03] focus:outline-none focus-visible:ring-4 focus-visible:ring-headlight/40">
                <span aria-hidden="true">📱</span> Pedir pelo WhatsApp
              </WhatsAppLink>
            </div>
          </Reveal>

          <Reveal variant="up" delay={400}>
            <div className="mt-9 grid max-w-xl grid-cols-2 gap-3 font-mono text-[10px] uppercase tracking-wide text-smoke sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              <span className="border-l border-headlight/50 pl-2">⭐ {business.rating.value.toFixed(1).replace('.', ',')} no Google</span>
              <span className="border-l border-headlight/50 pl-2">📍 Camaquã – RS</span>
              <span className="border-l border-headlight/50 pl-2">🍔 Cardápio real</span>
              <span className="border-l border-headlight/50 pl-2">🚌 Food bus</span>
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={150}>
          <div className="brand-frame relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-headlight/35 sm:aspect-[5/4] md:aspect-[4/3]">
            <SceneImage
              src="/media/gyros-bus-cerveja.webp"
              alt="Ônibus real do Gyros Lanches na Praça Alvorada, com um copo de chopp em primeiro plano"
              loading="eager"
              fetchPriority="high"
              className="absolute inset-0"
              imageClassName="object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night via-night/10 to-transparent" />
            <div className="absolute right-4 top-4 z-10 h-16 w-16 rounded-full border border-headlight/30 bg-night/75 p-1.5 backdrop-blur md:h-20 md:w-20">
              <img src="/media/gyros-logo.png" alt="" className="h-full w-full object-contain" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 z-10 border border-headlight/25 bg-night/82 p-4 backdrop-blur">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-headlight">O ônibus da Praça Alvorada</p>
              <p className="mt-1 font-body text-xs leading-relaxed text-cream/85">Um ponto diferente para aproveitar a noite em Camaquã.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
