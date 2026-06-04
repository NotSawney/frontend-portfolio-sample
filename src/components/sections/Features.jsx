import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { BoltIcon, ShieldCheckIcon, ChartIcon, SlidersIcon, UsersIcon, GlobeIcon } from '../Icons'

const ease = [0.32, 0.72, 0, 1]
const ICONS = [BoltIcon, ShieldCheckIcon, ChartIcon, SlidersIcon, UsersIcon, GlobeIcon]
const ICON_COLORS = ['#facc15', '#22d3ee', '#a855f7', '#6366f1', '#34d399', '#f472b6']

function FeatureCard({ item, icon: Icon, color, large, delay }) {
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
        height: '100%',
      }}
    >
      {/* Inner core */}
      <div style={{
        background: 'var(--color-surface)',
        borderRadius: '21px',
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)',
        padding: large ? '40px' : '28px',
        height: '100%',
        display: 'flex',
        flexDirection: large ? 'row' : 'column',
        alignItems: large ? 'flex-start' : 'flex-start',
        gap: large ? '32px' : '0',
      }}>
        {/* Icon container */}
        <div style={{
          width: large ? 56 : 44,
          height: large ? 56 : 44,
          borderRadius: '14px',
          background: `${color}14`,
          border: `1px solid ${color}28`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color,
          flexShrink: 0,
          marginBottom: large ? 0 : '20px',
        }}>
          <Icon size={large ? 24 : 20} />
        </div>

        <div>
          <h3 style={{
            fontSize: large ? '20px' : '16px',
            fontWeight: 700,
            color: 'var(--color-heading)',
            marginBottom: '10px',
            letterSpacing: '-0.3px',
          }}>
            {item.title}
          </h3>
          <p style={{
            color: 'var(--color-text-muted)',
            fontSize: large ? '16px' : '14px',
            lineHeight: 1.7,
          }}>
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Features({ data }) {
  const { ref, isInView } = useScrollReveal()

  return (
    <section
      id="features"
      style={{ padding: '120px 24px', backgroundColor: 'var(--color-surface)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '72px' }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              marginBottom: '16px',
            }}
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              color: 'var(--color-heading)',
              marginBottom: '16px',
              letterSpacing: '-1.5px',
            }}
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

        {/* Bento grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {data.items.map((item, i) => {
            const Icon = ICONS[i]
            const color = ICON_COLORS[i]
            const isFirst = i === 0
            return (
              <div
                key={item.title}
                style={{ gridColumn: isFirst ? 'span 2' : 'span 1' }}
                className={isFirst ? 'col-span-1 md:col-span-2 lg:col-span-2' : ''}
              >
                <FeatureCard
                  item={item}
                  icon={Icon}
                  color={color}
                  large={isFirst}
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
