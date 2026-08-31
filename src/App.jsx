import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Quote from './pages/Quote.jsx'
import Contact from './pages/Contact.jsx'
import Faq from './pages/Faq.jsx'
import LegalPage from './pages/LegalPage.jsx'
import NotFound from './pages/NotFound.jsx'
import { privacy, terms } from './data/legal.js'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="quote" element={<Quote />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
          <Route path="privacy" element={<LegalPage doc={privacy} />} />
          <Route path="terms" element={<LegalPage doc={terms} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
