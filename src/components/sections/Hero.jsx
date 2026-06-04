import { motion } from 'framer-motion'

const ease = [0.32, 0.72, 0, 1]
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.8, delay, ease },
})

function MockDashboard() {
  const metrics = [
    { value: '99.99%', label: 'Uptime', color: '#22d3ee' },
    { value: '1.2ms', label: 'Latency', color: '#6366f1' },
    { value: '10k+', label: 'Deploys', color: '#a855f7' },
  ]
  const bars = [
    { label: 'production', pct: 94, color: '#6366f1' },
    { label: 'staging', pct: 72, color: '#22d3ee' },
    { label: 'preview', pct: 88, color: '#a855f7' },
  ]
  return (
    /* Outer shell (double-bezel) */
    <div style={{
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '20px',
      padding: '3px',
    }}>
      {/* Inner core */}
      <div style={{
        background: '#0a0a0a',
        borderRadius: '17px',
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}>
        {/* Window chrome */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          {['#ff5f57', '#febc2e', '#28c840'].map(c => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
          ))}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 160, height: 6, borderRadius: 99, background: 'rgba(255,255,255,0.06)' }} />
          </div>
        </div>

        {/* Metrics row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {metrics.map(({ value, label, color }, i) => (
            <div
              key={label}
              style={{
                padding: '20px 16px',
                textAlign: 'center',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color, marginBottom: 4, letterSpacing: '-0.5px', fontFamily: 'var(--font-sans)' }}>
                {value}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Activity bars */}
        <div style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>
            Deployment activity
          </div>
          {bars.map(({ label, pct, color }) => (
            <div key={label} style={{ marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-sans)' }}>{label}</span>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-sans)' }}>{pct}%</span>
              </div>
              <div style={{ height: 4, borderRadius: 99, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                <div style={{
                  width: `${pct}%`, height: '100%', borderRadius: 99,
                  background: `linear-gradient(90deg, ${color}, ${color}88)`,
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Hero({ data }) {
  const [line1, line2] = data.headline.split('\n')

  return (
    <section
      id="hero"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '140px 24px 80px',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '800px', width: '100%' }}>
        {/* Eyebrow badge */}
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: '32px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(99,102,241,0.1)',
            border: '1px solid rgba(99,102,241,0.3)',
            borderRadius: '9999px',
            padding: '6px 16px',
            fontSize: '12px',
            color: 'var(--color-accent)',
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-accent)', display: 'inline-block' }} />
            {data.badge}
          </span>
        </motion.div>

        {/* Headline with gradient on second line */}
        <motion.h1 {...fadeUp(0.2)} style={{
          fontSize: 'clamp(44px, 8vw, 80px)',
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: '-3px',
          marginBottom: '28px',
        }}>
          <span style={{ color: 'var(--color-heading)', display: 'block' }}>{line1}</span>
          <span style={{
            display: 'block',
            background: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {line2}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p {...fadeUp(0.35)} style={{
          fontSize: 'clamp(16px, 2.5vw, 19px)',
          color: 'var(--color-text-muted)',
          lineHeight: 1.75,
          maxWidth: '540px',
          margin: '0 auto 44px',
        }}>
          {data.subheadline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...fadeUp(0.5)} style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '72px' }}>
          {/* Primary — button-in-button */}
          <button
            style={{
              background: 'var(--color-primary)',
              border: 'none',
              borderRadius: '9999px',
              padding: '13px 12px 13px 24px',
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
            <span style={{ color: '#fff', fontSize: '15px', fontWeight: 600 }}>{data.cta.primary}</span>
            <span style={{
              width: '32px', height: '32px', borderRadius: '50%',
              background: 'rgba(0,0,0,0.22)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '15px', color: '#fff',
            }}>→</span>
          </button>

          {/* Secondary — ghost */}
          <button style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '9999px',
            padding: '13px 28px',
            fontSize: '15px',
            fontWeight: 500,
            color: 'var(--color-text)',
            cursor: 'pointer',
            transition: 'border-color 0.2s ease, color 0.2s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'var(--color-heading)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'var(--color-text)' }}
          >
            {data.cta.secondary}
          </button>
        </motion.div>

        {/* Mock product UI */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, delay: 0.7, ease }}
        >
          <MockDashboard />
        </motion.div>
      </div>
    </section>
  )
}
