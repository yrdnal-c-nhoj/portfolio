const ProjectCard = ({ project }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>

      <div className="mb-4">
        <span className="text-sm font-medium text-gray-400">Technologies:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.tech.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-700 text-gray-200 text-xs rounded">
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
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200"
        >
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors duration-200"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
)

export default ProjectCard
