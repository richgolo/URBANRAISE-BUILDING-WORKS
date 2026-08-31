import { site, waLink } from '../../data/site.js'
import Icon from '../ui/Icon.jsx'

/** Floating WhatsApp chat button — desktop only (mobile uses the action bar). */
export default function WhatsAppFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat with ${site.name} on WhatsApp`}
      className="group fixed bottom-6 right-6 z-40 hidden items-center gap-0 rounded-full bg-[#25D366] py-3 pl-3 pr-3 text-white shadow-lg shadow-[#25D366]/30 transition-all hover:pr-5 md:flex"
    >
      <Icon name="whatsapp" className="h-6 w-6 shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:ml-2 group-hover:max-w-[10rem]">
        Chat with us
      </span>
    </a>
  )
}
