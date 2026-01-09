const ProjectCard = ({ project }) => (
  <div className="p-3 bg-gray-300 rounded-lg shadow-md font-body">
    <div>
      <div className="mb-2 text-xl font-display">{project.title}</div>
      <div className="mb-4 font-body">{project.description}</div>
      <div className="mb-4">
        <span className="text-xs font-label">TECHNOLOGIES:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.tech.map((tech, index) => (
            <span key={index} className="px-2 py-1 text-xs rounded font-body">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-medium transition-colors rounded bg-gray-50 hover:bg-blue-700 font-label"
        >
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-medium transition-colors rounded bg-gray-50 hover:bg-gray-600 font-label"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
)

export default ProjectCard
