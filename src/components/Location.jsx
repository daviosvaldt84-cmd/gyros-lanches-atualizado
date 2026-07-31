import Reveal from './Reveal'
import RouteSign from './RouteSign'
import OpeningHours from './OpeningHours'
import business from '../data/business'

export default function Location() {
  return (
    <section id="localizacao" className="brand-section py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <Reveal variant="left">
            <RouteSign>Localização</RouteSign>
          </Reveal>
          <Reveal variant="left" delay={80}>
            <h2 className="mt-4 font-display text-3xl font-bold text-cream md:text-4xl">
              Onde estamos?
            </h2>
          </Reveal>
          <Reveal variant="left" delay={140}>
            <address className="not-italic font-body text-smoke mt-4 leading-relaxed">
              📍 {business.address.street}<br />
              {business.address.neighborhood} · {business.address.city} – {business.address.state}<br />
              CEP {business.address.zip}
            </address>
          </Reveal>
          <Reveal variant="left" delay={200}>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button mt-6 inline-flex items-center gap-2 rounded-sm px-6 py-3 font-extrabold transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-4 focus-visible:ring-headlight/50"
            >
              📍 Como chegar
            </a>
          </Reveal>
          <Reveal variant="left" delay={260} className="mt-8 max-w-sm">
            <OpeningHours />
          </Reveal>
        </div>

        <Reveal variant="right" delay={120}>
          <div className="brand-frame aspect-[4/3] overflow-hidden rounded-2xl border border-headlight/30 md:aspect-square">
            <iframe
              title="Mapa de localização do Gyros Lanches em Camaquã - RS"
              src={business.mapsEmbedUrl}
              className="w-full h-full grayscale-[30%] contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
