import { cn } from '../../lib/cn.js'
import Reveal from './Reveal.jsx'

/**
 * Eyebrow + heading + optional intro paragraph.
 * `align`: 'left' | 'center'. `tone`: 'dark' flips colours for dark sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'light',
  as: Heading = 'h2',
  className,
}) {
  const dark = tone === 'dark'
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]',
            align === 'center' && 'justify-center',
            dark ? 'text-brand-200' : 'text-brand-500',
          )}
        >
          <span className={cn('h-px w-6', dark ? 'bg-brand-300/60' : 'bg-brand-400/60')} />
          {eyebrow}
        </p>
      )}
      <Heading
        className={cn(
          'text-3xl sm:text-4xl',
          dark ? 'text-white' : 'text-ink-900',
        )}
      >
        {title}
      </Heading>
      {intro && (
        <p className={cn('mt-4 text-base sm:text-lg', dark ? 'text-white/70' : 'text-ink-700')}>
          {intro}
        </p>
      )}
    </Reveal>
  )
}
