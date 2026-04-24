import Project from '../models/Project.js'

export const getProjects = async (_, res) => {
  try {
    const projects = await Project.find()
    res.json(projects)
  } catch (error) {
    console.error('Error getting projects:', error)
    res.status(500).json({ error: error.message })
  }
}

export const createProject = async (req, res) => {
  try {
    console.log('Creating project with data:', req.body)
    const project = await Project.create(req.body)
    res.status(201).json(project)
  } catch (error) {
    console.error('Error creating project:', error)
    res.status(500).json({ error: error.message })
  }
}

export const updateProject = async (req, res) => {
  try {
    console.log('Updating project:', req.params.id, 'with data:', req.body)
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }
    res.json(project)
  } catch (error) {
    console.error('Error updating project:', error)
    res.status(500).json({ error: error.message })
  }
}

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id)
    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }
    res.json({ message: 'Deleted' })
  } catch (error) {
    console.error('Error deleting project:', error)
    res.status(500).json({ error: error.message })
  }
}
