const ProjectCard = ({ project }) => (
  <div style={{
    border: '1px solid #444',
    padding: '1rem',
    marginBottom: '1rem'
  }}>
    <h2>{project.title}</h2>
    <p>{project.description}</p>

    <p>
      <strong>Tech:</strong> {project.tech.join(', ')}
    </p>

    <a href={project.liveUrl} target="_blank">Live</a>
    {' | '}
    <a href={project.githubUrl} target="_blank">GitHub</a>
  </div>
)

export default ProjectCard
