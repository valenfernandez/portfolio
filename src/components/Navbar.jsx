import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar--solid" : "navbar--transparent"}`}>
      <div className="navbar-inner">
        <a href="#" className="navbar-logo" onClick={closeMenu}>
          VF
        </a>

        <ul className="navbar-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <ul>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
