# 📝 Project Personal Notes

## 🛡️ Admin Access
To add, edit, or delete projects in your portfolio, navigate to the `/admin` route on your active domain.

*   **Local Admin:** http://localhost:5173/admin
*   **Production Admin:** https://portfolio-sand-mu-xkv3dqgohg.vercel.app/admin
*   **Preview Admin:** https://portfolio-k7acescoa-johns-projects-75897040.vercel.app/admin

## 🏗️ System Architecture & Workflow
The application is a full-stack **MERN** application.

1.  **Database:** Hosted on **MongoDB Atlas**. It stores your project details (titles, descriptions, links, tech stack).
2.  **Backend (API):** A Node.js/Express server. It connects to MongoDB using Mongoose and serves the data through REST endpoints (`/api/projects`).
3.  **Frontend (UI):** A React application built with Vite and Tailwind CSS. It is the visual part that users see.
4.  **Integration:**
    *   The frontend uses the `VITE_API_URL` environment variable to know where your backend is hosted.
    *   **CORS Security:** The backend only accepts requests from the specific URLs listed in the `allowedOrigins` array in `server/server.js`.

## 🚀 Deployment
*   **Frontend:** Hosted on **Vercel**. Every time you push to GitHub, Vercel creates a new "Preview" URL and updates the "Production" URL.
*   **Backend:** Can be hosted on any Node.js provider. Note that you have removed Render-specific "ping" logic, so ensure your new host provides high availability.

*Note: This file is ignored by Git to keep your notes private.*