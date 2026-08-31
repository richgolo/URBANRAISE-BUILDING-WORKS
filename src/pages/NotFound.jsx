import { useDocumentTitle } from '../lib/useDocumentTitle.js'
import Section from '../components/ui/Section.jsx'
import Button from '../components/ui/Button.jsx'

export default function NotFound() {
  useDocumentTitle('Page not found')
  return (
    <Section tone="white" className="grid min-h-[60vh] place-items-center text-center">
      <div>
        <p className="font-display text-6xl font-bold text-brand-200">404</p>
        <h1 className="mt-3 text-2xl text-ink-900">This page isn’t on the plans</h1>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ink-700">
          The page you’re after may have moved. Head back home or take a look at our
          projects.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button to="/">Back home</Button>
          <Button to="/projects" variant="outline">
            View projects
          </Button>
        </div>
      </div>
    </Section>
  )
}
