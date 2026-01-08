import { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/projects')
      .then(res => res.json())
      .then(setProjects)
  }, [])

  return (
    <section id="projects" className="py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(p => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
    </section>
  )
}

export default Projects
