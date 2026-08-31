/* ------------------------------------------------------------------
   Central site configuration.

   ⚠️  PLACEHOLDER DATA — every value below marked "TODO" must be
   replaced with real information from UrbanRaise before launch.
   See CONTENT-NEEDED.md in the project root.
------------------------------------------------------------------ */

export const site = {
  name: 'UrbanRaise Building Works',
  shortName: 'UrbanRaise',
  tagline: 'Smart Design, Solid Buildings', // company motto
  description:
    'UrbanRaise Building Works takes a client’s idea from concept to completed building — residential construction, apartment developments, renovations and professional project management.',

  // TODO: real production domain (used for canonical URLs, sitemap, OG tags)
  url: 'https://www.urbanraisebuildingworks.com',
  // TODO: company registration number (Registrar-General's Department, Ghana)
  registration: 'Registration number to be confirmed',
  // Shown on the legal pages — update when they are reviewed
  legalUpdated: 'August 2026',

  // Phone — 054 360 5740 (Ghana). WhatsApp assumed to be the same number.
  phoneDisplay: '+233 54 360 5740',
  phoneHref: 'tel:+233543605740',
  whatsappNumber: '233543605740', // E.164, no "+" — used for wa.me links
  // TODO: real email address
  email: 'hello@urbanraise.example', // .example = guaranteed placeholder
  emailHref: 'mailto:hello@urbanraise.example',

  // Office location — East Legon Hills, Accra, Ghana
  location: 'East Legon Hills – Nanakrom, Accra, Ghana',
  // TODO: confirm the full list of areas UrbanRaise serves
  areasServed: [
    'East Legon Hills',
    'East Legon',
    'Adjiringanor',
    'Ashaley Botwe',
    'Spintex',
    'Greater Accra',
  ],

  businessHours: [
    { days: 'Monday – Friday', hours: '08:00 – 17:00' },
    { days: 'Saturday', hours: '08:00 – 13:00' },
    { days: 'Sunday & public holidays', hours: 'Closed' },
  ],

  // TODO: real profile URLs (leave a platform out entirely if unused)
  socials: [
    { label: 'Instagram', href: '#', key: 'instagram' },
    { label: 'Facebook', href: '#', key: 'facebook' },
    { label: 'TikTok', href: '#', key: 'tiktok' },
    { label: 'LinkedIn', href: '#', key: 'linkedin' },
  ],

  whatsappMessage:
    "Hello UrbanRaise Building Works. I'm interested in discussing a construction project.",
}

export const primaryNav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

/** Build a WhatsApp click-to-chat link with a pre-filled message. */
export function waLink(message = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/** Proof points — qualitative, no unverifiable numbers. */
export const proofPoints = [
  { label: 'Concept to handover', detail: 'One team from first sketch to final key.' },
  { label: 'Dedicated site supervision', detail: 'Every project is monitored on the ground.' },
  { label: 'Fixed-scope quotations', detail: 'Clear pricing against an agreed scope of work.' },
  { label: 'Guided 6-step process', detail: 'You always know the current stage and what’s next.' },
]
