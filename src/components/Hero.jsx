import profilePic from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-image-col">
          <div className="img-container">
            <img src={profilePic} alt="Valentina Fernandez" className="profile-img" />
          </div>
        </div>

        <div className="hero-text-col">
          <p className="hero-eyebrow">Hello, I'm</p>
          <h1 className="hero-name">Valentina Fernandez</h1>
          <p className="hero-title">Enterprise Technology Architect · Cloud &amp; AI @ Accenture</p>
          <p className="hero-desc">
            Software Engineering graduate with a background spanning AI/NLP research,
            cloud infrastructure, and AI platform development. I build scalable systems
            and data-driven solutions with real-world impact.
          </p>
          <div className="hero-actions">
            <a href="/CV-Valentina-Fernandez.pdf" download className="btn-primary">
              ↓ Download CV
            </a>
            <a href="https://github.com/valenfernandez" target="_blank" rel="noopener noreferrer" className="btn-outline">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/valentina-fernandez-/" target="_blank" rel="noopener noreferrer" className="btn-outline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
