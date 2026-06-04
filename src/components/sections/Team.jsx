import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const ease = [0.32, 0.72, 0, 1]

function TeamCard({ member, delay }) {
  const { ref, isInView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.7, delay, ease }}
      /* Outer shell */
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '24px',
        padding: '3px',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
    >
      {/* Inner core */}
      <div style={{
        background: 'var(--color-surface)',
        borderRadius: '21px',
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)',
        padding: '32px 24px',
        textAlign: 'center',
      }}>
        {/* Avatar — double-bezel */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: '50%',
          padding: '3px',
          width: '88px',
          height: '88px',
          margin: '0 auto 20px',
        }}>
          <img
            src={member.img}
            alt={member.name}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>

        <div style={{ fontWeight: 700, color: 'var(--color-heading)', fontSize: '16px', marginBottom: '6px', letterSpacing: '-0.2px' }}>
          {member.name}
        </div>
        <div style={{ color: 'var(--color-text-muted)', fontSize: '13px', fontWeight: 500 }}>
          {member.role}
        </div>
      </div>
    </motion.div>
  )
}

export default function Team({ data }) {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="team" style={{ padding: '120px 24px', backgroundColor: 'var(--color-surface)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '72px' }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '16px' }}
          >
            The people
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: 'var(--color-heading)', marginBottom: '16px', letterSpacing: '-1.5px' }}
          >
            {data.headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            style={{ color: 'var(--color-text-muted)', fontSize: '18px' }}
          >
            {data.subheadline}
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
        }}>
          {data.members.map((member, i) => (
            <TeamCard key={member.name} member={member} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
