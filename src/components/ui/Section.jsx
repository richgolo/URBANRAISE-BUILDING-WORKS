import { cn } from '../../lib/cn.js'
import Container from './Container.jsx'

/**
 * Vertical rhythm + background tone for a page section.
 * tone: 'white' | 'surface' | 'dark' | 'brand'
 */
const TONES = {
  white: 'bg-white text-ink-800',
  surface: 'bg-surface text-ink-800',
  dark: 'bg-ink-800 text-white',
  brand: 'bg-brand-500 text-white',
}

export default function Section({
  id,
  tone = 'white',
  className,
  containerClassName,
  bare = false,
  children,
}) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-24 py-16 sm:py-24',
        TONES[tone],
        tone === 'dark' && 'bg-blueprint',
        className,
      )}
    >
      {bare ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  )
}
