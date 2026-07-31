/**
 * Plaqueta de seção inspirada na faixa inclinada da logo do Gyros.
 */
export default function RouteSign({ children }) {
  return (
    <div className="brand-plaque inline-flex items-center gap-2 overflow-hidden px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-headlight md:text-xs">
      <span className="h-1.5 w-1.5 rounded-full bg-headlight animate-flicker shadow-[0_0_10px_rgba(242,193,91,.8)]" />
      {children}
    </div>
  )
}
