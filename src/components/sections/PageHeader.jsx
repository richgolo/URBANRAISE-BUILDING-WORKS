import Container from '../ui/Container.jsx'
import SmartImage from '../ui/SmartImage.jsx'
import { cn } from '../../lib/cn.js'

/** Compact interior-page hero. Pass `image` for a photographic band. */
export default function PageHeader({ eyebrow, title, intro, image, children }) {
  return (
    <section
      className={cn(
        'relative isolate overflow-hidden',
        image ? 'bg-ink-900 text-white' : 'border-b border-line bg-surface text-ink-900',
      )}
    >
      {image && (
        <>
          <SmartImage src={image} alt="" fill priority imgClassName="scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/70 to-ink-900/40" />
        </>
      )}

      <Container className="relative z-10 py-16 sm:py-20">
        {eyebrow && (
          <p
            className={cn(
              'mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]',
              image ? 'text-brand-200' : 'text-brand-500',
            )}
          >
            <span
              className={cn('h-px w-6', image ? 'bg-brand-300/60' : 'bg-brand-400/60')}
            />
            {eyebrow}
          </p>
        )}
        <h1 className={cn('max-w-3xl text-4xl sm:text-5xl', image && 'text-white')}>
          {title}
        </h1>
        {intro && (
          <p
            className={cn(
              'mt-4 max-w-2xl text-base sm:text-lg',
              image ? 'text-white/75' : 'text-ink-700',
            )}
          >
            {intro}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </Container>
    </section>
  )
}
