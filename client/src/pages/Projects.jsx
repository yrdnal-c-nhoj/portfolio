import { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/projects`)
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
      <div className="flex items-center justify-center min-h-screen page-container bg-slate-700">
        <p className="text-xl text-white">Loading projects...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen page-container bg-slate-700">
        <p className="text-xl text-red-400">Error loading projects: {error}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen page-container bg-slate-700">
      <header className="mb-2 shadow-lg bg-lime-50">
        <div className="header-container">
          <div className="flex items-center justify-between">
            <h1 className="mb-2 text-5xl font-bold font-heading text-heading">John C. Landry</h1>
            <h1 className="mb-2 text-4xl font-bold text-right font-heading text-heading">MERN Stack Portfolio</h1>
          </div>
        </div>
      </header>
      <main className="section-container">
        <section id="projects" className="prose-project">
          <h2 className="mb-3 text-4xl font-medium text-center font-heading text-heading">Projects</h2>
          {projects.length === 0 ? (
            <p className="text-xl text-center text-white">No projects found.</p>
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
