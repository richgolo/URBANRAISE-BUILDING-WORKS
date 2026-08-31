import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDocumentTitle } from '../lib/useDocumentTitle.js'
import Section from '../components/ui/Section.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import SmartImage from '../components/ui/SmartImage.jsx'
import Button from '../components/ui/Button.jsx'
import Icon from '../components/ui/Icon.jsx'
import ClosingCTA from '../components/sections/ClosingCTA.jsx'
import NotFound from './NotFound.jsx'
import { cn } from '../lib/cn.js'
import { projects, getProject } from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  useDocumentTitle(project ? `${project.name} — Projects` : 'Project not found')

  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((n) => (n + 1) % project.gallery.length)
      if (e.key === 'ArrowLeft')
        setLightbox((n) => (n - 1 + project.gallery.length) % project.gallery.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, project])

  if (!project) return <NotFound />

  const idx = projects.findIndex((p) => p.slug === project.slug)
  const prev = projects[(idx - 1 + projects.length) % projects.length]
  const next = projects[(idx + 1) % projects.length]

  const facts = [
    { label: 'Location', value: project.location },
    { label: 'Project Type', value: project.type },
    { label: 'Status', value: project.status },
    { label: 'Year', value: project.year },
  ]

  return (
    <>
      <Section tone="white" className="!pb-8 !pt-10">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-700 transition-colors hover:text-brand-600"
        >
          <Icon name="arrowRight" className="h-4 w-4 rotate-180" />
          All projects
        </Link>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span
            className={cn(
              'rounded-full px-3 py-1 text-xs font-semibold',
              project.status === 'Completed'
                ? 'bg-brand-50 text-brand-700'
                : 'bg-amber-100 text-amber-800',
            )}
          >
            {project.status}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-500">
            {project.type}
          </span>
        </div>

        <h1 className="mt-3 max-w-3xl text-3xl sm:text-5xl">{project.name}</h1>
        <p className="mt-4 max-w-2xl text-ink-700">{project.summary}</p>
      </Section>

      <Section tone="white" className="!py-0">
        <Reveal>
          <button
            type="button"
            onClick={() => setLightbox(0)}
            className="block w-full"
            aria-label="Open gallery"
          >
            <SmartImage
              src={project.gallery[0]}
              alt={project.name}
              ratio="16 / 9"
              priority
              className="rounded-2xl shadow-[var(--shadow-card)]"
            />
          </button>
        </Reveal>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <h2 className="text-2xl text-ink-900">Scope of work</h2>
            <ul className="mt-5 space-y-3">
              {project.scope.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-700">
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="h-fit rounded-2xl border border-line bg-surface p-6">
            <dl className="divide-y divide-line">
              {facts.map((f) => (
                <div key={f.label} className="flex justify-between gap-4 py-3 text-sm">
                  <dt className="font-semibold text-ink-900">{f.label}</dt>
                  <dd className="text-right text-ink-700">{f.value}</dd>
                </div>
              ))}
            </dl>
            <Button to="/quote" className="mt-5 w-full">
              Start a similar project
            </Button>
          </Reveal>
        </div>
      </Section>

      {project.gallery.length > 1 && (
        <Section tone="surface">
          <h2 className="text-2xl text-ink-900">Gallery</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((src, i) => (
              <Reveal key={src} delay={(i % 3) * 60}>
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="block w-full overflow-hidden rounded-xl"
                  aria-label={`View photo ${i + 1}`}
                >
                  <SmartImage
                    src={src}
                    alt={`${project.name} — photo ${i + 1}`}
                    ratio="4 / 3"
                    imgClassName="transition-transform duration-500 hover:scale-105"
                  />
                </button>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-700">
            Placeholder photography — replace with real project photographs.
          </p>
        </Section>
      )}

      <Section tone="white" className="!py-10">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            to={`/projects/${prev.slug}`}
            className="group rounded-xl border border-line p-5 transition-colors hover:border-brand-300"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-ink-700/60">
              Previous
            </span>
            <p className="mt-1 font-display font-semibold text-ink-900 group-hover:text-brand-600">
              {prev.name}
            </p>
          </Link>
          <Link
            to={`/projects/${next.slug}`}
            className="group rounded-xl border border-line p-5 text-right transition-colors hover:border-brand-300"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-ink-700/60">
              Next
            </span>
            <p className="mt-1 font-display font-semibold text-ink-900 group-hover:text-brand-600">
              {next.name}
            </p>
          </Link>
        </div>
      </Section>

      <ClosingCTA />

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink-900/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white"
            aria-label="Close"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
          <img
            src={project.gallery[lightbox]}
            alt={`${project.name} — photo ${lightbox + 1}`}
            className="max-h-[85vh] max-w-5xl rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {project.gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightbox((n) => (n - 1 + project.gallery.length) % project.gallery.length)
                }}
                className="absolute left-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white"
                aria-label="Previous photo"
              >
                <Icon name="arrowRight" className="h-5 w-5 rotate-180" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightbox((n) => (n + 1) % project.gallery.length)
                }}
                className="absolute right-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white"
                aria-label="Next photo"
              >
                <Icon name="arrowRight" className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
