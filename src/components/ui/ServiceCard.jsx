import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn.js'
import SmartImage from './SmartImage.jsx'
import Icon from './Icon.jsx'

export default function ServiceCard({ service, className }) {
  return (
    <Link
      to={`/services#${service.slug}`}
      className={cn(
        'group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-card)]',
        className,
      )}
    >
      <SmartImage
        src={service.image}
        alt={service.name}
        ratio="16 / 10"
        className="w-full"
        imgClassName="transition-transform duration-500 group-hover:scale-105"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg text-ink-900">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm text-ink-700">{service.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
          Learn more
          <Icon
            name="arrowRight"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  )
}
