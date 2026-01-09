import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL + '/projects'

const Admin = () => {
  const [projects, setProjects] = useState([])
  const [form, setForm] = useState({
    title: '', description: '', liveUrl: '', githubUrl: '', tech: ''
  })
  const [editingId, setEditingId] = useState(null)

  const load = () =>
    fetch(API).then(r => r.json()).then(setProjects)

  useEffect(() => {
    load()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      ...form,
      tech: form.tech.split(',').map(t => t.trim())
    }

    if (editingId) {
      fetch(API + '/' + editingId, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then(() => {
        load()
        resetForm()
      })
    } else {
      fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then(load)
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

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this project?')) {
      fetch(API + '/' + id, { method: 'DELETE' }).then(load)
    }
  }

  return (
    <div className="font-body">
      <nav className="p-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Link to="/" className="text-xl font-bold">
            ← Back to Portfolio
          </Link>
          <span>Admin Dashboard</span>
        </div>
      </nav>

      <div className="max-w-6xl px-4 py-8 mx-auto">
        <h1 className="mb-12 text-4xl font-bold text-center">Admin Dashboard</h1>

        <div className="p-6 mb-8 rounded-lg">
          <h2 className="mb-6 text-2xl font-semibold">
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
              <button type="submit" className="font-label">
                {editingId ? 'Update Project' : 'Add Project'}
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
          <h2 className="mb-6 text-2xl font-semibold">Existing Projects ({projects.length})</h2>
          {projects.length === 0 ? (
            <p>No projects yet. Add one above!</p>
          ) : (
            <div className="space-y-4">
              {projects.map(project => (
                <div key={project._id} className="flex items-center justify-between p-4 rounded-lg">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="mt-1 text-sm">{project.description.substring(0, 80)}...</p>
                    <div className="flex gap-2 mt-2">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="px-2 py-1 text-xs rounded font-label">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded font-label">
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
