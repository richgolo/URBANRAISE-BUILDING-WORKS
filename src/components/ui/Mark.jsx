/**
 * UrbanRaise mark — a house built from four interlocking puzzle pieces.
 * Vector redraw of the supplied brand artwork. Colours are props so it can
 * sit on light or dark grounds:
 *   light bg → house="#5B2A86" gap="#E5E5E5"
 *   dark bg  → house="#ffffff" gap="#1C1C1C"
 * The standalone brand file (src/assets/urbanraise-mark.svg) keeps true
 * white gaps for use over photos / colour.
 */
export default function Mark({
  house = '#5B2A86',
  gap = '#E5E5E5',
  className,
  title = 'UrbanRaise Building Works',
}) {
  return (
    <svg
      viewBox="0 0 300 300"
      className={className}
      role="img"
      aria-label={title}
    >
      <path d="M76 252 V130 H58 L150 58 L242 130 H224 V252 Z" fill={house} />
      <g fill="none" stroke={gap} strokeWidth="9.5" strokeLinecap="round">
        <path d="M150 72 L150 94 A15 15 0 1 1 150 110 L150 194 A15 15 0 1 0 150 210 L150 252" />
        <path d="M76 150 L100 150 A15 15 0 1 0 116 150 L184 150 A15 15 0 1 1 200 150 L224 150" />
      </g>
    </svg>
  )
}
