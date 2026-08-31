import { Link } from 'react-router-dom'
import { site, waLink } from '../../data/site.js'
import Icon from '../ui/Icon.jsx'

/** Persistent Call / WhatsApp / Quote bar — mobile only (plan §14). */
export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 divide-x divide-line">
        <a
          href={site.phoneHref}
          className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-ink-800"
        >
          <Icon name="phone" className="h-5 w-5 text-brand-500" />
          Call
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-ink-800"
        >
          <Icon name="whatsapp" className="h-5 w-5 text-[#25D366]" />
          WhatsApp
        </a>
        <Link
          to="/quote"
          className="flex flex-col items-center gap-1 bg-brand-500 py-2.5 text-[11px] font-semibold text-white"
        >
          <Icon name="clipboardCheck" className="h-5 w-5" />
          Get a Quote
        </Link>
      </div>
    </div>
  )
}
