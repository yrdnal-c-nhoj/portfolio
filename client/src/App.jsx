import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import Admin from './pages/Admin'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
)

export default App
