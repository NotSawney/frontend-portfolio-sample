import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const ease = [0.32, 0.72, 0, 1]

export default function CallToAction({ data }) {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="cta" style={{ padding: '40px 24px 120px' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.85, ease }}
        /* Outer shell */
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '32px',
          padding: '3px',
        }}
      >
        {/* Inner core with gradient */}
        <div style={{
          borderRadius: '29px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.18) 0%, rgba(5,5,5,0) 60%), var(--color-surface)',
          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.07)',
          padding: '96px 40px',
          textAlign: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* Subtle top glow line */}
          <div style={{
            position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), rgba(34,211,238,0.5), transparent)',
          }} />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '20px' }}
          >
            Get started
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.75, delay: 0.25, ease }}
            style={{
              fontSize: 'clamp(32px, 5vw, 60px)',
              fontWeight: 800,
              color: 'var(--color-heading)',
              letterSpacing: '-2px',
              marginBottom: '20px',
              lineHeight: 1.05,
            }}
          >
            {data.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            style={{ color: 'var(--color-text-muted)', fontSize: '18px', lineHeight: 1.65, marginBottom: '48px', maxWidth: '520px', margin: '0 auto 48px' }}
          >
            {data.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45, ease }}
            style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            {/* Primary — button-in-button */}
            <button
              style={{
                background: 'var(--color-primary)',
                border: 'none',
                borderRadius: '9999px',
                padding: '14px 12px 14px 26px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'transform 0.3s cubic-bezier(0.32,0.72,0,1)',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.98)')}
              onMouseUp={e => (e.currentTarget.style.transform = 'scale(1.03)')}
            >
              <span style={{ color: '#fff', fontSize: '15px', fontWeight: 600 }}>{data.primary}</span>
              <span style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'rgba(0,0,0,0.22)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '15px', color: '#fff',
              }}>→</span>
            </button>

            {/* Secondary */}
            <button style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '9999px',
              padding: '14px 30px',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-text)',
              cursor: 'pointer',
              transition: 'border-color 0.2s ease, color 0.2s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'; e.currentTarget.style.color = 'var(--color-heading)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'var(--color-text)' }}
            >
              {data.secondary}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
