import Section from '../ui/Section.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import { testimonials, testimonialsArePlaceholder } from '../../data/content.js'

export default function Testimonials() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="What our clients say"
        title="Trust, in our clients’ words"
        intro="Short notes from the people we’ve built for. Only genuine, permission-granted testimonials are published here."
      />

      {testimonialsArePlaceholder && (
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
          Sample content — awaiting real client testimonials
        </p>
      )}

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal
            key={i}
            delay={(i % 3) * 80}
            className="flex flex-col rounded-2xl border border-line bg-surface p-6"
          >
            <Icon name="quote" className="h-7 w-7 text-brand-300" />
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-800">
              {t.quote}
            </p>
            <div className="mt-5 border-t border-line pt-4">
              <p className="text-sm font-semibold text-ink-900">
                {t.attribution}
                {testimonialsArePlaceholder && (
                  <span className="ml-2 font-normal text-ink-700/60">· Sample</span>
                )}
              </p>
              <p className="text-xs text-brand-600">{t.context}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
