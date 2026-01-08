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
    <div className="text-white bg-gray-900 page-container">
      {/* Navigation */}
      <nav className="p-4 bg-gray-800">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Link to="/" className="text-xl font-bold text-heading hover:text-blue-300">
            ← Back to Portfolio
          </Link>
          <span className="text-gray-400">Admin Dashboard</span>
        </div>
      </nav>

      <div className="max-w-6xl px-4 py-8 mx-auto">
        <h1 className="mb-12 text-4xl font-bold text-center text-heading">Admin Dashboard</h1>

        {/* Add/Edit Form */}
        <div className="p-6 mb-8 bg-gray-800 rounded-lg">
          <h2 className="mb-6 text-2xl font-semibold text-heading">
            {editingId ? 'Edit Project' : 'Add New Project'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="form-label">Title *</label>
              <input
                className="form-input"
                placeholder="Project Title"
                value={form.title}
                onChange={e => setForm({...form, title: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="form-label">Description *</label>
              <textarea
                className="form-input"
                placeholder="Project Description"
                rows="3"
                value={form.description}
                onChange={e => setForm({...form, description: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="form-label">Live URL</label>
              <input
                className="form-input"
                placeholder="https://..."
                value={form.liveUrl}
                onChange={e => setForm({...form, liveUrl: e.target.value})}
              />
            </div>
            <div>
              <label className="form-label">GitHub URL</label>
              <input
                className="form-input"
                placeholder="https://github.com/..."
                value={form.githubUrl}
                onChange={e => setForm({...form, githubUrl: e.target.value})}
              />
            </div>
            <div>
              <label className="form-label">Technologies (comma separated)</label>
              <input
                className="form-input"
                placeholder="React, Node.js, MongoDB"
                value={form.tech}
                onChange={e => setForm({...form, tech: e.target.value})}
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="btn-primary"
              >
                {editingId ? 'Update Project' : 'Add Project'}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Projects List */}
        <div>
          <h2 className="mb-6 text-2xl font-semibold text-heading">Existing Projects ({projects.length})</h2>
          {projects.length === 0 ? (
            <p className="text-gray-400">No projects yet. Add one above!</p>
          ) : (
            <div className="space-y-4">
              {projects.map(project => (
                <div key={project._id} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-heading">{project.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">{project.description.substring(0, 80)}...</p>
                    <div className="flex gap-2 mt-2">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="card-tech-badge">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-xs text-gray-400 bg-gray-700 rounded">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => handleEdit(project)}
                      className="btn-warning"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="btn-danger"
                    >
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
