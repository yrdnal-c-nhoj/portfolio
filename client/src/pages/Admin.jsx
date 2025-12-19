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
    <>
      <h1>Admin Dashboard</h1>

      <form onSubmit={submit}>
        <input placeholder="Title" onChange={e => setForm({...form,title:e.target.value})} />
        <input placeholder="Description" onChange={e => setForm({...form,description:e.target.value})} />
        <input placeholder="Live URL" onChange={e => setForm({...form,liveUrl:e.target.value})} />
        <input placeholder="GitHub URL" onChange={e => setForm({...form,githubUrl:e.target.value})} />
        <input placeholder="Tech (comma separated)" onChange={e => setForm({...form,tech:e.target.value})} />
        <button>Add Project</button>
      </form>

      <hr />

      {projects.map(p => (
        <div key={p._id}>
          {p.title}
          <button onClick={() => remove(p._id)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default Admin
