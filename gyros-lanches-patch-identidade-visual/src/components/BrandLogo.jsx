export default function BrandLogo({ className = '', imageClassName = '', compact = false }) {
  return (
    <div className={`brand-logo-shell ${className}`}>
      <img
        src="/media/gyros-logo.png"
        alt="Gyros Lanches"
        className={`${compact ? 'h-11 w-11' : 'h-full w-full'} object-contain ${imageClassName}`}
      />
    </div>
  )
}
