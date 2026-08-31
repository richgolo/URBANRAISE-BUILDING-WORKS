import { useDocumentTitle } from '../lib/useDocumentTitle.js'
import PageHeader from '../components/sections/PageHeader.jsx'
import Section from '../components/ui/Section.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { site } from '../data/site.js'
import { legalIsDraft } from '../data/legal.js'

/** Shared layout for the Privacy Policy and Terms pages. */
export default function LegalPage({ doc }) {
  useDocumentTitle(doc.title, doc.intro)

  return (
    <>
      <PageHeader eyebrow="Legal" title={doc.title} intro={doc.intro} />

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-ink-700/70">Last updated: {site.legalUpdated}</p>

          {legalIsDraft && (
            <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              Draft template — to be reviewed by a lawyer and completed
              (registration number, registered address, contact email) before launch.
            </p>
          )}

          <div className="mt-8 space-y-8">
            {doc.sections.map((s) => (
              <Reveal key={s.heading}>
                <h2 className="text-lg text-ink-900">{s.heading}</h2>
                <p className="mt-2 text-ink-700">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
