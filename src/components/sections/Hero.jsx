import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import SmartImage from '../ui/SmartImage.jsx'
import Icon from '../ui/Icon.jsx'
import { images } from '../../data/images.js'
import { whatWeBuild } from '../../data/services.js'
import { proofPoints } from '../../data/site.js'

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[88vh] flex-col justify-end overflow-hidden bg-ink-900 text-white">
      <SmartImage src={images.heroResidence} alt="" fill priority imgClassName="scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/55 to-ink-900/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/60 to-transparent" />

      <Container className="relative z-10 pb-14 pt-32 sm:pb-20 sm:pt-40">
        <p className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-200">
          <span className="h-px w-8 bg-brand-300/70" />
          Construction &amp; Property Development
        </p>

        <h1 className="max-w-3xl text-4xl leading-[1.05] text-white text-shadow-hero sm:text-6xl">
          Building homes.
          <br />
          Creating lasting value.
        </h1>

        <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
          From private homes to modern apartment developments, UrbanRaise Building
          Works delivers thoughtfully planned and professionally executed
          construction projects.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/quote" size="lg" variant="primary">
            Start Your Project
          </Button>
          <Button to="/projects" size="lg" variant="ghostOnDark" icon="arrowUpRight">
            View Our Projects
          </Button>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
          {whatWeBuild.map((w) => (
            <li key={w.label} className="flex items-center gap-2 text-sm font-medium text-white/85">
              <Icon name={w.icon} className="h-5 w-5 text-brand-200" />
              {w.label}
            </li>
          ))}
        </ul>
      </Container>

      {/* Proof strip */}
      <div className="relative z-10 border-t border-white/10 bg-ink-900/70 backdrop-blur">
        <Container className="grid grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
          {proofPoints.map((p) => (
            <div key={p.label} className="px-2 py-5 text-center sm:px-4">
              <p className="text-sm font-semibold text-white">{p.label}</p>
              <p className="mt-1 text-xs text-white/60">{p.detail}</p>
            </div>
          ))}
        </Container>
      </div>
    </section>
  )
}
