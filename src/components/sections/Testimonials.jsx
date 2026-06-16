import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const ease = [0.32, 0.72, 0, 1]

function TestimonialCard({ item, delay }) {
  const { ref, isInView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.7, delay, ease }}
      style={{
        background: 'rgba(56,184,248,0.02)',
        border: '1px solid rgba(56,184,248,0.1)',
        borderRadius: '2px',
        padding: '28px',
        height: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        position: 'relative', overflow: 'hidden',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(56,184,248,0.25)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(56,184,248,0.1)')}
    >
      {/* Large decorative quote in Cinzel */}
      <div style={{
        position: 'absolute', top: '8px', right: '18px',
        fontSize: '80px', lineHeight: 1, color: 'rgba(56,184,248,0.06)',
        fontFamily: 'var(--font-display)', fontWeight: 900,
        pointerEvents: 'none', userSelect: 'none',
      }}>&ldquo;</div>

      <div>
        {/* Rune line instead of stars */}
        <div style={{ display: 'flex', gap: '4px', marginBottom: '18px', alignItems: 'center' }}>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{ width: '16px', height: '2px', background: 'var(--color-primary)', opacity: 0.7 + i * 0.06 }} />
          ))}
        </div>
        <p style={{ color: 'var(--color-text)', fontSize: '14px', lineHeight: 1.8, marginBottom: '24px', fontFamily: 'var(--font-body)', fontStyle: 'italic' }}>
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ border: '1px solid rgba(56,184,248,0.18)', borderRadius: '2px', overflow: 'hidden', flexShrink: 0 }}>
          <img src={item.avatar} alt={item.author}
            style={{ width: '40px', height: '40px', objectFit: 'cover', display: 'block' }} />
        </div>
        <div>
          <div style={{ fontWeight: 700, color: 'var(--color-heading)', fontSize: '13px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>{item.author}</div>
          <div style={{ color: 'var(--color-text-muted)', fontSize: '11px', marginTop: '2px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>{item.role}</div>
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
            style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '16px' }}>
            [ Reviews ]
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }} animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.7, delay: 0.1, ease }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 700, color: 'var(--color-heading)', letterSpacing: '0.04em' }}>
            {data.headline}
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-start">
          {data.items.map((item, i) => (
            <TestimonialCard key={item.author} item={item} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
