import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import About from './components/sections/About'
import Team from './components/sections/Team'
import Testimonials from './components/sections/Testimonials'
import CallToAction from './components/sections/CallToAction'
import { themes } from './data/content'

const content = themes.saas

function App() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)' }}>
      <Navbar data={content.nav} />
      <main>
        <Hero data={content.hero} />
        <Features data={content.features} />
        <About data={content.about} />
        <Team data={content.team} />
        <Testimonials data={content.testimonials} />
        <CallToAction data={content.cta} />
      </main>
      <Footer data={content.footer} />
    </div>
  )
}

export default App
