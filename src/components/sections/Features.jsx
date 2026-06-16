import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { BoltIcon, ShieldCheckIcon, ChartIcon, SlidersIcon, UsersIcon, GlobeIcon } from '../Icons'

const ease = [0.32, 0.72, 0, 1]
const ICONS = [BoltIcon, ShieldCheckIcon, ChartIcon, SlidersIcon, UsersIcon, GlobeIcon]

function FeatureCard({ item, icon: Icon, featured, delay }) {
  const { ref, isInView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.7, delay, ease }}
      style={{
        background: 'rgba(56,184,248,0.03)',
        border: '1px solid rgba(56,184,248,0.12)',
        borderTop: featured ? '2px solid rgba(56,184,248,0.45)' : '1px solid rgba(56,184,248,0.12)',
        borderRadius: '2px',
        padding: featured ? '36px' : '28px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(56,184,248,0.3)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(56,184,248,0.12)')}
    >
      <div style={{
        width: featured ? 48 : 40,
        height: featured ? 48 : 40,
        borderRadius: '2px',
        background: 'rgba(56,184,248,0.07)',
        border: '1px solid rgba(56,184,248,0.18)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--color-primary)', flexShrink: 0, marginBottom: '20px',
      }}>
        <Icon size={featured ? 22 : 18} />
      </div>
      <h3 style={{
        fontSize: featured ? '18px' : '15px', fontWeight: 700,
        color: 'var(--color-heading)', marginBottom: '10px',
        letterSpacing: '0.05em', textTransform: 'uppercase',
        fontFamily: 'var(--font-display)',
      }}>
        {item.title}
      </h3>
      <p style={{ color: 'var(--color-text)', fontSize: '14px', lineHeight: 1.75, fontFamily: 'var(--font-body)' }}>
        {item.description}
      </p>
    </motion.div>
  )
}

export default function Features({ data }) {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="features" className="px-6 py-16 md:py-[120px]"
      style={{ backgroundColor: 'var(--color-surface)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '56px' }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '16px' }}
          >
            [ Capabilities ]
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 700, color: 'var(--color-heading)', marginBottom: '16px', letterSpacing: '0.04em' }}
          >
            {data.headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            style={{ color: 'var(--color-text)', fontSize: '17px', maxWidth: '440px', margin: '0 auto', lineHeight: 1.7, fontFamily: 'var(--font-body)' }}
          >
            {data.subheadline}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.items.map((item, i) => {
            const isFirst = i === 0
            return (
              <div key={item.title} className={isFirst ? 'md:col-span-2' : ''}>
                <FeatureCard
                  item={item}
                  icon={ICONS[i]}
                  featured={isFirst}
                  delay={i * 0.07}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
