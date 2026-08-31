import { Link } from 'react-router-dom'
import { primaryNav, site, waLink } from '../../data/site.js'
import { services } from '../../data/services.js'
import Container from '../ui/Container.jsx'
import Logo from '../ui/Logo.jsx'
import Icon from '../ui/Icon.jsx'

const socialIcon = { instagram: 'instagram', facebook: 'facebook', tiktok: 'tiktok', linkedin: 'linkedin' }

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-900 text-white/70">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {site.description}
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              {site.tagline}
            </p>
          </div>

          <nav className="md:col-span-2" aria-label="Pages">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {primaryNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/quote" className="transition-colors hover:text-white">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="md:col-span-3" aria-label="Services">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services#${s.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="whatsapp" className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-white">
                  WhatsApp chat
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a href={site.emailHref} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span>{site.location}</span>
              </li>
            </ul>

            <div className="mt-5 flex gap-2">
              {site.socials.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  <Icon name={socialIcon[s.key]} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Serving {site.areasServed.slice(0, 4).join(', ')} &amp; surrounding areas.</p>
        </div>
      </Container>
    </footer>
  )
}
