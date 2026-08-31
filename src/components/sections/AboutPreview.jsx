import Section from '../ui/Section.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import SmartImage from '../ui/SmartImage.jsx'
import Icon from '../ui/Icon.jsx'
import { images } from '../../data/images.js'
import { about } from '../../data/content.js'

export default function AboutPreview() {
  return (
    <Section tone="white">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative">
          <SmartImage
            src={images.siteMeeting}
            alt="On-site project discussion"
            ratio="4 / 3"
            className="rounded-2xl shadow-[var(--shadow-card)]"
          />
          <div className="absolute -bottom-6 -right-4 hidden w-52 rounded-xl border border-line bg-white p-4 shadow-[var(--shadow-card)] sm:block">
            <p className="font-display text-sm font-semibold text-ink-900">
              Concept → Completed
            </p>
            <p className="mt-1 text-xs text-ink-700">
              One accountable team for the whole build.
            </p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About UrbanRaise"
            title="A dependable team for a major investment"
            intro={about.intro}
          />
          <p className="mt-4 text-ink-700">{about.philosophy}</p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {about.values.map((v) => (
              <li key={v.title} className="flex items-start gap-2.5">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                <span className="text-sm">
                  <span className="font-semibold text-ink-900">{v.title}.</span>{' '}
                  <span className="text-ink-700">{v.description}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button to="/about" variant="dark">
              More about us
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
