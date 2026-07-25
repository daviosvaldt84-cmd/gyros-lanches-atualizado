import Reveal from './Reveal'
import business from '../data/business'

export default function Instagram() {
  return (
    <section className="border-t border-night-line py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal variant="scale">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-headlight">{business.instagramHandle}</p>
          <h2 className="mt-3 font-display text-2xl text-cream md:text-3xl">Siga o Gyros Lanches</h2>
          <p className="mt-3 font-body text-smoke">
            Acompanhe novidades, bastidores do ônibus, lanches e momentos na Praça Alvorada.
          </p>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-headlight/50 px-6 py-3 font-bold text-headlight transition-colors hover:bg-headlight hover:text-night focus:outline-none focus-visible:ring-4 focus-visible:ring-headlight/50"
          >
            📸 Abrir {business.instagramHandle}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
