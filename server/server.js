import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import projectRoutes from './routes/projectRoutes.js'

dotenv.config()
connectDB()

const app = express()

// Update this with your actual Vercel URL!
app.use(cors({
  origin: 'https://your-portfolio.vercel.app', 
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json())

app.use('/api/projects', projectRoutes)

app.get('/', (req, res) => {
  res.send('API Running')
})

// Render provides a PORT environment variable. 
// We MUST use it, or the Health Check will fail.
const PORT = process.env.PORT || 10000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});