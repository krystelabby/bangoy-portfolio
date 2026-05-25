import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Certificates } from './components/Certificates'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { navLinks } from './data/portfolio'
import { useActiveSection } from './hooks/useActiveSection'

function App() {
  const sectionIds = navLinks.map((l) => l.id)
  const activeId = useActiveSection(sectionIds)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar activeId={activeId} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
