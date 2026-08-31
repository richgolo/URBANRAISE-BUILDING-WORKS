import { images } from './images.js'

/* ------------------------------------------------------------------
   ⚠️  SAMPLE PROJECTS — every project below is fictional and exists
   only to demonstrate the portfolio layout. Replace with real
   UrbanRaise projects, photos and descriptions before launch.
   Do not publish these as if they were real work.
------------------------------------------------------------------ */

export const projects = [
  {
    slug: 'modern-4-bedroom-residence',
    name: 'Modern 4-Bedroom Residence',
    location: 'Sandton',
    type: 'Residential Construction',
    status: 'Completed',
    year: '2024',
    featured: true,
    summary:
      'Construction and finishing of a modern four-bedroom family home focused on functionality, durability and contemporary design.',
    scope: [
      'Full construction from foundations to handover',
      'Reinforced concrete structure and flat-roof detailing',
      'Open-plan living with double-volume entrance',
      'Custom joinery, tiling and painted finishes',
      'Landscaping, driveway and boundary wall',
    ],
    gallery: images.projects.modern4bed,
  },
  {
    slug: 'hillside-residence',
    name: 'Hillside Residence',
    location: 'Pretoria East',
    type: 'Residential Construction',
    status: 'Completed',
    year: '2023',
    featured: true,
    summary:
      'A split-level home built into a sloping site, using the level change to separate living and sleeping wings.',
    scope: [
      'Stepped foundations and retaining structure for the slope',
      'Split-level floor plan across three half-levels',
      'Large glazed openings to the valley view',
      'Timber-clad accents over face-brick base',
      'Terraced garden and outdoor entertainment deck',
    ],
    gallery: images.projects.hillsideResidence,
  },
  {
    slug: 'courtyard-apartments',
    name: 'Courtyard Apartments',
    location: 'Midrand',
    type: 'Apartment Development',
    status: 'Completed',
    year: '2023',
    featured: true,
    summary:
      'An eight-unit apartment block arranged around a central landscaped courtyard, delivered for a private investor.',
    scope: [
      'Three-storey structure with eight one- and two-bed units',
      'Central courtyard, secure parking and refuse area',
      'Standardised unit fit-out for consistent quality',
      'Shared services, metering and rainwater management',
      'Sectional-title-ready handover documentation',
    ],
    gallery: images.projects.courtyardApartments,
  },
  {
    slug: 'heritage-home-renovation',
    name: 'Heritage Home Renovation',
    location: 'Parktown',
    type: 'Renovations & Remodeling',
    status: 'Completed',
    year: '2022',
    featured: false,
    summary:
      'A full interior renovation of an older home — reworked layout, new services and modern finishes behind a retained facade.',
    scope: [
      'Removal of internal walls for open-plan living',
      'New electrical, plumbing and drainage throughout',
      'Kitchen and three bathrooms rebuilt',
      'Roof repairs and ceiling replacement',
      'Refinished floors, joinery and period detailing',
    ],
    gallery: images.projects.heritageRenovation,
  },
  {
    slug: 'park-lane-duplex',
    name: 'Park Lane Duplex',
    location: 'Centurion',
    type: 'Residential Construction',
    status: 'Completed',
    year: '2022',
    featured: false,
    summary:
      'A pair of mirrored three-bedroom duplex units on a single stand, built for rental return.',
    scope: [
      'Two attached double-storey units with private yards',
      'Shared party wall with acoustic detailing',
      'Prepaid metering and individual services',
      'Hard-wearing rental-grade finishes',
      'Paving, carports and boundary walling',
    ],
    gallery: images.projects.parkLaneDuplex,
  },
  {
    slug: 'family-home-extension',
    name: 'Family Home Extension',
    location: 'Bryanston',
    type: 'Renovations & Remodeling',
    status: 'Completed',
    year: '2021',
    featured: false,
    summary:
      'A double-storey extension adding a main bedroom suite and family room to an existing home.',
    scope: [
      'New foundations tied into the existing structure',
      'Double-storey addition with matching roofline',
      'Main bedroom suite, dressing room and en-suite',
      'Ground-floor family room opening to the garden',
      'Reworked finishes to blend old and new',
    ],
    gallery: images.projects.familyHomeExtension,
  },

  // ---- Ongoing ----
  {
    slug: 'ridgeview-apartments',
    name: 'Ridgeview Apartments',
    location: 'Midrand',
    type: 'Apartment Development',
    status: 'Ongoing',
    year: '2025',
    featured: true,
    summary:
      'A 14-unit apartment development currently under construction — superstructure complete, services and fit-out in progress.',
    scope: [
      'Four-storey reinforced concrete structure',
      '14 units across three unit types',
      'Basement and ground-level parking',
      'Solar-ready electrical reticulation',
      'Target handover in phases',
    ],
    gallery: images.projects.ridgeviewApartments,
  },
  {
    slug: 'lakeside-residence',
    name: 'Lakeside Residence',
    location: 'Hartbeespoort',
    type: 'Residential Construction',
    status: 'Ongoing',
    year: '2025',
    featured: false,
    summary:
      'A single-storey four-bedroom home under construction on a waterfront stand — structure up, roof and services underway.',
    scope: [
      'Raft foundation for high water table',
      'Long single-storey plan facing the water',
      'Wide covered veranda and glazed living spaces',
      'Roof and waterproofing in progress',
      'Finishes and landscaping to follow',
    ],
    gallery: images.projects.lakesideResidence,
  },
  {
    slug: 'city-infill-home',
    name: 'City Infill Home',
    location: 'Linden',
    type: 'Residential Construction',
    status: 'Ongoing',
    year: '2025',
    featured: false,
    summary:
      'A compact double-storey home on a narrow infill stand — foundations and ground floor slab complete.',
    scope: [
      'Narrow-stand design maximising floor area',
      'Double-storey with rooftop terrace',
      'Party-wall construction to both boundaries',
      'Ground floor slab cast, first-floor structure next',
      'Completion targeted for late 2025',
    ],
    gallery: images.projects.cityInfillHome,
  },
]

export const completedProjects = projects.filter((p) => p.status === 'Completed')
export const ongoingProjects = projects.filter((p) => p.status === 'Ongoing')
export const featuredProjects = projects.filter((p) => p.featured)

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}
