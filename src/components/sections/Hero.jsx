import { motion } from 'framer-motion'

const ease = [0.32, 0.72, 0, 1]
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.8, delay, ease },
})

function TerminalCard() {
  const entries = [
    { key: '"role"', value: '"Full-Stack Developer"', valueColor: '#7acdff' },
    { key: '"stack"', value: '["React", "Node.js", "Java", "Python"]', valueColor: '#7acdff' },
    { key: '"experience"', value: '"4+ years"', valueColor: '#c8d8e8' },
    { key: '"craft"', value: '"Clean code. No excuses."', valueColor: '#c8d8e8' },
    { key: '"status"', value: '"available for projects"', valueColor: '#38d888' },
  ]
  return (
    <div style={{
      background: '#04060f',
      border: '1px solid rgba(56,184,248,0.2)',
      borderRadius: '2px',
      overflow: 'hidden',
      textAlign: 'left',
      maxWidth: '520px',
      margin: '0 auto',
    }}>
      {/* Terminal chrome */}
      <div style={{
        padding: '10px 16px',
        borderBottom: '1px solid rgba(56,184,248,0.1)',
        background: 'rgba(56,184,248,0.04)',
        display: 'flex', alignItems: 'center', gap: '8px',
      }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['rgba(255,95,87,0.35)', 'rgba(254,188,46,0.35)', 'rgba(40,200,64,0.35)'].map(c => (
            <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'rgba(56,184,248,0.4)', marginLeft: '4px', letterSpacing: '0.06em' }}>
          profile.json
        </span>
      </div>
      {/* JSON content */}
      <div style={{ padding: '20px 24px 24px', fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 2 }}>
        <div style={{ color: 'rgba(56,184,248,0.3)' }}>{'{'}</div>
        {entries.map(({ key, value, valueColor }) => (
          <div key={key} style={{ paddingLeft: '16px' }}>
            <span style={{ color: 'rgba(150,180,210,0.4)' }}>{key}: </span>
            <span style={{ color: valueColor }}>{value}</span>
            <span style={{ color: 'rgba(56,184,248,0.2)' }}>,</span>
          </div>
        ))}
        <div style={{ color: 'rgba(56,184,248,0.3)' }}>{'}'}</div>
        <div style={{ paddingTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: 'rgba(56,184,248,0.5)' }}>›</span>
          <span className="cursor-blink" style={{ display: 'inline-block', width: '8px', height: '14px', background: 'rgba(56,184,248,0.5)', verticalAlign: 'middle' }} />
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
            gap: '10px',
            background: 'rgba(56,184,248,0.06)',
            border: '1px solid rgba(56,184,248,0.2)',
            borderRadius: '2px',
            padding: '7px 16px',
            fontSize: '11px',
            color: 'var(--color-primary)',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)',
          }}>
            <span style={{ width: 5, height: 5, background: '#38d888', display: 'inline-block', borderRadius: '50%' }} />
            {data.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...fadeUp(0.2)} style={{
          fontSize: 'clamp(44px, 8vw, 82px)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '0.04em',
          marginBottom: '28px',
          fontFamily: 'var(--font-display)',
        }}>
          <span style={{ color: 'var(--color-heading)', display: 'block' }}>{line1}</span>
          <span style={{ color: 'var(--color-primary)', display: 'block' }}>{line2}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p {...fadeUp(0.35)} style={{
          fontSize: 'clamp(15px, 2.2vw, 18px)',
          color: 'var(--color-text)',
          lineHeight: 1.8,
          maxWidth: '500px',
          margin: '0 auto 44px',
          fontFamily: 'var(--font-body)',
        }}>
          {data.subheadline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...fadeUp(0.5)} style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '64px' }}>
          {/* Primary */}
          <button
            style={{
              background: 'var(--color-primary)',
              border: 'none',
              borderRadius: '2px',
              padding: '13px 28px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              transition: 'background 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary-hover)'; e.currentTarget.style.transform = 'scale(1.02)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.transform = 'scale(1)' }}
            onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.98)')}
            onMouseUp={e => (e.currentTarget.style.transform = 'scale(1.02)')}
          >
            <span style={{ color: '#060a1a', fontSize: '13px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{data.cta.primary}</span>
            <span style={{ color: 'rgba(6,10,26,0.6)', fontSize: '14px' }}>→</span>
          </button>

          {/* Secondary */}
          <button style={{
            background: 'transparent',
            border: '1px solid rgba(56,184,248,0.22)',
            borderRadius: '2px',
            padding: '13px 28px',
            fontSize: '13px',
            fontWeight: 500,
            color: 'rgba(56,184,248,0.7)',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.04em',
            transition: 'border-color 0.2s ease, color 0.2s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(56,184,248,0.5)'; e.currentTarget.style.color = 'var(--color-primary)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(56,184,248,0.22)'; e.currentTarget.style.color = 'rgba(56,184,248,0.7)' }}
          >
            {data.cta.secondary}
          </button>
        </motion.div>

        {/* Terminal card */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, delay: 0.7, ease }}
        >
          <TerminalCard />
        </motion.div>
      </div>
    </section>
  )
}
