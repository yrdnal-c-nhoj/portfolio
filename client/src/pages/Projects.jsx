import { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  const API_URL = import.meta.env.VITE_API_URL || '/api'

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_URL}/projects`)
        const data = await response.json()
        setProjects(data)
      } catch (error) {
        console.error('Failed to these fetch projects:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl"> </p>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen p-3">
      <header className="p-1 mb-2">
        <div>
          <div className="mb-2 text-5xl font-display">John C. Landry</div>
          <div className="mb-3 text-4xl font-display">MERN Stack Portfolio</div>
        </div>
      </header>
      <main>
        <section id="projects">
          {projects.length === 0 ? (
            <p className="text-xl text-center">No projects found.</p>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default Projects
