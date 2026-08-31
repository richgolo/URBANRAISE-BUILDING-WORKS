import Section from '../ui/Section.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import ProjectCard from '../ui/ProjectCard.jsx'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import { featuredProjects } from '../../data/projects.js'

export default function FeaturedProjects() {
  return (
    <Section id="projects" tone="surface">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Featured projects"
          title="Recent and current builds"
          intro="A look at the homes, apartments and renovations UrbanRaise has delivered and has under construction."
        />
        <Reveal delay={100}>
          <Button to="/projects" variant="outline">
            All projects
          </Button>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.slice(0, 6).map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 80}>
            <ProjectCard project={project} className="h-full" />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
