import { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setProjects(data)
      } catch (err) {
        setError(err.message)
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

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Error loading projects: {error}</p>
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
