import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_API_URL + '/projects'

const Admin = () => {
  const [projects, setProjects] = useState([])
  const [form, setForm] = useState({
    title: '', description: '', liveUrl: '', githubUrl: '', tech: ''
  })

  const load = () =>
    fetch(API).then(r => r.json()).then(setProjects)

  useEffect(() => {
    load()
  }, [])

  const submit = e => {
    e.preventDefault()
    fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        tech: form.tech.split(',')
      })
    }).then(load)
  }

  const remove = id =>
    fetch(API + '/' + id, { method: 'DELETE' }).then(load)

  return (
    <section id="admin" className="py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-400">Admin Dashboard</h1>

      <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-white">Add New Project</h2>
        <form onSubmit={submit} className="space-y-4">
          <input
            className="w-full px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
            placeholder="Title"
            onChange={e => setForm({...form,title:e.target.value})}
          />
          <input
            className="w-full px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
            placeholder="Description"
            onChange={e => setForm({...form,description:e.target.value})}
          />
          <input
            className="w-full px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
            placeholder="Live URL"
            onChange={e => setForm({...form,liveUrl:e.target.value})}
          />
          <input
            className="w-full px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
            placeholder="GitHub URL"
            onChange={e => setForm({...form,githubUrl:e.target.value})}
          />
          <input
            className="w-full px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
            placeholder="Tech (comma separated)"
            onChange={e => setForm({...form,tech:e.target.value})}
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors duration-200">
            Add Project
          </button>
        </form>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-white">Existing Projects</h2>
        <div className="space-y-4">
          {projects.map(p => (
            <div key={p._id} className="bg-gray-800 rounded-lg p-4 flex justify-between items-center">
              <span className="text-white">{p.title}</span>
              <button
                onClick={() => remove(p._id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors duration-200"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Admin
