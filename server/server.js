import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import projectRoutes from './routes/projectRoutes.js';

dotenv.config();
connectDB();

const app = express();

// CORS configuration
const allowedOrigins = [
  'https://portfolio-sand-mu-xkv3dqgohg.vercel.app',
  'http://localhost:5173',
  'http://localhost:3000',
];

app.use(cors({
  origin: (origin, callback) => {
    // !origin allows UptimeRobot and tools like Postman to connect
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log(`CORS rejected origin: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// --- ROUTES ---

// 1. Existing Project Routes
app.use('/api/projects', projectRoutes);

// 2. Main API Entry Point
app.get('/', (req, res) => {
  res.send('API Running');
});

// 3. The Keep-Alive Ping Route for UptimeRobot
app.get('/ping', (req, res) => {
  console.log('Keep-alive ping received at:', new Date().toISOString());
  res.status(200).send("I am awake!");
});

// --- SERVER SETUP ---

const PORT = process.env.PORT || 10000;

// Important: Use 0.0.0.0 for Render to ensure it binds correctly
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});