import Projects from './pages/Projects'
// import Admin from './pages/Admin'

const App = () => (
  <div className="min-h-screen bg-gray-900 text-white">
    <header className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <h1 className="text-3xl font-bold text-blue-400">John C. Landry</h1>
          <h1 className="text-3xl font-bold text-blue-400 text-right">MERN Stack Portfolio</h1>
          {/* <nav className="space-x-4">
            <a href="#home" className="text-gray-300 hover:text-white">Home</a>
            <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
            <a href="#admin" className="text-gray-300 hover:text-white">Admin</a>
          </nav> */}
        </div>
      </div>
    </header>
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Projects />
      {/* <Admin /> */}
    </main>
  </div>
)

export default App
