const skills = [
  "Python",
  "Machine Learning",
  "NLP",
  "CSS",
  "HTML",
  "Git",
  "Azure",
  "AWS",
  "DevOps",
  "Cloud Architecture",
  "AI Research",
  "JavaScript",
  "React",
  "Django",
  "SQL",
  "ServiceNow"
];

function Skills() {
  return (
    <section id = "skills" className="section">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;