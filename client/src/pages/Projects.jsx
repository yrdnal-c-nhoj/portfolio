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
        console.error('Failed to fetch projects:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl"> </p>
      </div>
    )
  }

  return (
    <div className="relative p-3 min-h-screen">
      <header className="mb-2 p-1">
        <div>
          <div className="mb-2 font-display text-5xl">John C. Landry</div>
          <div className="mb-3 font-display text-4xl">MERN Stack Portfolio</div>
        </div>
      </header>
      <main>
        <section id="projects">
          {projects.length === 0 ? (
            <p className="text-xl text-center">No projects found.</p>
          ) : (
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
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
