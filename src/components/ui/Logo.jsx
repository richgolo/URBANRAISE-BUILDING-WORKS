import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn.js'
import Mark from './Mark.jsx'

/**
 * UrbanRaise logo lockup: the puzzle-house mark (vector redraw of the
 * supplied brand artwork — see src/components/ui/Mark.jsx) + wordmark.
 * `tone`: 'dark' text for light backgrounds (default), 'light' for dark.
 */
export default function Logo({ tone = 'dark', className, withText = true }) {
  const onDark = tone === 'light'
  return (
    <Link
      to="/"
      aria-label="UrbanRaise Building Works — home"
      className={cn('inline-flex items-center gap-2.5', className)}
    >
      <Mark
        className="h-9 w-auto shrink-0"
        house={onDark ? '#ffffff' : '#5B2A86'}
        gap={onDark ? '#1C1C1C' : '#E5E5E5'}
      />
      {withText && (
        <span className="leading-none">
          <span
            className={cn(
              'block font-display text-[15px] font-bold tracking-tight',
              onDark ? 'text-white' : 'text-ink-900',
            )}
          >
            UrbanRaise
          </span>
          <span
            className={cn(
              'block text-[10px] font-semibold uppercase tracking-[0.22em]',
              onDark ? 'text-white/60' : 'text-brand-500',
            )}
          >
            Building Works
          </span>
        </span>
      )}
    </Link>
  )
}
