import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const ease = [0.32, 0.72, 0, 1]

function Stars() {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#facc15">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ item, delay }) {
  const { ref, isInView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.7, delay, ease }}
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '24px', padding: '3px', height: '100%' }}
    >
      <div style={{
        background: 'var(--color-surface)', borderRadius: '21px',
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)',
        padding: '28px', height: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '12px', right: '20px',
          fontSize: '72px', lineHeight: 1, color: 'rgba(99,102,241,0.08)',
          fontFamily: 'Georgia, serif', fontWeight: 900,
          pointerEvents: 'none', userSelect: 'none',
        }}>&ldquo;</div>
        <div>
          <Stars />
          <p style={{ color: 'var(--color-text)', fontSize: '15px', lineHeight: 1.75, marginBottom: '24px', fontStyle: 'italic' }}>
            &ldquo;{item.quote}&rdquo;
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '50%', padding: '2px', flexShrink: 0 }}>
            <img src={item.avatar} alt={item.author}
              style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div>
            <div style={{ fontWeight: 700, color: 'var(--color-heading)', fontSize: '14px' }}>{item.author}</div>
            <div style={{ color: 'var(--color-text-muted)', fontSize: '12px', marginTop: '2px' }}>{item.role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials({ data }) {
  const { ref, isInView } = useScrollReveal()
  return (
    <section id="testimonials" className="px-6 py-16 md:py-[120px]">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '56px' }}>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease }}
            style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '16px' }}>
            Social proof
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }} animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.7, delay: 0.1, ease }}
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: 'var(--color-heading)', letterSpacing: '-1.5px' }}>
            {data.headline}
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {data.items.map((item, i) => (
            <TestimonialCard key={item.author} item={item} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
