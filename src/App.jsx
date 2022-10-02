import { useRef } from "react"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Presentation } from "./components/Presentation"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { WorkExperience } from "./components/WorkExperience"

function App() {

  const homeRef = useRef()
  const aboutRef = useRef()
  const SkillsRef = useRef()
  const ProjectsRef = useRef()
  const WorkExperienceRef = useRef()
  const ContactRef = useRef()

  return (
    <>
      <Navbar
        homeRef = { homeRef }
        aboutRef = { aboutRef }
        SkillsRef = { SkillsRef }
        ProjectsRef = { ProjectsRef }
        WorkExperienceRef = { WorkExperienceRef }
        ContactRef = { ContactRef }
        />
      <Presentation
        homeRef = { homeRef }
      />
      <About
        aboutRef = { aboutRef }
      />
      <Skills
        SkillsRef = { SkillsRef }
      />
      <Projects
        ProjectsRef = { ProjectsRef }
      />
      <WorkExperience
        WorkExperienceRef = { WorkExperienceRef }
      />
      <Contact
        ContactRef = { ContactRef }
      />
      <Footer />
    </>
  )
}

export default App
