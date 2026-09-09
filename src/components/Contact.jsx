function Contact() {
  const links = [
    {
      label: "Email",
      value: "",
      href: "mailto:valen.fernandez.montenegro@gmail.com",
      icon: "✉",
    },
    {
      label: "LinkedIn",
      value: "valentina-fernandez-",
      href: "https://www.linkedin.com/in/valentina-fernandez-/",
      icon: "in",
    },
    {
      label: "GitHub",
      value: "valenfernandez",
      href: "https://github.com/valenfernandez",
      icon: "</>",
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <p className="section-label">Get in touch</p>
        <h2 className="section-title">Contact</h2>
      </div>
      <p style={{ color: "var(--color-text-muted)", marginBottom: "32px", maxWidth: "480px" }}>
        Open to interesting projects, research collaborations, and new opportunities.
      </p>
      <div className="contact-grid">
        {links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">{link.icon}</div>
            <div>
              <p className="contact-label">{link.label}</p>
              <p className="contact-value">{link.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
