const ProjectCard = ({ project }) => (
  <div className="p-3 card bg-slate-950">
    <div className="card-header">
      <div className="project-title">{project.title}</div>
      <div className="project-description">{project.description}</div>
      <div className="mb-4">
        <span className="card-tech-label">Technologies:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.tech.map((tech, index) => (
            <span key={index} className="card-tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex space-x-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
)

export default ProjectCard
