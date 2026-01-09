const ProjectCard = ({ project }) => (
  <div className="p-3 bg-gray-300 rounded-lg shadow-md font-body">
    <div>
      <div className="mb-0 text-3xl italic tracking-tighter font-display">{project.title}</div>
      <div className="mb-4 text-lg leading-tight font-body">{project.description}</div>
        <span className="text-xs tracking-wide font-label">TECHNOLOGIES:</span>
        <div className="flex flex-wrap gap-2 mt-0 mb-5">
          {project.tech.map((tech, index) => (
            <span key={index} className="px-2 py-1 text-lg rounded font-body">
              {tech}
            </span>
          ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
         className="btn btn-primary"
       >
          GitHub
        </a>
      </div>
    </div>
  </div>
)

export default ProjectCard
