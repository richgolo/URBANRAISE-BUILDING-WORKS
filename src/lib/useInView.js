import { useEffect, useRef, useState } from 'react'

const noIO = typeof IntersectionObserver === 'undefined'

/**
 * Reveal-on-scroll helper. Returns a ref and a boolean that flips to
 * true once (and stays true) when the element enters the viewport.
 * Falls back to "always visible" where IntersectionObserver is missing.
 *
 *   const [ref, shown] = useInView()
 *   <div ref={ref} className={`reveal ${shown ? 'is-visible' : ''}`}>
 */
export function useInView({ threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(noIO)

  useEffect(() => {
    const el = ref.current
    if (!el || noIO) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, inView]
}
