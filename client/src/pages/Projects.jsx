import { useEffect, useState } from 'react'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/projects')
      .then(res => res.json())
      .then(setProjects)
  }, [])

  return (
    <div>
      {projects.map(p => (
        <div key={p._id}>
          <h2>{p.title}</h2>
          <p>{p.description}</p>
          <a href={p.liveUrl}>Live</a> | <a href={p.githubUrl}>GitHub</a>
        </div>
      ))}
    </div>
  )
}

export default Projects
