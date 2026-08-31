import { useInView } from '../../lib/useInView.js'
import { cn } from '../../lib/cn.js'

/**
 * Fade-and-rise on scroll. `delay` (ms) staggers grouped children.
 * Respects prefers-reduced-motion via the .reveal utility in index.css.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className, children, ...rest }) {
  const [ref, shown] = useInView()
  return (
    <Tag
      ref={ref}
      className={cn('reveal', shown && 'is-visible', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
