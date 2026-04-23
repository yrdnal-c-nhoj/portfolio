// api / projects.js

import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tech: [{ type: String }],
  liveUrl: { type: String },
  githubUrl: { type: String }
})

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema)

export async function GET(req) {
  try {
    if (!mongoose.connection.readyState) {
      await mongoose.connect(process.env.MONGODB_URI)
    }
    const projects = await Project.find()
    return Response.json(projects)
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    if (!mongoose.connection.readyState) {
      await mongoose.connect(process.env.MONGODB_URI)
    }
    const body = await req.json()
    const project = await Project.create(body)
    return Response.json(project, { status: 201 })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
