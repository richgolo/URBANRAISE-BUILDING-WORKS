import Section from '../ui/Section.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import ServiceCard from '../ui/ServiceCard.jsx'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import { services } from '../../data/services.js'

export default function ServicesPreview() {
  return (
    <Section id="services" tone="white">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="What we do"
          title="Construction services, end to end"
          intro="One team from the first sketch to the final key — so quality and programme are managed as a single project."
        />
        <Reveal delay={100}>
          <Button to="/services" variant="outline">
            View all services
          </Button>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={(i % 3) * 80}>
            <ServiceCard service={service} className="h-full" />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
