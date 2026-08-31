import Section from '../ui/Section.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import { processSteps } from '../../data/content.js'

export default function ProcessTimeline() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="How UrbanRaise works"
        title="Six clear stages, start to finish"
        intro="You always know which stage the project is in and what happens next."
      />

      <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step) => (
          <Reveal key={step.no} as="li" className="relative">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-bold text-brand-200">
                {step.no}
              </span>
              <span className="h-px flex-1 translate-y-[-6px] bg-line" />
            </div>
            <h3 className="mt-3 text-lg text-ink-900">{step.stage}</h3>
            <p className="mt-1.5 text-sm text-ink-700">{step.description}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
