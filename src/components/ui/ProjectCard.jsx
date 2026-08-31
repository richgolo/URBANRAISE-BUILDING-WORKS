import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn.js'
import SmartImage from './SmartImage.jsx'
import Icon from './Icon.jsx'

const STATUS_STYLES = {
  Completed: 'bg-brand-50 text-brand-700',
  Ongoing: 'bg-amber-100 text-amber-800',
}

export default function ProjectCard({ project, className }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={cn(
        'group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]',
        className,
      )}
    >
      <div className="relative">
        <SmartImage
          src={project.gallery?.[0]}
          alt={project.name}
          ratio="4 / 3"
          className="w-full"
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={cn(
            'absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold',
            STATUS_STYLES[project.status] || 'bg-white text-ink-800',
          )}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
          {project.type}
        </p>
        <h3 className="mt-1.5 text-lg text-ink-900">{project.name}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-700">
          <Icon name="pin" className="h-4 w-4 text-ink-700/60" />
          {project.location}
          {project.year && <span className="text-ink-700/50">· {project.year}</span>}
        </p>
        <p className="mt-3 line-clamp-2 text-sm text-ink-700">{project.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
          View project
          <Icon
            name="arrowRight"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  )
}
