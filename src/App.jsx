import { useRef } from "react"
import { About } from "./components/About"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Presentation } from "./components/Presentation"

function App() {

  return (
    <>
      <Navbar />
      <Presentation />
      <About />
      <Footer />
    </>
  )
}

export default App
