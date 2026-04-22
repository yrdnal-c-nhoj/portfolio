import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// For development, use local API. For production, consider using a static JSON approach
const API = '/api/projects'

const Admin = () => {
  const [projects, setProjects] = useState([])
  const [form, setForm] = useState({
    title: '', description: '', liveUrl: '', githubUrl: '', tech: ''
  })
  const [editingId, setEditingId] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const load = async () => {
    try {
      const response = await fetch(API)
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      const data = await response.json()
      setProjects(data)
    } catch (error) {
      console.error('Error loading projects:', error)
    }
  }

  useEffect(() => {
    load()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const payload = {
      ...form,
      tech: form.tech.split(',').map(t => t.trim())
    }

    try {
      const url = editingId ? `${API}/${editingId}` : API
      const method = editingId ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      
      await load()
      if (editingId) {
        resetForm()
      } else {
        setForm({ title: '', description: '', liveUrl: '', githubUrl: '', tech: '' })
      }
    } catch (error) {
      console.error('Error saving project:', error)
      alert('Failed to save project. Check console for details.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = (project) => {
    setEditingId(project._id)
    setForm({
      title: project.title,
      description: project.description,
      liveUrl: project.liveUrl || '',
      githubUrl: project.githubUrl || '',
      tech: project.tech.join(', ')
    })
  }

  const resetForm = () => {
    setEditingId(null)
    setForm({ title: '', description: '', liveUrl: '', githubUrl: '', tech: '' })
  }

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        await fetch(`${API}/${id}`, { method: 'DELETE' })
        await load()
      } catch (error) {
        console.error('Error deleting project:', error)
      }
    }
  }

  return (
    <div className="font-body">
      <nav className="p-4">
        <div className="flex justify-between items-center mx-auto max-w-6xl">
          <Link to="/" className="font-bold text-xl">
            ← Back to Portfolio
          </Link>
          <span>Admin Dashboard</span>
        </div>
      </nav>

      <div className="mx-auto px-4 py-8 max-w-6xl">
        <h1 className="mb-12 font-bold text-4xl text-center">Admin Dashboard</h1>

        <div className="mb-8 p-6 rounded-lg">
          <h2 className="mb-6 font-semibold text-2xl">
            {editingId ? 'Edit Project' : 'Add New Project'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-label">Title *</label>
              <input
                className="font-label"
                placeholder="Project Title"
                value={form.title}
                onChange={e => setForm({...form, title: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="font-label">Description *</label>
              <textarea
                className="font-label"
                placeholder="Project Description"
                rows="3"
                value={form.description}
                onChange={e => setForm({...form, description: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="font-label">Live URL</label>
              <input
                className="font-label"
                placeholder="https://..."
                value={form.liveUrl}
                onChange={e => setForm({...form, liveUrl: e.target.value})}
              />
            </div>
            <div>
              <label className="font-label">GitHub URL</label>
              <input
                className="font-label"
                placeholder="https://github.com/..."
                value={form.githubUrl}
                onChange={e => setForm({...form, githubUrl: e.target.value})}
              />
            </div>
            <div>
              <label className="font-label">Technologies (comma separated)</label>
              <input
                className="font-label"
                placeholder="React, Node.js, MongoDB"
                value={form.tech}
                onChange={e => setForm({...form, tech: e.target.value})}
              />
            </div>
            <div className="flex gap-4">
              <button type="submit" disabled={isSubmitting} className="font-label">
                {isSubmitting ? 'Saving...' : (editingId ? 'Update Project' : 'Add Project')}
              </button>
              {editingId && (
                <button type="button" onClick={resetForm} className="font-label">
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div>
          <h2 className="mb-6 font-semibold text-2xl">My Existing Projects ({projects.length})</h2>
          {projects.length === 0 ? (
            <p>No projects yet. Add one above!</p>
          ) : (
            <div className="space-y-4">
              {projects.map(project => (
                <div key={project._id} className="flex justify-between items-center p-4 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <p className="mt-1 text-sm">{project.description.substring(0, 80)}...</p>
                    <div className="flex gap-2 mt-2">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="px-2 py-1 rounded font-label text-xs">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 rounded font-label text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button onClick={() => handleEdit(project)} className="font-label">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(project._id)} className="font-label">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Admin
