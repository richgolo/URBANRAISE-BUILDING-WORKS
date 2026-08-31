import { useDocumentTitle } from '../lib/useDocumentTitle.js'
import Hero from '../components/sections/Hero.jsx'
import ServicesPreview from '../components/sections/ServicesPreview.jsx'
import FeaturedProjects from '../components/sections/FeaturedProjects.jsx'
import AboutPreview from '../components/sections/AboutPreview.jsx'
import WhyUrbanRaise from '../components/sections/WhyUrbanRaise.jsx'
import Guarantees from '../components/sections/Guarantees.jsx'
import ProcessTimeline from '../components/sections/ProcessTimeline.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import QuoteCTASection from '../components/sections/QuoteCTASection.jsx'
import ClosingCTA from '../components/sections/ClosingCTA.jsx'
import { site } from '../data/site.js'

export default function Home() {
  useDocumentTitle('', site.description)
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturedProjects />
      <AboutPreview />
      <WhyUrbanRaise />
      <Guarantees />
      <ProcessTimeline />
      <Testimonials />
      <QuoteCTASection />
      <ClosingCTA />
    </>
  )
}
