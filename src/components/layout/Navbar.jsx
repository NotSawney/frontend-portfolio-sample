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

  const pillBg = scrolled ? 'rgba(6,10,26,0.92)' : 'rgba(6,10,26,0.65)'

  return (
    <>
      <header style={{
        position: 'fixed', top: '20px', left: '50%',
        transform: 'translateX(-50%)', zIndex: 100,
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        background: pillBg,
        border: '1px solid rgba(56,184,248,0.14)',
        borderRadius: '3px',
        padding: '6px 6px 6px 22px',
        display: 'flex', alignItems: 'center', gap: '28px',
        maxWidth: 'calc(100vw - 40px)',
        transition: 'background 0.4s ease',
      }}>
        <a href="#hero" style={{
          textDecoration: 'none', color: 'var(--color-heading)',
          fontWeight: 700, fontSize: '15px', letterSpacing: '0.12em',
          textTransform: 'uppercase', flexShrink: 0,
          fontFamily: 'var(--font-display)',
        }}>
          {data.brand}
        </a>

        <nav className="hidden md:flex" style={{ gap: '20px', alignItems: 'center' }}>
          {data.links.map((link) => (
            <a key={link.label} href={link.href} style={{
              color: 'rgba(220,232,244,0.4)', fontSize: '12px', fontWeight: 500,
              textDecoration: 'none', whiteSpace: 'nowrap', letterSpacing: '0.08em',
              textTransform: 'uppercase', fontFamily: 'var(--font-mono)',
              transition: 'color 0.2s ease',
            }}
              onMouseEnter={e => (e.target.style.color = 'rgba(56,184,248,0.9)')}
              onMouseLeave={e => (e.target.style.color = 'rgba(220,232,244,0.4)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button className="hidden md:flex items-center" style={{
          background: 'var(--color-primary)', border: 'none',
          borderRadius: '2px', padding: '9px 20px',
          gap: '10px', cursor: 'pointer', flexShrink: 0,
          transition: 'background 0.2s ease, transform 0.2s ease',
          fontFamily: 'var(--font-mono)',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary-hover)'; e.currentTarget.style.transform = 'scale(0.97)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.transform = 'scale(1)' }}
          onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.95)')}
          onMouseUp={e => (e.currentTarget.style.transform = 'scale(0.97)')}
        >
          <span style={{ color: '#060a1a', fontSize: '12px', fontWeight: 700, whiteSpace: 'nowrap', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {data.cta}
          </span>
        </button>

        <button
          className="flex md:hidden items-center justify-center relative"
          onClick={() => setOpen(!open)}
          style={{
            width: '36px', height: '36px',
            border: '1px solid rgba(56,184,248,0.18)',
            borderRadius: '2px', background: 'rgba(56,184,248,0.05)',
            cursor: 'pointer', flexShrink: 0,
          }}
          aria-label="Toggle menu"
        >
          <motion.span style={{
            display: 'block', width: 16, height: 1.5,
            background: 'var(--color-heading)', borderRadius: 0, position: 'absolute',
          }}
            animate={{ rotate: open ? 45 : 0, y: open ? 0 : -4 }}
            transition={{ duration: 0.3, ease }}
          />
          <motion.span style={{
            display: 'block', width: 16, height: 1.5,
            background: 'var(--color-heading)', borderRadius: 0, position: 'absolute',
          }}
            animate={{ rotate: open ? -45 : 0, y: open ? 0 : 4 }}
            transition={{ duration: 0.3, ease }}
          />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99,
              backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)',
              background: 'rgba(6,10,26,0.97)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '8px',
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
                  fontSize: '28px', fontWeight: 700,
                  color: 'rgba(221,232,244,0.8)', textDecoration: 'none',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  fontFamily: 'var(--font-display)',
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
                marginTop: '32px', background: 'var(--color-primary)',
                border: 'none', borderRadius: '2px', padding: '14px 40px',
                fontSize: '13px', fontWeight: 700, color: '#060a1a', cursor: 'pointer',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                fontFamily: 'var(--font-mono)',
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
