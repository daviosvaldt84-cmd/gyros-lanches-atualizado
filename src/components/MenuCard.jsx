import { WhatsAppLink } from './WhatsAppButton'

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function Price({ item }) {
  if (item.variants?.length) {
    return (
      <div className="flex flex-wrap justify-end gap-x-3 gap-y-1 font-mono text-xs text-headlight">
        {item.variants.map((variant) => (
          <span key={variant.label} className="whitespace-nowrap">
            <span className="text-smoke">{variant.label}</span> {formatPrice(variant.price)}
          </span>
        ))}
      </div>
    )
  }

  return <span className="whitespace-nowrap font-mono text-sm text-headlight">{formatPrice(item.price)}</span>
}

export default function MenuCard({ item }) {
  return (
    <article className={`group flex h-full flex-col rounded-2xl border bg-night-card p-5 transition-all duration-300 hover:-translate-y-1 ${item.featured ? 'border-headlight/70 shadow-glow' : 'border-night-line hover:border-headlight/50'}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-base leading-snug text-cream">{item.name}</h3>
            {item.badge && (
              <span className="rounded-full bg-flame px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-cream">
                {item.badge}
              </span>
            )}
          </div>
        </div>
        <Price item={item} />
      </div>

      {item.description && <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-smoke">{item.description}</p>}

      <WhatsAppLink className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-flame/90 px-4 py-2 text-xs font-bold text-cream transition-colors group-hover:bg-flame focus:outline-none focus-visible:ring-2 focus-visible:ring-headlight/60">
        Pedir <span aria-hidden="true">→</span>
      </WhatsAppLink>
    </article>
  )
}
