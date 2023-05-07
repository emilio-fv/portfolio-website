import * as React from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Experience />
      <Contact />
      <Footer /> */}
      <Sidebar />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Emilio Vazquez | Software Developer</title>