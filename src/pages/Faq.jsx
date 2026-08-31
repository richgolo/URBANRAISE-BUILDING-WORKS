import { useEffect } from 'react'
import { useDocumentTitle } from '../lib/useDocumentTitle.js'
import PageHeader from '../components/sections/PageHeader.jsx'
import Section from '../components/ui/Section.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import Icon from '../components/ui/Icon.jsx'
import { faqs, faqIsDraft } from '../data/faq.js'
import { waLink } from '../data/site.js'

export default function Faq() {
  useDocumentTitle(
    'FAQ',
    'Answers to common questions about building with UrbanRaise Building Works — getting started, payments, timelines, permits and guarantees.',
  )

  // FAQ structured data for search engines
  useEffect(() => {
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
    document.head.appendChild(el)
    return () => el.remove()
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions clients ask before they build"
        intro="Straight answers on how a project runs — from the first enquiry to handover."
      />

      <Section tone="white">
        {faqIsDraft && (
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            Draft answers — being reviewed with UrbanRaise
          </p>
        )}

        <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
          {faqs.map((f, i) => (
            <Reveal key={i} as="details" className="group py-1 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-display text-lg font-semibold text-ink-900">
                {f.q}
                <Icon
                  name="plus"
                  className="h-5 w-5 shrink-0 text-brand-500 transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="pb-5 pr-9 text-ink-700">{f.a}</p>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-line bg-surface p-6 text-center">
          <h2 className="text-lg text-ink-900">Still have a question?</h2>
          <p className="mt-1.5 text-sm text-ink-700">
            Ask us directly — we’re happy to talk through your project before you commit
            to anything.
          </p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/quote">Request a Quote</Button>
            <Button href={waLink()} variant="outline" icon="whatsapp" showIcon={false}>
              Ask on WhatsApp
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
