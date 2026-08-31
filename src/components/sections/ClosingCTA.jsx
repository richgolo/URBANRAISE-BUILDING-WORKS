import Section from '../ui/Section.jsx'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import { site } from '../../data/site.js'

/** "You envision it. We build it." closing band (plan p.9). */
export default function ClosingCTA() {
  return (
    <Section tone="dark" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl" />
      <Reveal className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-4xl sm:text-5xl">
          You envision it.
          <br />
          <span className="text-brand-300">We build it.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          {site.name} takes your project from first conversation to completed,
          handed-over building.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/quote" variant="white" size="lg">
            Start Your Project
          </Button>
          <Button to="/projects" variant="ghostOnDark" size="lg" icon="arrowUpRight">
            View Our Work
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}
