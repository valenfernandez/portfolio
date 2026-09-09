import { useState } from "react";
import { experience } from "../data/experience";
import "./ExperienceTimeline.css";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="experience" className="section">
      <div className="section-header">
        <p className="section-label">Career</p>
        <h2 className="section-title">Work Experience</h2>
      </div>

      <div className="timeline">
        {[...experience].map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className={`timeline-item ${isActive ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-dates">
                  {item.start_date} — {item.finish_date || "Present"}
                </p>
                <div className="timeline-description">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cv-button-wrapper">
        <a href="/CV-Valentina-Fernandez.pdf" download className="btn-primary">
          ↓ Download CV
        </a>
      </div>
    </section>
  );
}
