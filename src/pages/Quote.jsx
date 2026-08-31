import { useMemo, useRef, useState } from 'react'
import { useDocumentTitle } from '../lib/useDocumentTitle.js'
import PageHeader from '../components/sections/PageHeader.jsx'
import Section from '../components/ui/Section.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Icon from '../components/ui/Icon.jsx'
import { cn } from '../lib/cn.js'
import { site, waLink } from '../data/site.js'

const PROJECT_TYPES = [
  'Residential Construction',
  'Apartment Development',
  'Renovation / Remodeling',
  'Building Design & Planning',
  'Project Management',
  'Structural / General Works',
  'Not sure yet',
]

const BUDGETS = [
  'Prefer to discuss',
  'Under 500k',
  '500k – 1m',
  '1m – 2.5m',
  '2.5m – 5m',
  'Over 5m',
]

const START_DATES = [
  'As soon as possible',
  'Within 3 months',
  '3 – 6 months',
  '6 – 12 months',
  'Just planning for now',
]

const UPLOAD_HINTS = [
  'Architectural drawings',
  'Floor plans',
  'Land / site information',
  'Inspiration pictures',
  'Existing building photographs',
]

const EMPTY = {
  name: '',
  phone: '',
  whatsapp: '',
  email: '',
  location: '',
  type: '',
  budget: '',
  start: '',
  description: '',
  company: '', // honeypot
}

const inputClass =
  'w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-700/40 focus:border-brand-400 focus:ring-2 focus:ring-brand-100'

function Field({ label, htmlFor, required, error, children, className }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink-900">
        {label} {required && <span className="text-brand-500">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs font-medium text-red-600">{error}</p>}
    </div>
  )
}

function formatBrief(v, files) {
  const lines = [
    'UrbanRaise — project enquiry',
    '',
    `Name: ${v.name}`,
    `Phone: ${v.phone || '—'}`,
    `WhatsApp: ${v.whatsapp || '—'}`,
    `Email: ${v.email || '—'}`,
    `Project location: ${v.location || '—'}`,
    `Type of project: ${v.type || '—'}`,
    `Approximate budget: ${v.budget || '—'}`,
    `Preferred start: ${v.start || '—'}`,
    '',
    'Project description:',
    v.description || '—',
  ]
  if (files.length) {
    lines.push('', `Files to send: ${files.map((f) => f.name).join(', ')}`)
  }
  return lines.join('\n')
}

export default function Quote() {
  useDocumentTitle(
    'Request a Quote',
    'Send UrbanRaise Building Works your project details and receive a scope and quotation.',
  )

  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [files, setFiles] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const fileRef = useRef(null)

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }))

  const brief = useMemo(() => formatBrief(values, files), [values, files])

  function validate() {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.phone.trim() && !values.whatsapp.trim())
      next.phone = 'Add a phone or WhatsApp number so we can reach you.'
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = 'That email address looks incomplete.'
    if (!values.type) next.type = 'Choose the closest project type.'
    if (values.description.trim().length < 20)
      next.description = 'A sentence or two about the project really helps.'
    return next
  }

  function onSubmit(e) {
    e.preventDefault()
    if (values.company) return // honeypot tripped
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) {
      const first = document.querySelector('[data-error="true"]')
      first?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function addFiles(list) {
    const incoming = Array.from(list || [])
    setFiles((prev) => {
      const seen = new Set(prev.map((f) => f.name + f.size))
      return [...prev, ...incoming.filter((f) => !seen.has(f.name + f.size))].slice(0, 12)
    })
  }

  const emailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Project enquiry — ${values.name || 'new client'}`,
  )}&body=${encodeURIComponent(brief)}`

  return (
    <>
      <PageHeader
        eyebrow="Request a Quote"
        title="Start your project"
        intro="Tell us about the build. We’ll come back with a project scope and quotation — not just a callback."
      />

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          {/* form / success */}
          <Reveal className="rounded-2xl border border-line bg-white p-6 sm:p-8">
            {submitted ? (
              <div>
                <div className="inline-grid h-12 w-12 place-items-center rounded-full bg-brand-50 text-brand-600">
                  <Icon name="check" className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-2xl text-ink-900">
                  Thanks, {values.name.split(' ')[0] || 'there'} — your brief is ready
                </h2>
                <p className="mt-2 text-sm text-ink-700">
                  Send it to UrbanRaise using whichever is easiest. Your drawings and
                  photos aren’t attached automatically yet — add them in the WhatsApp
                  chat or reply to the email.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={waLink(brief)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
                  >
                    <Icon name="whatsapp" className="h-4 w-4" />
                    Send via WhatsApp
                  </a>
                  <a
                    href={emailHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white"
                  >
                    <Icon name="mail" className="h-4 w-4" />
                    Send via Email
                  </a>
                </div>

                <div className="mt-6">
                  <p className="mb-1.5 text-sm font-semibold text-ink-900">
                    Your project brief
                  </p>
                  <textarea
                    readOnly
                    value={brief}
                    rows={13}
                    className={cn(inputClass, 'font-mono text-xs leading-relaxed')}
                  />
                </div>

                {files.length > 0 && (
                  <p className="mt-3 text-xs text-ink-700">
                    {files.length} file{files.length > 1 ? 's' : ''} selected — remember to
                    attach {files.length > 1 ? 'them' : 'it'} when you send.
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  ← Edit details
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" htmlFor="name" required error={errors.name}>
                    <input
                      id="name"
                      data-error={!!errors.name}
                      className={inputClass}
                      value={values.name}
                      onChange={set('name')}
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Email" htmlFor="email" error={errors.email}>
                    <input
                      id="email"
                      type="email"
                      data-error={!!errors.email}
                      className={inputClass}
                      value={values.email}
                      onChange={set('email')}
                      autoComplete="email"
                    />
                  </Field>
                  <Field label="Phone number" htmlFor="phone" error={errors.phone}>
                    <input
                      id="phone"
                      type="tel"
                      data-error={!!errors.phone}
                      className={inputClass}
                      value={values.phone}
                      onChange={set('phone')}
                      autoComplete="tel"
                    />
                  </Field>
                  <Field label="WhatsApp number" htmlFor="whatsapp">
                    <input
                      id="whatsapp"
                      type="tel"
                      className={inputClass}
                      value={values.whatsapp}
                      onChange={set('whatsapp')}
                    />
                  </Field>
                  <Field label="Project location" htmlFor="location">
                    <input
                      id="location"
                      className={inputClass}
                      value={values.location}
                      onChange={set('location')}
                      placeholder="Suburb, city"
                    />
                  </Field>
                  <Field label="Type of project" htmlFor="type" required error={errors.type}>
                    <select
                      id="type"
                      data-error={!!errors.type}
                      className={inputClass}
                      value={values.type}
                      onChange={set('type')}
                    >
                      <option value="">Select…</option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Approximate budget" htmlFor="budget">
                    <select
                      id="budget"
                      className={inputClass}
                      value={values.budget}
                      onChange={set('budget')}
                    >
                      <option value="">Select…</option>
                      {BUDGETS.map((b) => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Preferred start date" htmlFor="start">
                    <select
                      id="start"
                      className={inputClass}
                      value={values.start}
                      onChange={set('start')}
                    >
                      <option value="">Select…</option>
                      {START_DATES.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field
                  label="Project description"
                  htmlFor="description"
                  required
                  error={errors.description}
                  className="mt-5"
                >
                  <textarea
                    id="description"
                    rows={5}
                    data-error={!!errors.description}
                    className={inputClass}
                    value={values.description}
                    onChange={set('description')}
                    placeholder="What do you want to build? Tell us about the site, size, key requirements and anything you’ve decided so far."
                  />
                </Field>

                {/* uploads */}
                <div className="mt-5">
                  <p className="mb-1.5 text-sm font-semibold text-ink-900">
                    Upload your plans <span className="font-normal text-ink-700/60">(optional)</span>
                  </p>
                  <div
                    onDragOver={(e) => {
                      e.preventDefault()
                      setDragOver(true)
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault()
                      setDragOver(false)
                      addFiles(e.dataTransfer.files)
                    }}
                    className={cn(
                      'rounded-xl border-2 border-dashed p-6 text-center transition-colors',
                      dragOver ? 'border-brand-400 bg-brand-50' : 'border-line bg-surface',
                    )}
                  >
                    <Icon name="upload" className="mx-auto h-6 w-6 text-brand-500" />
                    <p className="mt-2 text-sm text-ink-700">
                      Drag files here, or{' '}
                      <button
                        type="button"
                        onClick={() => fileRef.current?.click()}
                        className="font-semibold text-brand-600 underline underline-offset-2"
                      >
                        browse
                      </button>
                    </p>
                    <p className="mt-1 text-xs text-ink-700/60">
                      {UPLOAD_HINTS.join(' · ')}
                    </p>
                    <input
                      ref={fileRef}
                      type="file"
                      multiple
                      className="hidden"
                      onChange={(e) => addFiles(e.target.files)}
                    />
                  </div>

                  {files.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {files.map((f) => (
                        <li
                          key={f.name + f.size}
                          className="flex items-center justify-between gap-3 rounded-lg border border-line bg-white px-3 py-2 text-sm"
                        >
                          <span className="truncate text-ink-800">{f.name}</span>
                          <button
                            type="button"
                            onClick={() =>
                              setFiles((prev) =>
                                prev.filter((x) => x.name + x.size !== f.name + f.size),
                              )
                            }
                            className="shrink-0 text-ink-700/60 hover:text-red-600"
                            aria-label={`Remove ${f.name}`}
                          >
                            <Icon name="close" className="h-4 w-4" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* honeypot */}
                <div className="absolute left-[-9999px]" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.company}
                    onChange={set('company')}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 sm:w-auto"
                >
                  Request a Quote
                  <Icon name="arrowRight" className="h-4 w-4" />
                </button>
                <p className="mt-3 text-xs text-ink-700/70">
                  We’ll only use your details to respond to this enquiry.
                </p>
              </form>
            )}
          </Reveal>

          {/* aside */}
          <Reveal delay={120} className="space-y-4">
            <div className="rounded-2xl border border-line bg-white p-6">
              <h2 className="text-base font-semibold text-ink-900">What happens next</h2>
              <ol className="mt-4 space-y-4">
                {[
                  'We review your details and may ask a few follow-up questions.',
                  'We prepare a project scope and quotation.',
                  'We talk it through and adjust before anything is agreed.',
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-ink-700">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-xs font-bold text-brand-600">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6">
              <h2 className="text-base font-semibold text-ink-900">Prefer to talk first?</h2>
              <div className="mt-4 space-y-3 text-sm">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 font-semibold text-ink-800 hover:text-brand-600"
                >
                  <Icon name="whatsapp" className="h-4 w-4 text-[#25D366]" />
                  WhatsApp us
                </a>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 font-semibold text-ink-800 hover:text-brand-600"
                >
                  <Icon name="phone" className="h-4 w-4 text-brand-500" />
                  {site.phoneDisplay}
                </a>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-2.5 font-semibold text-ink-800 hover:text-brand-600"
                >
                  <Icon name="mail" className="h-4 w-4 text-brand-500" />
                  {site.email}
                </a>
              </div>
            </div>

            <p className="rounded-xl border border-line bg-surface p-4 text-xs text-ink-700">
              Note: this form is not yet connected to a backend. Submitting composes a
              brief you can send via WhatsApp or email. Wire it to a form service or
              inbox before launch.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
