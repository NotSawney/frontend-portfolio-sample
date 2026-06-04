import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { BoltIcon, ShieldCheckIcon, ChartIcon, SlidersIcon, UsersIcon, GlobeIcon } from '../Icons'

const ease = [0.32, 0.72, 0, 1]
const ICONS = [BoltIcon, ShieldCheckIcon, ChartIcon, SlidersIcon, UsersIcon, GlobeIcon]
const ICON_COLORS = ['#facc15', '#22d3ee', '#a855f7', '#6366f1', '#34d399', '#f472b6']

function FeatureCard({ item, icon: Icon, color, featured, delay }) {
  const { ref, isInView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.7, delay, ease }}
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '24px', padding: '3px', height: '100%',
      }}
    >
      <div style={{
        background: 'var(--color-surface)', borderRadius: '21px',
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)',
        padding: featured ? '36px' : '28px',
        height: '100%', display: 'flex', flexDirection: 'column',
      }}>
        <div style={{
          width: featured ? 52 : 44, height: featured ? 52 : 44,
          borderRadius: '14px',
          background: `${color}14`, border: `1px solid ${color}28`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color, flexShrink: 0, marginBottom: '20px',
        }}>
          <Icon size={featured ? 22 : 20} />
        </div>
        <h3 style={{
          fontSize: featured ? '19px' : '16px', fontWeight: 700,
          color: 'var(--color-heading)', marginBottom: '10px', letterSpacing: '-0.3px',
        }}>
          {item.title}
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', lineHeight: 1.7 }}>
          {item.description}
        </p>
      </div>
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
            style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '16px' }}
          >
            Capabilities
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
            style={{ color: 'var(--color-text-muted)', fontSize: '18px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.65 }}
          >
            {data.subheadline}
          </motion.p>
        </div>

        {/* Bento grid — Tailwind handles ALL responsive, no inline gridTemplateColumns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.items.map((item, i) => {
            const isFirst = i === 0
            return (
              <div key={item.title} className={isFirst ? 'md:col-span-2' : ''}>
                <FeatureCard
                  item={item}
                  icon={ICONS[i]}
                  color={ICON_COLORS[i]}
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
