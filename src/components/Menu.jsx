import { useState } from 'react'
import Reveal from './Reveal'
import RouteSign from './RouteSign'
import MenuCard from './MenuCard'
import MenuPdfModal from './MenuPdfModal'
import SceneImage from './SceneImage'
import menu from '../data/menu'
import business from '../data/business'

export default function Menu() {
  const [active, setActive] = useState(menu[0].category)
  const [showFullMenu, setShowFullMenu] = useState(false)
  const activeGroup = menu.find((group) => group.category === active)

  return (
    <section id="cardapio" className="border-t border-night-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <Reveal>
              <RouteSign>Cardápio</RouteSign>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
                Deu fome? Escolha seu favorito!
              </h2>
            </Reveal>
            <Reveal delay={130}>
              <p className="mt-4 max-w-2xl font-body text-smoke">
                Conheça alguns dos itens do cardápio oficial. Para conferir o layout completo com todas as opções e tamanhos, abra o PDF original do Gyros.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setShowFullMenu(true)}
                  className="rounded-full bg-headlight px-5 py-3 text-sm font-bold text-night transition-transform hover:scale-105 hover:bg-headlight-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-headlight/50"
                >
                  📖 Visualizar cardápio completo
                </button>
                <a
                  href={business.menuPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-night-line px-5 py-3 text-sm font-bold text-cream transition-colors hover:border-headlight/60 hover:text-headlight focus:outline-none focus-visible:ring-2 focus-visible:ring-headlight"
                >
                  Abrir PDF
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal variant="right" delay={130}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-night-line">
              <SceneImage
                src="/media/gyros-preparo-lanches.webp"
                alt="Bancada real de preparo dos lanches do Gyros Lanches"
                className="absolute inset-0"
                imageClassName="object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-mono text-[10px] uppercase tracking-[0.18em] text-headlight-soft">Preparação real no ônibus</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <div className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0">
            {menu.map((group) => (
              <button
                key={group.category}
                type="button"
                onClick={() => setActive(group.category)}
                className={`shrink-0 rounded-full border px-4 py-2 font-body text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-headlight/60 ${
                  active === group.category
                    ? 'border-flame bg-flame text-cream'
                    : 'border-night-line bg-transparent text-smoke hover:border-headlight/50 hover:text-cream'
                }`}
              >
                <span aria-hidden="true">{group.icon}</span> {group.category}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={active} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activeGroup.items.map((item, index) => (
            <Reveal key={item.id} variant="scale" delay={index * 55}>
              <MenuCard item={item} />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 font-mono text-xs text-smoke/70">
          * Cardápio transcrito do material oficial fornecido pelo Gyros Lanches. Consulte o estabelecimento sobre disponibilidade.
        </p>
      </div>

      <MenuPdfModal open={showFullMenu} onClose={() => setShowFullMenu(false)} />
    </section>
  )
}
