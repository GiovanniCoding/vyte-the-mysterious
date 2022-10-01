import { About } from "./components/About"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Presentation } from "./components/Presentation"
import { Projects } from "./components/Projects"
import { WorkExperience } from "./components/WorkExperience"

function App() {

  return (
    <>
      <Navbar />
      <Presentation />
      <About />
      <WorkExperience />
      <Projects />
      <Footer />
    </>
  )
}

export default App
