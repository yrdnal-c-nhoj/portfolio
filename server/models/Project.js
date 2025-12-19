import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  liveUrl: String,
  githubUrl: String,
  tech: [String]
})

export default mongoose.model('Project', projectSchema)
