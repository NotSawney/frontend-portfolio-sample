import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.32, 0.72, 0, 1]

export default function Navbar({ data }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const pillBg = scrolled
    ? 'rgba(5, 5, 5, 0.88)'
    : 'rgba(5, 5, 5, 0.55)'

  return (
    <>
      {/* Floating pill navbar */}
      <header
        style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          background: pillBg,
          border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: '9999px',
          padding: '6px 6px 6px 22px',
          display: 'flex',
          alignItems: 'center',
          gap: '28px',
          maxWidth: 'calc(100vw - 40px)',
          transition: 'background 0.4s ease',
        }}
      >
        {/* Brand */}
        <a href="#hero" style={{ textDecoration: 'none', color: 'var(--color-heading)', fontWeight: 700, fontSize: '16px', letterSpacing: '-0.3px', flexShrink: 0 }}>
          {data.brand}
        </a>

        {/* Desktop links */}
        <nav style={{ display: 'flex', gap: '20px' }} className="hidden md:flex">
          {data.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: 'rgba(255,255,255,0.45)',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.target.style.color = 'rgba(255,255,255,0.9)')}
              onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.45)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA — button-in-button */}
        <button
          className="hidden md:flex"
          style={{
            background: 'var(--color-primary)',
            border: 'none',
            borderRadius: '9999px',
            padding: '9px 10px 9px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            flexShrink: 0,
            transition: 'transform 0.3s cubic-bezier(0.32,0.72,0,1)',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(0.97)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.95)')}
          onMouseUp={e => (e.currentTarget.style.transform = 'scale(0.97)')}
        >
          <span style={{ color: '#fff', fontSize: '13px', fontWeight: 600, whiteSpace: 'nowrap' }}>
            {data.cta}
          </span>
          <span style={{
            width: '26px', height: '26px', borderRadius: '50%',
            background: 'rgba(0,0,0,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '13px', color: '#fff',
          }}>
            →
          </span>
        </button>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setOpen(!open)}
          style={{
            width: '38px', height: '38px',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            position: 'relative',
            flexShrink: 0,
          }}
          aria-label="Toggle menu"
        >
          <motion.span
            style={{ display: 'block', width: 16, height: 1.5, background: '#fafafa', borderRadius: 2, position: 'absolute' }}
            animate={{ rotate: open ? 45 : 0, y: open ? 0 : -4 }}
            transition={{ duration: 0.3, ease }}
          />
          <motion.span
            style={{ display: 'block', width: 16, height: 1.5, background: '#fafafa', borderRadius: 2, position: 'absolute' }}
            animate={{ rotate: open ? -45 : 0, y: open ? 0 : 4 }}
            transition={{ duration: 0.3, ease }}
          />
        </button>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99,
              backdropFilter: 'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)',
              background: 'rgba(5,5,5,0.92)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '12px',
            }}
          >
            {data.links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 + i * 0.07, ease }}
                style={{
                  fontSize: '32px', fontWeight: 700,
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  letterSpacing: '-0.5px',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 + data.links.length * 0.07, ease }}
              onClick={() => setOpen(false)}
              style={{
                marginTop: '24px',
                background: 'var(--color-primary)',
                border: 'none',
                borderRadius: '9999px',
                padding: '14px 32px',
                fontSize: '16px', fontWeight: 600,
                color: '#fff', cursor: 'pointer',
              }}
            >
              {data.cta}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
