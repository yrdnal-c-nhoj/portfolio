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
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-800 shadow-lg">
        <div className="px-4 py-6 mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-blue-400">John C. Landry</h1>
            <h1 className="text-3xl font-bold text-right text-blue-400">MERN Stack Portfolio</h1>
          </div>
        </div>
      </header>
      <main className="px-4 py-8 mx-auto max-w-7xl">
        <section id="projects">
          <h2 className="mb-12 text-4xl font-bold text-center text-white">Projects</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(p => (
              <ProjectCard key={p._id} project={p} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Projects
