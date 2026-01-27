function ProjectCard({ title, description, tech, repo }) {
  return (
    <a
      href={repo}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{tech}</span>
    </a>
  );
}

export default ProjectCard;