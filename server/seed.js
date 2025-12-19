import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Project from './models/Project.js'

dotenv.config()

await mongoose.connect(process.env.MONGO_URI)

await Project.deleteMany()

await Project.insertMany([
  {
    title: 'Cubist Heart',
    description: 'Creative visual website with strong UI/UX and animation focus.',
    liveUrl: 'https://www.cubistheart.com/',
    githubUrl: 'https://github.com/yourname/cubistheart',
    tech: ['React', 'CSS', 'UI/UX']
  },
  {
    title: 'MERN Todo App',
    description: 'Full MERN CRUD application with MongoDB persistence.',
    liveUrl: 'https://mern-todo-dun.vercel.app/',
    githubUrl: 'https://github.com/yourname/mern-todo',
    tech: ['MongoDB', 'Express', 'React', 'Node']
  },
  {
    title: 'NASA Picture of the Day',
    description: 'API-driven React app using NASA’s public API.',
    liveUrl: 'https://nasapod-five.vercel.app/',
    githubUrl: 'https://github.com/yourname/nasa-pod',
    tech: ['React', 'REST API']
  },
  {
    title: 'Employee Database',
    description: 'Employee management system with backend data handling.',
    liveUrl: 'https://employee-database-mu.vercel.app/',
    githubUrl: 'https://github.com/yourname/employee-db',
    tech: ['MongoDB', 'Express', 'React', 'Node']
  }
])

console.log('✅ Projects seeded')
process.exit()
