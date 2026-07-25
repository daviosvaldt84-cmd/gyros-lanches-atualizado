/**
 * Elemento assinatura do site: imita o painel de destino (letreiro
 * roller) de um ônibus de linha — usado como "eyebrow" de seção em
 * vez do clichê 01/02/03. Reforça o conceito "lancheria dentro de
 * um ônibus" em cada dobra da página.
 */
export default function RouteSign({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-sm bg-night-card border border-night-line px-3 py-1.5 font-mono text-xs tracking-widest text-headlight uppercase overflow-hidden">
      <span className="h-1.5 w-1.5 rounded-full bg-flame animate-flicker" />
      {children}
    </div>
  )
}
