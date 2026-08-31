import Section from '../ui/Section.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'

const points = [
  {
    icon: 'doc',
    title: 'Fixed-scope quotation & contract',
    body: 'You approve a written scope and price before work starts. Any change is priced and agreed with you — never assumed.',
  },
  {
    icon: 'coins',
    title: 'Payments tied to progress',
    body: 'Payments are staged against milestones on site, so money follows work that has actually been done.',
  },
  {
    icon: 'clipboard',
    title: 'Dedicated site supervision',
    body: 'Your project is monitored on the ground throughout construction, not left to sub-contractors to run alone.',
  },
  {
    icon: 'shield',
    title: 'Insured works',
    body: 'Construction is carried out under appropriate insurance cover for the works in progress.',
  },
  {
    icon: 'check',
    title: 'Inspected before handover',
    body: 'The project is inspected and outstanding items closed out before final handover, with a defects period afterwards.',
  },
  {
    icon: 'trowel',
    title: 'Built to specification',
    body: 'What is quoted is what is built — the specified materials and standards, without quiet substitutions.',
  },
]

export default function Guarantees() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Your investment, protected"
        title="How we keep a build low-risk for you"
        intro="Building is a major commitment. These are the safeguards built into every UrbanRaise project."
      />

      <div className="mt-12 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 70} className="flex gap-4">
            <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <Icon name={p.icon} className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-base text-ink-900">{p.title}</h3>
              <p className="mt-1.5 text-sm text-ink-700">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 rounded-xl border border-line bg-surface p-4 text-xs text-ink-700">
        Exact payment terms, insurance cover and the guarantee period are set out in
        your contract — confirm the specifics with UrbanRaise.
      </Reveal>
    </Section>
  )
}
