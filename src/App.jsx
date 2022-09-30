import { useRef } from "react"
import { About } from "./components/About"
import { Experiece } from "./components/Experiece"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Presentation } from "./components/Presentation"

function App() {

  return (
    <>
      <Navbar />
      <Presentation />
      <About />
      <Experiece />
      <Footer />
    </>
  )
}

export default App
