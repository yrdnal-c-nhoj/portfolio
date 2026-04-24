import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Projects from './pages/Projects';
import Admin from './pages/Admin';
import TypographyPreview from './components/TypographyPreview';
import { Analytics } from "@vercel/analytics/next"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Projects />,
  },
  {
    path: "/typography",
    element: <TypographyPreview />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
