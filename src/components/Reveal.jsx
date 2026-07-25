import useInView from '../hooks/useInView'

/**
 * Wrapper genérico de scroll-reveal.
 * variant: 'up' | 'left' | 'right' | 'scale'
 * delay: atraso em ms (para efeito escalonado em listas de cards)
 */
export default function Reveal({ children, variant = 'up', delay = 0, className = '' }) {
  const [ref, isVisible] = useInView()

  const variantClass = {
    up: 'reveal',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
  }[variant]

  return (
    <div
      ref={ref}
      className={`${variantClass} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
