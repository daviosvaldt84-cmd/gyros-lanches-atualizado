import Reveal from './Reveal'
import RouteSign from './RouteSign'
import business from '../data/business'

const highlights = [
  {
    icon: '🍔',
    title: 'Lanches e variedade',
    text: 'O cardápio reúne xis, pastéis, dogs, porções e opções para compartilhar.',
  },
  {
    icon: '🚌',
    title: 'Experiência diferente',
    text: 'O ônibus e o ambiente na praça tornam a visita fácil de reconhecer e lembrar.',
  },
  {
    icon: '👥',
    title: 'Para curtir acompanhado',
    text: 'Mesas ao ar livre e um clima descontraído para reunir amigos e família.',
  },
]

export default function Reviews() {
  return (
    <section className="border-t border-night-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <RouteSign>Avaliações</RouteSign>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
            Quem conhece, compartilha a experiência
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="font-display text-3xl text-headlight">⭐ {business.rating.value.toFixed(1).replace('.', ',')}</span>
            <span className="font-body text-sm text-smoke">
              / 5 · {business.rating.count} avaliações no {business.rating.source}
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {highlights.map((highlight, index) => (
            <Reveal key={highlight.title} variant="scale" delay={index * 100}>
              <article className="h-full rounded-2xl border border-night-line bg-night-card p-6">
                <span className="text-3xl" aria-hidden="true">{highlight.icon}</span>
                <h3 className="mt-4 font-display text-lg text-cream">{highlight.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-smoke">{highlight.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={260}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={business.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-headlight/50 px-6 py-3 font-bold text-headlight transition-colors hover:bg-headlight hover:text-night focus:outline-none focus-visible:ring-4 focus-visible:ring-headlight/50"
            >
              ⭐ Ver avaliações no Google
            </a>
            <p className="font-mono text-[10px] uppercase tracking-wide text-smoke/60">
              Os cards acima resumem aspectos do estabelecimento; os comentários completos ficam no Google.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
