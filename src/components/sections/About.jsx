import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const ease = [0.32, 0.72, 0, 1]

export default function About({ data }) {
  const { ref, isInView } = useScrollReveal()
  const { ref: imgRef, isInView: imgInView } = useScrollReveal()
  const [line1, line2] = data.headline.split('\n')

  return (
    <section id="about" style={{ padding: '120px 24px' }}>
      <div ref={ref} style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '80px',
        alignItems: 'center',
      }}>
        {/* Text side */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '20px' }}
          >
            Our story
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease }}
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-1.5px',
              lineHeight: 1.05,
              marginBottom: '28px',
            }}
          >
            <span style={{ color: 'var(--color-heading)', display: 'block' }}>{line1}</span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>{line2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            style={{ color: 'var(--color-text-muted)', fontSize: '17px', lineHeight: 1.8, marginBottom: '56px' }}
          >
            {data.body}
          </motion.p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            {data.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 + i * 0.1, ease }}
              >
                <div style={{
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: 800,
                  letterSpacing: '-1.5px',
                  background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '6px',
                }}>
                  {stat.value}
                </div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '14px', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image side — double-bezel */}
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, x: 32, filter: 'blur(8px)' }}
          animate={imgInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.85, delay: 0.2, ease }}
          /* Outer shell */
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '24px',
            padding: '4px',
          }}
        >
          {/* Inner core */}
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.06)',
          }}>
            <img
              src={data.img}
              alt="Team at work"
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
