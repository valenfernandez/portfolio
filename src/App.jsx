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
      <NavBar />
      <StarsBackground />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>© {new Date().getFullYear()} Valentina Fernandez · Built with React &amp; Vite</p>
      </footer>
    </>
  );
}

export default App;
