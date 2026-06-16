import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const ease = [0.32, 0.72, 0, 1]

export default function CallToAction({ data }) {
  const { ref, isInView } = useScrollReveal()
  return (
    <section id="cta" className="px-6 py-16 md:py-[120px]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.85, ease }}
        style={{ maxWidth: '1200px', margin: '0 auto', background: 'rgba(56,184,248,0.03)', border: '1px solid rgba(56,184,248,0.16)', borderRadius: '2px' }}
      >
        <div style={{
          borderRadius: '2px',
          background: 'linear-gradient(to bottom, rgba(56,184,248,0.07) 0%, transparent 55%)',
          padding: 'clamp(48px, 8vw, 96px) clamp(24px, 5vw, 40px)',
          textAlign: 'center', overflow: 'hidden', position: 'relative',
        }}>
          {/* Top accent line — full width */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent 0%, rgba(56,184,248,0.5) 40%, rgba(56,184,248,0.5) 60%, transparent 100%)' }} />

          <motion.p initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15, ease }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '20px' }}>
            [ Ready ]
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }} animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.75, delay: 0.25, ease }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 58px)', fontWeight: 700, color: 'var(--color-heading)', letterSpacing: '0.04em', marginBottom: '20px', lineHeight: 1.1 }}>
            {data.headline}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.35, ease }}
            style={{ color: 'var(--color-text)', fontSize: '17px', lineHeight: 1.7, marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px', fontFamily: 'var(--font-body)' }}>
            {data.subheadline}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.45, ease }}
            style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              style={{ background: 'var(--color-primary)', border: 'none', borderRadius: '2px', padding: '14px 32px', display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontFamily: 'var(--font-mono)', transition: 'background 0.2s ease, transform 0.2s ease' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary-hover)'; e.currentTarget.style.transform = 'scale(1.02)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.transform = 'scale(1)' }}
              onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.98)')}
              onMouseUp={e => (e.currentTarget.style.transform = 'scale(1.02)')}
            >
              <span style={{ color: '#060a1a', fontSize: '13px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{data.primary}</span>
              <span style={{ color: 'rgba(6,10,26,0.6)', fontSize: '14px' }}>→</span>
            </button>
            <button style={{ background: 'transparent', border: '1px solid rgba(56,184,248,0.22)', borderRadius: '2px', padding: '14px 32px', fontSize: '13px', fontWeight: 500, color: 'rgba(56,184,248,0.7)', cursor: 'pointer', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', transition: 'border-color 0.2s ease, color 0.2s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(56,184,248,0.5)'; e.currentTarget.style.color = 'var(--color-primary)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(56,184,248,0.22)'; e.currentTarget.style.color = 'rgba(56,184,248,0.7)' }}
            >
              {data.secondary}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
