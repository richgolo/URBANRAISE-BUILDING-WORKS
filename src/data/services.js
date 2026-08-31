import { images } from './images.js'

/* Services — copy taken from the UrbanRaise website plan (section 5).
   Expand "what's included" bullets with real detail from UrbanRaise. */

export const services = [
  {
    slug: 'residential-construction',
    name: 'Residential Construction',
    summary:
      'Complete construction of private homes, from planning through finishing and handover.',
    description:
      'We build private homes end to end. From site preparation and foundations to roofing, services, finishes and the final handover, one team stays accountable for the whole build — so quality and programme are managed as a single project, not a chain of disconnected trades.',
    included: [
      'Site preparation, earthworks and foundations',
      'Structure, roofing and building envelope',
      'Electrical, plumbing and drainage first & second fix',
      'Internal finishes, joinery and fittings',
      'Snagging, cleaning and formal handover',
    ],
    image: images.services.residential,
  },
  {
    slug: 'apartment-development',
    name: 'Apartment Development',
    summary:
      'Construction of single and multi-unit apartment developments for homeowners, investors and developers.',
    description:
      'We construct single blocks and multi-unit residential developments for owners, investors and developers. Repetition is planned for: standardised unit types, phased handovers and cost control across the whole scheme keep budgets and timelines predictable.',
    included: [
      'Multi-unit and multi-storey residential structures',
      'Shared services, parking and common areas',
      'Standardised unit fit-out for consistent quality',
      'Phased construction and sectional handover',
      'Coordination with engineers and local authorities',
    ],
    image: images.services.apartments,
  },
  {
    slug: 'renovations-remodeling',
    name: 'Renovations & Remodeling',
    summary:
      'Modernization, extensions, structural improvements and complete property transformations.',
    description:
      'We modernise and extend existing properties — from a single reworked space to a whole-house transformation. Existing conditions are surveyed first so structural changes, services and finishes are planned around what is already there.',
    included: [
      'Room reconfiguration and open-plan conversions',
      'Extensions and additional storeys',
      'Structural alterations and underpinning',
      'Kitchen, bathroom and full interior refits',
      'Building fabric, insulation and weatherproofing upgrades',
    ],
    image: images.services.renovations,
  },
  {
    slug: 'building-design-planning',
    name: 'Building Design & Planning',
    summary: 'Assistance with turning a client’s idea into a practical construction plan.',
    description:
      'Have an idea but no drawings? We help translate it into a buildable plan — layouts, specifications and construction detail that balance how you want to live with what the site, budget and regulations allow. Existing drawings are reviewed and value-engineered before work starts.',
    included: [
      'Concept layouts and spatial planning',
      'Review and value-engineering of existing drawings',
      'Material and specification guidance',
      'Buildability and budget alignment',
      'Coordination with architects and engineers',
    ],
    image: images.services.design,
  },
  {
    slug: 'project-management',
    name: 'Project Management',
    summary:
      'Coordination and supervision of construction projects to ensure quality, cost control and efficient execution.',
    description:
      'We run the project so you don’t have to. Programme, trades, procurement, inspections and reporting are coordinated from one point of contact, with regular updates on progress, cost and any decisions needed from you.',
    included: [
      'Programme planning and progress tracking',
      'Trade procurement and coordination',
      'On-site supervision and quality inspections',
      'Cost monitoring against the agreed scope',
      'Regular client progress reporting',
    ],
    image: images.services.projectManagement,
  },
  {
    slug: 'structural-general-construction',
    name: 'Structural & General Construction Works',
    summary:
      'Additional building and structural services offered by UrbanRaise, extended as the company grows.',
    description:
      'Beyond full builds, we take on focused structural and general construction packages — boundary and retaining structures, outbuildings, repairs and remedial work. This list grows as UrbanRaise expands its capabilities.',
    included: [
      'Retaining walls and boundary structures',
      'Outbuildings, garages and staff quarters',
      'Concrete works, slabs and paving',
      'Structural repairs and remedial work',
      'Ad-hoc building packages by arrangement',
    ],
    image: images.services.structural,
  },
]

export const whatWeBuild = [
  { icon: 'house', label: 'Houses' },
  { icon: 'apartments', label: 'Apartments' },
  { icon: 'development', label: 'Property Developments' },
  { icon: 'renovation', label: 'Renovations' },
]

export function getService(slug) {
  return services.find((s) => s.slug === slug)
}
