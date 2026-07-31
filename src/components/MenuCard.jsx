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

  return <span className="whitespace-nowrap font-mono text-sm font-bold text-headlight">{formatPrice(item.price)}</span>
}

export default function MenuCard({ item }) {
  return (
    <article className={`brand-card group flex h-full flex-col rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${item.featured ? 'border-headlight/80 shadow-glow' : 'border-night-line hover:border-headlight/60'}`}>
      <div className="mb-4 h-1 w-12 bg-gradient-to-r from-headlight to-flame" />
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-sm font-bold leading-snug text-cream md:text-base">{item.name}</h3>
            {item.badge && (
              <span className="rounded-sm border border-headlight/40 bg-headlight/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-headlight">
                {item.badge}
              </span>
            )}
          </div>
        </div>
        <Price item={item} />
      </div>

      {item.description && <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-smoke">{item.description}</p>}

      <WhatsAppLink className="gold-button mt-5 inline-flex w-fit items-center gap-1.5 rounded-sm px-4 py-2 text-xs font-extrabold transition-transform group-hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-headlight/60">
        Pedir <span aria-hidden="true">→</span>
      </WhatsAppLink>
    </article>
  )
}
