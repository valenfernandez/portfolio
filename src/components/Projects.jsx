import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <p className="section-label">Work</p>
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
