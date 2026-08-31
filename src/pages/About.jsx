import { useDocumentTitle } from '../lib/useDocumentTitle.js'
import PageHeader from '../components/sections/PageHeader.jsx'
import Section from '../components/ui/Section.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import SmartImage from '../components/ui/SmartImage.jsx'
import Icon from '../components/ui/Icon.jsx'
import ClosingCTA from '../components/sections/ClosingCTA.jsx'
import { about } from '../data/content.js'
import { images } from '../data/images.js'

export default function About() {
  useDocumentTitle(
    'About Us',
    'The UrbanRaise Building Works story — background, mission, values, construction philosophy and team.',
  )

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="You’re trusting us with a major investment"
        intro="Our job is to make that an easy decision — with clear communication, careful supervision and buildings that hold up."
        image={images.darkArchitecture}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SmartImage
              src={images.onSite}
              alt="UrbanRaise team on site"
              ratio="4 / 3"
              className="rounded-2xl shadow-[var(--shadow-card)]"
            />
          </Reveal>
          <div>
            <SectionHeading eyebrow="Who we are" title="Company background" intro={about.background} />
            <div className="mt-6 space-y-5 text-ink-700">
              <div>
                <h3 className="text-base font-semibold text-ink-900">Experience</h3>
                <p className="mt-1.5 text-sm">{about.experience}</p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-ink-900">Construction philosophy</h3>
                <p className="mt-1.5 text-sm">{about.philosophy}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { label: 'Mission', body: about.mission, icon: 'check' },
            { label: 'Vision', body: about.vision, icon: 'bulb' },
          ].map((item) => (
            <Reveal
              key={item.label}
              className="rounded-2xl border border-line bg-white p-7"
            >
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-xl text-ink-900">{item.label}</h2>
              <p className="mt-2 text-sm text-ink-700">{item.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <SectionHeading eyebrow="What we stand for" title="Company values" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={(i % 4) * 70}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <p className="font-display text-3xl font-bold text-brand-200">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 text-base text-ink-900">{v.title}</h3>
                <p className="mt-1.5 text-sm text-ink-700">{v.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Founder & team"
          title="The people behind UrbanRaise"
          intro="Names, photos and full bios are being finalised — the roles below reflect how the team is structured."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {about.team.map((member, i) => (
            <Reveal
              key={member.name}
              delay={(i % 3) * 80}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-white">
                <Icon name="clipboard" className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-base text-ink-900">{member.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-500">
                {member.role}
              </p>
              <p className="mt-3 text-sm text-ink-700">{member.bio}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications & registrations"
            intro="To be confirmed and displayed here — registration numbers, industry memberships and insurances."
          />
          <Reveal className="rounded-2xl border border-line bg-white p-7">
            <ul className="space-y-3">
              {about.certifications.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-ink-700">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <ClosingCTA />
    </>
  )
}
