import Section from '../ui/Section.jsx'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import { site, waLink } from '../../data/site.js'

const uploads = [
  'Architectural drawings',
  'Floor plans',
  'Land / site information',
  'Inspiration pictures',
  'Existing building photographs',
]

export default function QuoteCTASection() {
  return (
    <Section tone="brand" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">
            Request a quote
          </p>
          <h2 className="text-3xl text-white sm:text-4xl">
            Start your project with a proper scope
          </h2>
          <p className="mt-4 max-w-md text-white/80">
            Serious about building? Send us the details and we’ll prepare a project
            scope and quotation — not just a callback.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/quote" variant="white" size="lg" icon="clipboardCheck" showIcon={false}>
              Request a Quote
            </Button>
            <Button
              href={waLink()}
              variant="ghostOnDark"
              size="lg"
              icon="whatsapp"
              showIcon={false}
            >
              Message on WhatsApp
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
            <p className="flex items-center gap-2 text-sm font-semibold text-white">
              <Icon name="upload" className="h-5 w-5" />
              Share what you already have
            </p>
            <ul className="mt-4 space-y-2.5">
              {uploads.map((u) => (
                <li key={u} className="flex items-center gap-2.5 text-sm text-white/85">
                  <Icon name="check" className="h-4 w-4 shrink-0 text-brand-100" />
                  {u}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-white/15 pt-4 text-xs text-white/60">
              No plans yet? That’s fine — {site.shortName} can help turn your idea into
              a buildable plan.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
