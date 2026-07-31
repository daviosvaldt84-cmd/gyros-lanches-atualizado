import Reveal from './Reveal'
import RouteSign from './RouteSign'
import SceneImage from './SceneImage'

const gallery = [
  {
    src: '/media/gyros-onibus-toldo.webp',
    alt: 'Ônibus real do Gyros Lanches com o toldo aberto durante o dia',
    className: 'col-span-2 row-span-2 min-h-[260px]',
  },
  {
    src: '/media/gyros-preparo-lanches.webp',
    alt: 'Bancada de preparo dos lanches dentro do ônibus do Gyros Lanches',
    className: 'min-h-[125px]',
  },
  {
    src: '/media/gyros-bus-cerveja.webp',
    alt: 'Ônibus do Gyros Lanches e copo de chopp em primeiro plano',
    className: 'min-h-[125px]',
  },
  {
    src: '/media/gyros-ambiente-noturno.webp',
    alt: 'Clientes sentados em frente ao ônibus do Gyros Lanches durante a noite',
    className: 'col-span-3 min-h-[190px]',
  },
]

export default function About() {
  return (
    <section id="sobre" className="brand-section py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <Reveal variant="left">
            <RouteSign>Sobre nós</RouteSign>
          </Reveal>
          <Reveal variant="left" delay={80}>
            <h2 className="mt-4 font-display text-3xl font-bold text-cream md:text-4xl">
              Conheça o <span className="gold-text">Gyros Lanches</span>
            </h2>
          </Reveal>
          <Reveal variant="left" delay={140}>
            <p className="mt-4 max-w-md font-body leading-relaxed text-smoke">
              O Gyros é uma lancheria instalada em um ônibus na Praça Alvorada, em Camaquã. O espaço reúne preparo dentro do veículo, mesas ao ar livre e um cardápio variado para aproveitar com amigos e família.
            </p>
          </Reveal>
          <Reveal variant="left" delay={200}>
            <p className="mt-4 max-w-md font-body leading-relaxed text-smoke">
              Das opções clássicas de xis aos pastéis, dogs, porções e bebidas, tudo acontece em um lugar que já virou parte da identidade do negócio.
            </p>
          </Reveal>
          <Reveal variant="left" delay={250}>
            <div className="mt-7 flex items-center gap-3 border-l-2 border-headlight pl-4">
              <img src="/media/gyros-logo.png" alt="" className="h-12 w-12 object-contain" />
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-headlight">Sabor, encontro e identidade na Praça Alvorada.</p>
            </div>
          </Reveal>
        </div>

        <Reveal variant="right" delay={100}>
          <div className="grid grid-cols-3 gap-3">
            {gallery.map((photo) => (
              <SceneImage
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                className={`brand-frame rounded-xl border border-headlight/25 ${photo.className}`}
                imageClassName="object-center"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
