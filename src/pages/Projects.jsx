import { useMemo, useState } from 'react'
import { useDocumentTitle } from '../lib/useDocumentTitle.js'
import PageHeader from '../components/sections/PageHeader.jsx'
import Section from '../components/ui/Section.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import ProjectCard from '../components/ui/ProjectCard.jsx'
import ClosingCTA from '../components/sections/ClosingCTA.jsx'
import { cn } from '../lib/cn.js'
import { projects } from '../data/projects.js'

const FILTERS = ['All', 'Completed', 'Ongoing']

export default function Projects() {
  useDocumentTitle(
    'Projects',
    'Completed and ongoing construction projects by UrbanRaise Building Works — homes, apartments and renovations.',
  )
  const [filter, setFilter] = useState('All')

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.status === filter)),
    [filter],
  )

  return (
    <>
      <PageHeader
        eyebrow="Our Projects"
        title="Completed & ongoing work"
        intro="Real projects, real photographs. Filter by status, then open any project for its full scope and gallery."
      />

      <Section tone="white">
        <div className="flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => {
            const count =
              f === 'All' ? projects.length : projects.filter((p) => p.status === f).length
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                  filter === f
                    ? 'bg-brand-500 text-white'
                    : 'border border-line bg-white text-ink-700 hover:border-brand-300',
                )}
              >
                {f}
                <span className={cn('ml-1.5', filter === f ? 'text-white/70' : 'text-ink-700/50')}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 70}>
              <ProjectCard project={project} className="h-full" />
            </Reveal>
          ))}
        </div>

        <p className="mt-10 rounded-xl border border-line bg-surface p-4 text-center text-xs text-ink-700">
          Sample portfolio — these projects are placeholders for layout purposes and
          will be replaced with real UrbanRaise work.
        </p>
      </Section>

      <ClosingCTA />
    </>
  )
}
