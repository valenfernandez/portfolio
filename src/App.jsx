import { useState } from 'react'
import './App.css'
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import NavBar from './components/Navbar';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Skills from './components/Skills';
import StarsBackground from "./components/StarsBackground";

function App() {
  return (
    <>
    <header>
      <NavBar/>
    </header>
      <StarsBackground/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </>
  )
}

export default App
