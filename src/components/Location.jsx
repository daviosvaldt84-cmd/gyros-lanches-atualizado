import Reveal from './Reveal'
import RouteSign from './RouteSign'
import OpeningHours from './OpeningHours'
import business from '../data/business'

export default function Location() {
  return (
    <section id="localizacao" className="py-20 md:py-28 border-t border-night-line">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <Reveal variant="left">
            <RouteSign>Localização</RouteSign>
          </Reveal>
          <Reveal variant="left" delay={80}>
            <h2 className="font-display text-3xl md:text-4xl text-cream mt-4">
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
              className="inline-flex items-center gap-2 mt-6 rounded-full bg-headlight hover:bg-headlight-soft text-night font-bold px-6 py-3 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-headlight/50"
            >
              📍 Como chegar
            </a>
          </Reveal>
          <Reveal variant="left" delay={260} className="mt-8 max-w-sm">
            <OpeningHours />
          </Reveal>
        </div>

        <Reveal variant="right" delay={120}>
          <div className="rounded-2xl overflow-hidden border border-night-line aspect-[4/3] md:aspect-square">
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
