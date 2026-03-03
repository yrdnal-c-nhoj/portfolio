# MERN Stack Portfolio

A full-stack developer portfolio application built with MongoDB, Express, React, and Node.js. This project showcases web development projects with a modern, responsive design and includes an admin dashboard for content management.

## 🚀 Features

- **Project Portfolio**: Display your web development projects with descriptions, tech stacks, and live links
- **Admin Dashboard**: Secure admin interface for CRUD operations on projects
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Real-time Updates**: Instant project management with database persistence
- **Modern Stack**: Built with the latest MERN stack technologies
- **Deployment Ready**: Configured for production deployment on Vercel (frontend) and Render (backend)

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework with hooks
- **React Router 7** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Tailwind Typography** - Beautiful typography plugin

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for API
- **MongoDB** - NoSQL database with Mongoose ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Development Tools
- **Nodemon** - Auto-restart server during development
- **Concurrently** - Run multiple scripts simultaneously

## 📁 Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   └── App.jsx        # Main app component
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
├── server/                # Node.js backend
│   ├── config/           # Database configuration
│   ├── controllers/      # Route controllers
│   ├── routes/           # API routes
│   ├── .env             # Environment variables
│   └── server.js        # Server entry point
├── .github/              # GitHub workflows
├── render.yaml           # Render deployment config
└── package.json          # Root package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account (for cloud database)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install client dependencies
   cd client && npm install
   
   # Install server dependencies
   cd ../server && npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the `server/` directory:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   PORT=5001
   ```
   
   Get your MongoDB connection string from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

4. **Start Development Servers**
   
   **Option 1: Run both servers concurrently**
   ```bash
   npm run dev
   ```
   
   **Option 2: Run servers separately**
   ```bash
   # Terminal 1 - Backend server
   cd server && npm run dev
   
   # Terminal 2 - Frontend server
   cd client && npm run dev
   ```

5. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5001
   - Admin Dashboard: http://localhost:5173/admin

## 📖 API Documentation

### Endpoints

#### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

#### Health Check
- `GET /ping` - Keep-alive endpoint for monitoring services

### Project Schema

```javascript
{
  "title": "string (required)",
  "description": "string (required)",
  "liveUrl": "string (optional)",
  "githubUrl": "string (optional)",
  "tech": ["string"] // Array of technologies
}
```

## 🎨 Admin Dashboard

The admin dashboard provides full CRUD functionality for managing projects:

1. **Access**: Navigate to `/admin` in your browser
2. **Features**:
   - Add new projects with title, description, URLs, and tech stack
   - Edit existing projects
   - Delete projects with confirmation
   - Real-time project list updates

### Security Note
⚠️ **Important**: The admin dashboard is currently not protected by authentication. In production, consider implementing:
- JWT authentication
- Role-based access control
- Environment-based admin access

## 🚀 Deployment

### Frontend (Vercel)

1. **Connect to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Environment Variables**
   - Set `VITE_API_URL` to your backend URL in Vercel dashboard

### Backend (Render)

1. **Create `render.yaml`**
   ```yaml
   services:
     - type: web
       name: portfolio-backend
       env: node
       buildCommand: npm install
       startCommand: npm start
       envVars:
         - key: PORT
           value: 10000
         - key: MONGODB_URI
           value: mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

2. **Connect GitHub Repository**
   - Link your GitHub repo to Render
   - Deploy automatically on push to main branch

### Database (MongoDB Atlas)

1. **Create Cluster**
   - Sign up for [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free cluster
   - Get connection string

2. **Network Access**
   - Add your IP address for local development
   - Add Render/Vercel IP ranges for production

## 🔧 Configuration

### Environment Variables

#### Server (.env)
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
```

#### Client (.env)
```env
VITE_API_URL=http://localhost:5001  # For local development
VITE_API_URL=https://your-backend.onrender.com  # For production
```

### CORS Configuration

The server is configured to accept requests from:
- `http://localhost:5173` (local development)
- `http://localhost:3000` (alternative local port)
- `https://your-vercel-app.vercel.app` (production)

Add your production URL to the `allowedOrigins` array in `server/server.js`.

## 🔄 Development Workflow

### Adding New Features

1. **Backend Changes**
   - Update API routes in `server/routes/`
   - Modify controllers in `server/controllers/`
   - Test with Postman or curl

2. **Frontend Changes**
   - Create components in `client/src/components/`
   - Add pages in `client/src/pages/`
   - Update routing in `client/src/App.jsx`

### Code Style

- Use ES6+ syntax and modules
- Follow React hooks best practices
- Implement proper error handling
- Use semantic HTML5 elements
- Follow Tailwind CSS conventions

## 🐛 Troubleshooting

### Common Issues

1. **"Failed to fetch" Error**
   - Ensure both servers are running
   - Check CORS configuration
   - Verify API URLs in environment variables

2. **Database Connection Issues**
   - Verify MongoDB connection string
   - Check IP whitelist in MongoDB Atlas
   - Ensure environment variables are set

3. **Build Errors**
   - Clear node_modules and reinstall
   - Check for dependency conflicts
   - Verify Node.js version compatibility

### Debug Commands

```bash
# Check running processes
lsof -i :5001  # Backend
lsof -i :5173  # Frontend

# Test API endpoints
curl http://localhost:5001/api/projects

# Test database connection
mongosh "your_connection_string" --eval "db.projects.find()"
```

## 📝 Scripts

### Root Package Scripts
- `npm start` - Start production server
- `npm run dev` - Run both frontend and backend in development
- `npm run build` - Build client for production

### Server Scripts
- `npm start` - Start server with Node.js
- `npm run dev` - Start server with Nodemon (auto-restart)

### Client Scripts
- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for database hosting
- [Vercel](https://vercel.com/) for frontend deployment
- [Render](https://render.com/) for backend hosting
- [Tailwind CSS](https://tailwindcss.com/) for the CSS framework
- [React](https://reactjs.org/) for the frontend framework

## 📞 Contact

John C. Landry - [Portfolio](https://portfolio-sand-mu-xkv3dqgohg.vercel.app/) - [GitHub](https://github.com/yrdnal-c-nhoj)

---

**Built with ❤️ using the MERN stack**
