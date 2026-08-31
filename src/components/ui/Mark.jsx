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
      <path d="M80 250 V124 H66 L152.5 56 L239 124 H225 V250 Z" fill={house} />
      <g fill="none" stroke={gap} strokeWidth="9" strokeLinecap="round">
        <path d="M152.5 60 L152.5 84 A16 16 0 0 0 152.5 116 L152.5 150" />
        <path d="M152.5 150 L152.5 182 A16 16 0 1 0 152.5 214 L152.5 250" />
        <path d="M80 150 L100 150 A16 16 0 0 1 132 150 L152.5 150" />
        <path d="M152.5 150 L173 150 A16 16 0 0 0 205 150 L225 150" />
      </g>
    </svg>
  )
}
