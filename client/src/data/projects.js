import projectsData from '../projects.json'

// Utility functions for managing project data
export const getProjects = () => {
  return projectsData
}

export const getProjectById = (id) => {
  return projectsData.find(project => project._id === id)
}

export const getProjectsByTech = (tech) => {
  return projectsData.filter(project => 
    project.tech.some(t => t.toLowerCase().includes(tech.toLowerCase()))
  )
}

// For future: If you want to add admin functionality without a backend
// you could implement these functions to work with localStorage
export const saveProjects = (projects) => {
  localStorage.setItem('projects', JSON.stringify(projects))
}

export const loadProjectsFromStorage = () => {
  const stored = localStorage.getItem('projects')
  return stored ? JSON.parse(stored) : projectsData
}
