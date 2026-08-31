import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn.js'
import Icon from './Icon.jsx'

const VARIANTS = {
  primary:
    'bg-brand-500 text-white hover:bg-brand-600 focus-visible:outline-brand-500 shadow-sm',
  dark: 'bg-ink-900 text-white hover:bg-ink-800 focus-visible:outline-ink-900',
  outline:
    'border border-ink-900/15 text-ink-900 hover:border-brand-500 hover:text-brand-600',
  white: 'bg-white text-ink-900 hover:bg-white/90 focus-visible:outline-white',
  ghostOnDark:
    'border border-white/25 text-white hover:bg-white/10 hover:border-white/50',
}

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon = 'arrowRight',
  showIcon = true,
  className,
  children,
  ...rest
}) {
  const classes = cn(
    'group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors duration-200 outline-offset-2',
    VARIANTS[variant],
    SIZES[size],
    className,
  )

  const inner = (
    <>
      {children}
      {showIcon && icon && (
        <Icon
          name={icon}
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {inner}
      </Link>
    )
  }
  if (href) {
    const external = /^https?:|^mailto:|^tel:/.test(href)
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: href.startsWith('http') ? '_blank' : undefined, rel: 'noreferrer' } : {})}
        {...rest}
      >
        {inner}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {inner}
    </button>
  )
}
