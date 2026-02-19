import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import projectRoutes from './routes/projectRoutes.js'

dotenv.config()
connectDB()

const app = express()

// REPLACE YOUR OLD app.use(cors()) WITH THIS:
app.use(cors({
  origin: 'https://your-portfolio.vercel.app', // <-- CHANGE THIS to your actual Vercel URL
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json())

app.use('/api/projects', projectRoutes)

app.get('/', (req, res) => {
  res.send('API Running')
})

const PORT = process.env.PORT || 10000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});