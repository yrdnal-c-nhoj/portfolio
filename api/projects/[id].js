import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tech: [{ type: String }],
  liveUrl: { type: String },
  githubUrl: { type: String }
})

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema)

export async function PUT(req, { params }) {
  try {
    if (!mongoose.connection.readyState) {
      await mongoose.connect(process.env.MONGODB_URI)
    }
    const body = await req.json()
    const project = await Project.findByIdAndUpdate(params.id, body, { new: true })
    if (!project) {
      return Response.json({ error: 'Project not found' }, { status: 404 })
    }
    return Response.json(project)
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(req, { params }) {
  try {
    if (!mongoose.connection.readyState) {
      await mongoose.connect(process.env.MONGODB_URI)
    }
    const project = await Project.findByIdAndDelete(params.id)
    if (!project) {
      return Response.json({ error: 'Project not found' }, { status: 404 })
    }
    return Response.json({ message: 'Deleted' })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
