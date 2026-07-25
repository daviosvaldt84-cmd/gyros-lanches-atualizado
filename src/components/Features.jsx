import Reveal from './Reveal'
import RouteSign from './RouteSign'
import SceneImage from './SceneImage'

const features = [
  { icon: '🚌', title: 'Um lugar diferente', text: 'Uma experiência única em Camaquã.' },
  { icon: '🍔', title: 'Lanches para todos os gostos', text: 'Xis, pastéis, dogs, porções e muito mais.' },
  { icon: '🥤', title: 'Bebidas geladas', text: 'Refrigerantes, cervejas, água e chopp.' },
  { icon: '👨‍👩‍👧‍👦', title: 'Ambiente descontraído', text: 'Um espaço para curtir com amigos e família.' },
]

export default function Features() {
  return (
    <section className="ticket-edge border-t border-night-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <RouteSign>Nosso diferencial</RouteSign>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-xl font-display text-3xl text-cream md:text-4xl">
            Muito mais que uma lancheria. Uma experiência!
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-4 max-w-2xl font-body text-smoke">
            No Gyros Lanches, o ônibus faz parte da experiência. O espaço na Praça Alvorada reúne mesas, cadeiras, bons lanches e aquele clima simples e acolhedor para aproveitar a noite.
          </p>
        </Reveal>

        <Reveal variant="scale" delay={180} className="mt-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-night-line sm:aspect-[16/9]">
            <SceneImage
              src="/media/gyros-ambiente-noturno.webp"
              alt="Ambiente noturno real do Gyros Lanches, com o ônibus, mesas e clientes na Praça Alvorada"
              className="absolute inset-0"
              imageClassName="object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/65 via-transparent to-transparent" />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={feature.title} variant="scale" delay={index * 90}>
              <div className="h-full rounded-2xl border border-night-line bg-night-card p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-flame/60">
                <span className="text-3xl" aria-hidden="true">{feature.icon}</span>
                <h3 className="mt-4 font-display text-lg text-cream">{feature.title}</h3>
                <p className="mt-2 font-body text-sm text-smoke">{feature.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
