import { useRef } from "react"
import { About } from "./components/About"
import { Experiece } from "./components/Experiece"
import { Experiece2 } from "./components/Experiece2"
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
      {/* <Projects /> */}
      <Footer />
    </>
  )
}

export default App
