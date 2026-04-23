# Portfolio

A full-stack portfolio application showcasing web development projects.

## Live Demo

- **Frontend:** https://portfolio-sand-mu-xkv3dqgohg.vercel.app/

## Tech Stack

| Frontend | Backend |
|----------|---------|
| React 18 | Node.js |
| React Router | Express |
| Vite | MongoDB |
| Tailwind CSS | Mongoose |

## Quick Start

```bash
# Clone and install
git clone https://github.com/yrdnal-c-nhoj/portfolio.git
cd portfolio
npm install && cd client && npm install && cd ../server && npm install

# Set up environment
cp server/.env.example server/.env
# Edit server/.env with your MongoDB URI

# Run development
npm run dev
```

## Environment Variables

**Server** (`server/.env`)
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
```

**Client** (`client/.env`)
```env
VITE_API_URL=http://localhost:5001/api
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| POST | `/api/projects` | Create project |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |

## Deployment

### Frontend (Vercel)
```bash
cd client
vercel --prod
```
Set `VITE_API_URL` to your API URL in the Vercel dashboard.

---

Built with the MERN stack
