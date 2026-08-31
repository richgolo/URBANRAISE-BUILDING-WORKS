import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { primaryNav, site, waLink } from '../../data/site.js'
import { cn } from '../../lib/cn.js'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import Logo from '../ui/Logo.jsx'
import Icon from '../ui/Icon.jsx'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const navLinkClass = ({ isActive }) =>
    cn(
      'relative py-1 text-sm font-semibold transition-colors',
      'after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand-500 after:transition-transform hover:after:scale-x-100',
      isActive ? 'text-brand-600 after:scale-x-100' : 'text-ink-700 hover:text-ink-900',
    )

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-shadow',
        scrolled
          ? 'border-b border-line bg-white/90 shadow-[0_1px_20px_rgba(28,28,28,0.06)] backdrop-blur'
          : 'border-b border-transparent bg-white',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {primaryNav.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-700 transition-colors hover:text-brand-600"
          >
            <Icon name="phone" className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <Button to="/quote" size="sm">
            Request a Quote
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-ink-900 md:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </Container>

      {/* Mobile panel */}
      <div
        className={cn(
          'md:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        <div
          className={cn(
            'fixed inset-x-0 top-16 z-40 origin-top border-b border-line bg-white transition-all duration-200',
            open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0',
          )}
        >
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-3 text-base font-semibold',
                    isActive ? 'bg-brand-50 text-brand-700' : 'text-ink-800',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={site.phoneHref}
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/15 px-4 py-3 text-sm font-semibold text-ink-900"
              >
                <Icon name="phone" className="h-4 w-4" /> Call
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white"
              >
                <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
              </a>
            </div>
            <Button to="/quote" onClick={closeMenu} className="mt-2 w-full" size="lg">
              Request a Quote
            </Button>
          </Container>
        </div>
        {open && (
          <button
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-16 z-30 bg-ink-900/30"
          />
        )}
      </div>
    </header>
  )
}
