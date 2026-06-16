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

function StormAtmosphere() {
  return (
    <div aria-hidden="true" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      {/* Diagonal lightning rays */}
      <div style={{
        position: 'absolute', top: 0, right: '18%',
        width: '1px', height: '55vh',
        background: 'linear-gradient(to bottom, transparent 0%, rgba(56,184,248,0.12) 40%, rgba(56,184,248,0.06) 75%, transparent 100%)',
        transform: 'rotate(11deg)',
        transformOrigin: 'top right',
      }} />
      <div style={{
        position: 'absolute', top: '22vh', left: '7%',
        width: '1px', height: '32vh',
        background: 'linear-gradient(to bottom, transparent 0%, rgba(56,184,248,0.07) 50%, transparent 100%)',
        transform: 'rotate(-7deg)',
      }} />
      <div style={{
        position: 'absolute', top: '65vh', right: '35%',
        width: '1px', height: '22vh',
        background: 'linear-gradient(to bottom, transparent 0%, rgba(56,184,248,0.05) 50%, transparent 100%)',
        transform: 'rotate(18deg)',
      }} />
      {/* Storm horizon glow */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '50vh',
        background: 'radial-gradient(ellipse at 50% 110%, rgba(56,184,248,0.07) 0%, transparent 60%)',
      }} />
      {/* Top-right charge */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '380px', height: '280px',
        background: 'radial-gradient(ellipse at 100% 0%, rgba(56,184,248,0.05) 0%, transparent 70%)',
      }} />
    </div>
  )
}

function App() {
  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--color-bg)' }}>
      <StormAtmosphere />
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
