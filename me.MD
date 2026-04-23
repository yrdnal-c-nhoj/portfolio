# 📝 Project Personal Notes

## 🛡️ Admin Access
To add, edit, or delete projects in your portfolio, you need to access the Admin Dashboard.
*   **URL:** Navigate to the `/admin` route on your domain (e.g., `http://localhost:5173/admin` for local development).
*   **Functionality:** This route is handled in `client/src/App.jsx`. It provides a user interface to perform CRUD (Create, Read, Update, Delete) operations on your project data.

## 🏗️ System Architecture & Workflow
The application is built using the **MERN** stack (MongoDB, Express, React, Node.js).

### How it works:
1.  **Database:** Your project data is stored in **MongoDB Atlas**. This is a cloud-based database that holds the titles, descriptions, tech stacks, and links for your portfolio.
2.  **Backend (API):** A Node.js server using the Express framework. It connects to MongoDB via Mongoose. It acts as the "brain," receiving requests from your website, verifying permissions, and talking to the database.
3.  **Frontend (UI):** A React application built with Vite and Tailwind CSS. It is the visual part users interact with. It fetches data from your backend API to display your projects dynamically.
4.  **Integration:** 
    *   The frontend uses an environment variable (`VITE_API_URL`) to know exactly where the backend is located.
    *   During development, the root `package.json` uses `concurrently` to run both the frontend and backend servers at the same time with a single command: `npm run dev`.

### Deployment:
The project is designed to be split. The frontend is hosted on **Vercel** (which is optimized for React/Vite), and the backend can be hosted on any Node.js-compatible environment.

---
*Note: This file is ignored by Git (via .gitignore) to keep your private notes out of the public repository.*