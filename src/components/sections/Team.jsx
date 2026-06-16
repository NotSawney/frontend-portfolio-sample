import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const ease = [0.32, 0.72, 0, 1]

function ClientCard({ member, delay }) {
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
        padding: '24px 16px',
        textAlign: 'center',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(56,184,248,0.28)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(56,184,248,0.1)')}
    >
      <div style={{
        width: '72px', height: '72px', margin: '0 auto 16px',
        border: '1px solid rgba(56,184,248,0.18)',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <img src={member.img} alt={member.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <div style={{ fontWeight: 700, color: 'var(--color-heading)', fontSize: '14px', marginBottom: '5px', letterSpacing: '0.04em', fontFamily: 'var(--font-mono)' }}>
        {member.name}
      </div>
      <div style={{ color: 'var(--color-text-muted)', fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>
        {member.role}
      </div>
    </motion.div>
  )
}

export default function Team({ data }) {
  const { ref, isInView } = useScrollReveal()
  return (
    <section id="team" className="px-6 py-16 md:py-[120px]"
      style={{ backgroundColor: 'var(--color-surface)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '56px' }}>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '16px' }}>
            [ Collaborators ]
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }} animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.7, delay: 0.1, ease }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 700, color: 'var(--color-heading)', marginBottom: '16px', letterSpacing: '0.04em' }}>
            {data.headline}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2, ease }}
            style={{ color: 'var(--color-text)', fontSize: '16px', fontFamily: 'var(--font-body)' }}>
            {data.subheadline}
          </motion.p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {data.members.map((member, i) => (
            <ClientCard key={member.name} member={member} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
