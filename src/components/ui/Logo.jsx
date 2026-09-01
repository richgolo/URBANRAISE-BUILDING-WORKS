import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn.js'
import lockup from '../../assets/urbanraise-logo.png'
import mark from '../../assets/urbanraise-mark.png'

/**
 * UrbanRaise logo — the supplied artwork, trimmed from
 * src/assets/logo-concept-reference.png.
 *
 * `variant`:
 *   'lockup' — full badge (frame + mark + wordmark + tagline). Used in the footer.
 *   'compact' — just the puzzle-house mark + a wordmark. Used in the header,
 *               where the full lockup's tagline would be illegible.
 * `tone`: 'dark' for light backgrounds (default); 'light' inverts the purple
 *         artwork to white for dark backgrounds.
 */
export default function Logo({ variant = 'compact', tone = 'dark', className }) {
  const onDark = tone === 'light'
  const invert = onDark ? '[filter:brightness(0)_invert(1)]' : ''

  return (
    <Link
      to="/"
      aria-label="UrbanRaise Building Works — home"
      className={cn('inline-flex items-center gap-2.5', className)}
    >
      {variant === 'lockup' ? (
        <img
          src={lockup}
          alt="UrbanRaise Building Works — Smart Design, Solid Buildings"
          width="177"
          height="120"
          className={cn('h-12 w-auto sm:h-14', invert)}
        />
      ) : (
        <>
          <img
            src={mark}
            alt=""
            width="41"
            height="36"
            className={cn('h-9 w-auto shrink-0', invert)}
          />
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
        </>
      )}
    </Link>
  )
}
