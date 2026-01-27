import { useState } from "react";
import { experience } from "../data/experience";
import "./ExperienceTimeline.css";

export default function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="experience" className="section">
      <h2>Work Experience</h2>

      <div className="timeline">
        {[...experience]
        .reverse()
        .map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              className={`timeline-item ${isActive ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() =>
                setActiveIndex(isActive ? null : index)
              }
            >
              <div className="timeline-dot" />

              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p className="company">{item.company}</p>
                <span className="dates">
                  {item.start_date} — {item.finish_date || "Present"}
                </span>

                <div className="timeline-description">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cv-button-wrapper">
        <a
            href="/CV-Valentina-Fernandez.pdf"
            download
            className="cv-button"
        >
            Download CV
        </a>
      </div>
    </section>
  );
}
