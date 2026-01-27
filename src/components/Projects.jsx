import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" class="section">
      <h2>Projects</h2>
      <div class="project-grid">
          {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
      </div>

      {/* 
      between {} -> javascript
      projects.map(...) takes the array of projects and returns a new array  [1, 2, 3].map(n => n * 2); // → [2, 4, 6]
      for each item (... is a spread operator “Take everything inside this thing and expand it here.”)
       */}
    </section>
  );
}

export default Projects;