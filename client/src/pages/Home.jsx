import Projects from './Projects'

const Home = () => (
  <section id="home" className="py-12">
    <div className="mb-12 text-center">
      <h1 className="mb-4 text-5xl font-bold text-blue-400">Welcome to My Portfolio</h1>
      <p className="max-w-2xl mx-auto text-xl text-gray-300">
        I'm a MERN stack developer.
        Here are some of my recent projects.
      </p>
    </div>
    <Projects />
  </section>
)

export default Home
