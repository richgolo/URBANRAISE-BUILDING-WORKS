import Section from '../ui/Section.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import { whyUrbanRaise } from '../../data/content.js'

export default function WhyUrbanRaise() {
  return (
    <Section tone="dark">
      <SectionHeading
        tone="dark"
        align="center"
        eyebrow="Why UrbanRaise?"
        title="Why clients trust us with their building"
        intro="The honest answer to the biggest question — “why should I trust this company with my project?”"
        className="mx-auto"
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {whyUrbanRaise.map((item, i) => (
          <Reveal
            key={item.title}
            delay={(i % 3) * 70}
            className="bg-ink-800 p-7"
          >
            <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-brand-200">
              <Icon name={item.icon} className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-white/65">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
