const API_URL = import.meta.env.VITE_API_URL || '/api'

// Utility functions for managing project data
export const getProjects = async () => {
  try {
    const response = await fetch(`${API_URL}/projects`)
    if (!response.ok) throw new Error('Failed to fetch projects')
    return await response.json()
  } catch (error) {
    console.error('Error fetching projects:', error)
    // Fallback to static data if API fails
    const { default: projectsData } = await import('../projects.json')
    return projectsData
  }
}

export const getProjectById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/projects/${id}`)
    if (!response.ok) throw new Error('Failed to fetch project')
    return await response.json()
  } catch (error) {
    console.error('Error fetching project:', error)
    const { default: projectsData } = await import('../projects.json')
    return projectsData.find(project => project._id === id)
  }
}

export const getProjectsByTech = async (tech) => {
  const projects = await getProjects()
  return projects.filter(project =>
    project.tech.some(t => t.toLowerCase().includes(tech.toLowerCase()))
  )
}
