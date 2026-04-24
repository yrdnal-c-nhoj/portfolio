import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Projects from './pages/Projects';
import Admin from './pages/Admin';
import { Analytics } from '@vercel/analytics/react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Projects />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  );
};

export default App;
