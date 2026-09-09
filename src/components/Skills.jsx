const skillCategories = [
  {
    label: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java"],
  },
  {
    label: "AI & Machine Learning",
    skills: ["MCP Servers", "Agents", "NLP", "TensorFlow", "scikit-learn", "SpaCy", "Prompt Engineering"],
  },
  {
    label: "Data & Analytics",
    skills: ["Pandas", "NumPy", "Jupyter", "ETL", "Data Analysis", "Matplotlib", "Altair", "Folium"],
  },
  {
    label: "Web Development",
    skills: ["React", "Django", "FastAPI", "HTML", "CSS", "Bootstrap"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["Azure", "AWS", "Oracle Cloud", "CI/CD", "Docker", "ServiceNow", "Git", "Azure DevOps"],
  },
  {
    label: "Databases",
    skills: ["SQL", "PostgreSQL", "SQLite", "Database Design"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-header">
        <p className="section-label">Expertise</p>
        <h2 className="section-title">Skills</h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div key={cat.label} className="skill-category">
            <p className="skill-category-title">{cat.label}</p>
            <div className="skills-pills">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
