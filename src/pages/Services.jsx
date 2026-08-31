import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDocumentTitle } from '../lib/useDocumentTitle.js'
import PageHeader from '../components/sections/PageHeader.jsx'
import Section from '../components/ui/Section.jsx'
import Container from '../components/ui/Container.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import SmartImage from '../components/ui/SmartImage.jsx'
import Icon from '../components/ui/Icon.jsx'
import Button from '../components/ui/Button.jsx'
import ClosingCTA from '../components/sections/ClosingCTA.jsx'
import { cn } from '../lib/cn.js'
import { services, whatWeBuild } from '../data/services.js'

export default function Services() {
  useDocumentTitle(
    'Services',
    'Residential construction, apartment development, renovations, building design, project management and structural works.',
  )

  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="From a client’s idea to a completed building"
        intro="Each service below is delivered by one accountable team, with photographs and a clear explanation of what’s involved."
      />

      <Section tone="white" className="!py-10">
        <ul className="flex flex-wrap justify-center gap-3">
          {whatWeBuild.map((w) => (
            <li
              key={w.label}
              className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink-800"
            >
              <Icon name={w.icon} className="h-4 w-4 text-brand-500" />
              {w.label}
            </li>
          ))}
        </ul>
      </Section>

      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className={cn(
            'scroll-mt-24 py-14 sm:py-20',
            i % 2 === 1 ? 'bg-surface' : 'bg-white',
          )}
        >
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <Reveal className={cn(i % 2 === 1 && 'lg:order-2')}>
                <SmartImage
                  src={service.image}
                  alt={service.name}
                  ratio="4 / 3"
                  className="rounded-2xl shadow-[var(--shadow-card)]"
                />
              </Reveal>
              <Reveal delay={100}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
                  Service {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-2 text-2xl text-ink-900 sm:text-3xl">{service.name}</h2>
                <p className="mt-3 text-ink-700">{service.description}</p>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Button to="/quote" size="sm">
                    Enquire about {service.name.toLowerCase()}
                  </Button>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      <ClosingCTA />
    </>
  )
}
