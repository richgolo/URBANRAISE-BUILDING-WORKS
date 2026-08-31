import { useState } from 'react'
import { cn } from '../../lib/cn.js'
import Icon from './Icon.jsx'

/**
 * Image with a loading skeleton and a graceful fallback: if the source
 * fails (offline, blocked, 404) it shows a branded gradient panel instead
 * of a broken-image icon. The wrapper controls size / aspect / radius.
 */
export default function SmartImage({
  src,
  alt = '',
  className,
  imgClassName,
  ratio = '4 / 3',
  fill = false,
  priority = false,
  sizes,
}) {
  const [status, setStatus] = useState('loading')

  return (
    <div
      className={cn(
        'overflow-hidden bg-surface',
        fill ? 'absolute inset-0' : 'relative',
        className,
      )}
      style={fill ? undefined : { aspectRatio: ratio }}
    >
      {status !== 'error' && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          sizes={sizes}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
            status === 'loaded' ? 'opacity-100' : 'opacity-0',
            imgClassName,
          )}
        />
      )}

      {status === 'loading' && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-surface via-brand-50 to-surface" />
      )}

      {status === 'error' && (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-brand-500 via-brand-600 to-ink-900 text-white/70">
          <Icon name="development" className="h-10 w-10" />
        </div>
      )}
    </div>
  )
}
