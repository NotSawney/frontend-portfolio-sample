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

function BackgroundOrbs() {
  return (
    <div aria-hidden="true" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <div style={{
        position: 'absolute', top: '-10%', left: '15%',
        width: '800px', height: '800px', borderRadius: '50%',
        background: 'radial-gradient(circle at center, rgba(99,102,241,0.14) 0%, transparent 60%)',
      }} />
      <div style={{
        position: 'absolute', top: '55vh', right: '5%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle at center, rgba(34,211,238,0.07) 0%, transparent 60%)',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '25%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle at center, rgba(139,92,246,0.08) 0%, transparent 60%)',
      }} />
    </div>
  )
}

function App() {
  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--color-bg)' }}>
      <BackgroundOrbs />
      <div style={{ position: 'relative', zIndex: 1 }}>
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
    </div>
  )
}

export default App
