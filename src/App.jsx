import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Presentation } from "./components/Presentation"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { WorkExperience } from "./components/WorkExperience"

function App() {

  return (
    <>
      <Navbar />
      <Presentation />
      <About />
      <Skills />
      <Projects />
      <WorkExperience />
      <Contact />
      <Footer />
    </>
  )
}

export default App
