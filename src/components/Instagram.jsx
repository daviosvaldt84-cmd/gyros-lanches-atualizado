import Reveal from './Reveal'
import business from '../data/business'

export default function Instagram() {
  return (
    <section className="brand-section py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal variant="scale">
          <div className="brand-card relative overflow-hidden rounded-3xl border border-headlight/25 px-6 py-12 text-center md:px-12">
            <img src="/media/gyros-logo.png" alt="" className="pointer-events-none absolute -right-14 -top-16 h-64 w-64 object-contain opacity-[0.055]" />
            <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-headlight">{business.instagramHandle}</p>
            <h2 className="relative mt-3 font-display text-2xl font-bold text-cream md:text-3xl">Siga o Gyros Lanches</h2>
            <p className="relative mx-auto mt-3 max-w-xl font-body leading-relaxed text-smoke">
              Acompanhe novidades, bastidores do ônibus, lanches e momentos na Praça Alvorada.
            </p>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-gold relative mt-6 inline-flex items-center gap-2 rounded-sm border px-6 py-3 font-bold transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-headlight/50"
            >
              📸 Abrir {business.instagramHandle}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
