const ProjectCard = ({ project }) => (
  <div className="bg-gray-300 shadow-md p-3 rounded-lg font-body">
    <div className="mb-0 font-display text-3xl italic tracking-tighter">{project.title}</div>
    <div className="mb-4 font-body text-lg leading-tight">{project.description}</div>
    <span className="font-label text-xs tracking-wide">TECHNOLOGIES:</span>
    <div className="flex flex-wrap gap-2 mt-0 mb-5">
      {project.tech.map((tech, index) => (
        <span key={index} className="px-2 py-1 rounded font-body text-lg">
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
)

export default ProjectCard
