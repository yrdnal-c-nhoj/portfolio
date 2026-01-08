import Projects from './Projects'

const Home = () => (
  <section id="home" className="py-12">
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold text-blue-400 mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        I'm a MERN stack developer passionate about creating modern web applications.
        Here are some of my recent projects.
      </p>
    </div>
    <Projects />
  </section>
)

export default Home
