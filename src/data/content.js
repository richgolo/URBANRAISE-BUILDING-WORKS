/* Editorial content — process, differentiators, about copy, testimonials.
   Text from the UrbanRaise website plan (sections 4, 8, 9, 12) plus
   expanded placeholder copy to be reviewed/replaced by UrbanRaise. */

export const processSteps = [
  {
    no: '01',
    stage: 'Consultation',
    description:
      'The client discusses the property, idea, location, requirements and budget.',
  },
  {
    no: '02',
    stage: 'Design & Planning',
    description:
      'Project requirements, drawings and construction plans are prepared or reviewed.',
  },
  {
    no: '03',
    stage: 'Quotation',
    description: 'UrbanRaise prepares the project scope and quotation.',
  },
  {
    no: '04',
    stage: 'Construction',
    description:
      'Construction begins with professional supervision and coordination.',
  },
  {
    no: '05',
    stage: 'Quality Inspection',
    description:
      'The project is inspected and outstanding items are completed.',
  },
  {
    no: '06',
    stage: 'Handover',
    description: 'The completed property is handed over to the client.',
  },
]

export const whyUrbanRaise = [
  {
    title: 'Quality Workmanship',
    description: 'Attention to construction quality and finishing.',
    icon: 'trowel',
  },
  {
    title: 'Professional Supervision',
    description:
      'Projects are properly coordinated and monitored throughout construction.',
    icon: 'clipboard',
  },
  {
    title: 'Transparent Communication',
    description: 'Clients receive clear communication throughout their projects.',
    icon: 'chat',
  },
  {
    title: 'Attention to Detail',
    description: 'Every stage of construction receives careful attention.',
    icon: 'ruler',
  },
  {
    title: 'Smart Construction',
    description: 'Practical construction decisions are combined with good design.',
    icon: 'bulb',
  },
  {
    title: 'Reliable Delivery',
    description: 'Projects are managed according to agreed scopes and schedules.',
    icon: 'check',
  },
]

/* ---- About page ---- */

export const about = {
  intro:
    'UrbanRaise Building Works is a construction and property-development company that takes a client’s idea from concept to completed building. We plan, build and hand over homes, apartments and renovations — and stay accountable for quality and programme from start to finish.',
  // TODO: real company history and founding year
  background:
    'UrbanRaise was founded to give private clients and investors a single, dependable team for building work — one that combines practical construction decisions with considered design. The company focuses on residential construction, apartment developments, renovations and the project management that keeps them on track.',
  experience:
    'Our team brings together site management, trades coordination and finishing experience across private homes, multi-unit developments and major renovations. Every project is run with dedicated supervision rather than left to sub-contractors alone.',
  mission:
    'To deliver well-built, well-finished properties through clear communication, careful supervision and honest pricing — so clients can invest in construction with confidence.',
  vision:
    'To be recognised as a construction partner that clients trust with major investments, known for solid buildings, smart design and reliable delivery.',
  philosophy:
    'Smart Design, Solid Buildings — we believe good construction is mostly good decisions, made early, made together with the client, and carried through on site with attention to detail.',
  values: [
    {
      title: 'Quality first',
      description:
        'Finishing standards and structural integrity are not negotiable line items.',
    },
    {
      title: 'Transparency',
      description:
        'Clear scopes, clear quotations and regular progress updates — no surprises.',
    },
    {
      title: 'Accountability',
      description:
        'One team owns the outcome, from the first sketch to the final snag.',
    },
    {
      title: 'Respect for budget & time',
      description:
        'We build to the agreed scope and schedule, and flag changes early.',
    },
  ],
  // TODO: real names, roles, photos and bios
  team: [
    {
      name: 'Founder & Managing Director',
      role: 'Company direction, client relationships, project oversight',
      bio: 'Placeholder bio — replace with the founder’s background, experience and approach to construction.',
    },
    {
      name: 'Construction Manager',
      role: 'Site supervision, trades coordination, quality control',
      bio: 'Placeholder bio — replace with real team member details.',
    },
    {
      name: 'Project Coordinator',
      role: 'Programme, procurement and client progress reporting',
      bio: 'Placeholder bio — replace with real team member details.',
    },
  ],
  // TODO: list real registrations (e.g. company registration, NHBRC,
  // industry bodies, tax clearance) — remove this section if not applicable.
  certifications: [
    'Registered company (registration number to be added)',
    'Industry / home-builder registration (to be confirmed)',
    'Relevant insurances held for construction work',
  ],
}

/* ---- Testimonials ----
   ⚠️  PLACEHOLDER. The website plan is explicit: only genuine client
   testimonials may be published. These samples show the layout only —
   the UI tags them "Sample" while `placeholder` is true. Replace with
   real, permission-granted quotes and set `placeholder: false`.        */

export const testimonialsArePlaceholder = true

export const testimonials = [
  {
    quote:
      'They took our rough idea and turned it into a plan we could actually build, then stayed on site until every detail was right.',
    attribution: 'Homeowner',
    context: 'Residential Construction',
  },
  {
    quote:
      'Weekly updates meant we always knew where the budget and the programme stood. The handover snag list was short.',
    attribution: 'Property investor',
    context: 'Apartment Development',
  },
  {
    quote:
      'Our renovation had a few surprises behind the walls. They explained the options clearly and kept the finish quality high.',
    attribution: 'Property owner',
    context: 'Renovations & Remodeling',
  },
]
