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
    <div className="relative min-h-screen p-3 page-container bg-slate-700 ">
      <div className="absolute border-transparent pointer-events-none" />
      <header className="mb-2 ">
        <div className="header-container">
          <div className="flex items-center justify-between">
            <div className="text-5xl text-left pagetop">John C. Landry</div> 
            <div className="flex flex-col -space-y-1 text-2xl text-right">
              <span className="pagetop">MERN Stack</span>
              <span className="pagetop">Portfolio</span>
            </div>
          </div>
        </div>
      </header>
      <main className="section-container">
        <section id="projects" className="prose-project">
          <div className='flex justify-center text-xl pagetop'>Projects</div>
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
