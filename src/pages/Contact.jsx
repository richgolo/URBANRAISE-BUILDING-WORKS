import { useDocumentTitle } from '../lib/useDocumentTitle.js'
import PageHeader from '../components/sections/PageHeader.jsx'
import Section from '../components/ui/Section.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Icon from '../components/ui/Icon.jsx'
import Button from '../components/ui/Button.jsx'
import { site, waLink } from '../data/site.js'

const socialIcon = { instagram: 'instagram', facebook: 'facebook', tiktok: 'tiktok', linkedin: 'linkedin' }

export default function Contact() {
  useDocumentTitle(
    'Contact',
    `Contact UrbanRaise Building Works — phone, WhatsApp, email and areas served.`,
  )

  const channels = [
    { icon: 'phone', label: 'Phone', value: site.phoneDisplay, href: site.phoneHref },
    { icon: 'whatsapp', label: 'WhatsApp', value: 'Start a chat', href: waLink(), external: true },
    { icon: 'mail', label: 'Email', value: site.email, href: site.emailHref },
    { icon: 'pin', label: 'Location', value: site.location },
  ]

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk about your project"
        intro="Reach us whichever way suits you. For a detailed response, send your project details through the quote form."
      />

      <Section tone="white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => {
            const Wrapper = c.href ? 'a' : 'div'
            return (
              <Reveal
                key={c.label}
                as={Wrapper}
                {...(c.href
                  ? {
                      href: c.href,
                      ...(c.external ? { target: '_blank', rel: 'noreferrer' } : {}),
                    }
                  : {})}
                className="rounded-2xl border border-line bg-white p-6 transition-colors hover:border-brand-200"
              >
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-700/60">
                  {c.label}
                </p>
                <p className="mt-1 font-semibold text-ink-900">{c.value}</p>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Reveal className="rounded-2xl border border-line bg-surface p-6">
            <h2 className="flex items-center gap-2 text-base font-semibold text-ink-900">
              <Icon name="clock" className="h-5 w-5 text-brand-500" />
              Business hours
            </h2>
            <dl className="mt-4 divide-y divide-line">
              {site.businessHours.map((row) => (
                <div key={row.days} className="flex justify-between gap-4 py-2.5 text-sm">
                  <dt className="text-ink-700">{row.days}</dt>
                  <dd className="font-semibold text-ink-900">{row.hours}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={80} className="rounded-2xl border border-line bg-surface p-6">
            <h2 className="flex items-center gap-2 text-base font-semibold text-ink-900">
              <Icon name="pin" className="h-5 w-5 text-brand-500" />
              Areas served
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.areasServed.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-line bg-white px-3 py-1 text-sm text-ink-700"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-ink-700/70">
              Outside these areas? Ask — we consider projects further afield.
            </p>
          </Reveal>

          <Reveal delay={160} className="rounded-2xl border border-line bg-surface p-6">
            <h2 className="text-base font-semibold text-ink-900">Follow UrbanRaise</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {site.socials.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-300 hover:text-brand-600"
                >
                  <Icon name={socialIcon[s.key]} className="h-4 w-4" />
                  {s.label}
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-ink-700/70">
              Social links are placeholders — add real profile URLs in{' '}
              <code className="rounded bg-white px-1">src/data/site.js</code>.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12 overflow-hidden rounded-2xl border border-line">
          <div className="grid gap-6 bg-ink-900 bg-blueprint p-8 text-white sm:grid-cols-[1.3fr_1fr] sm:items-center">
            <div>
              <h2 className="text-2xl">Ready with the details?</h2>
              <p className="mt-2 text-sm text-white/70">
                The quote form captures everything we need — project type, location,
                budget, timeline and your drawings.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <Button to="/quote" variant="white">
                Request a Quote
              </Button>
              <Button href={waLink()} variant="ghostOnDark" icon="whatsapp" showIcon={false}>
                Message on WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
