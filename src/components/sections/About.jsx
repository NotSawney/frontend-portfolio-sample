import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const ease = [0.32, 0.72, 0, 1]

export default function About({ data }) {
  const { ref, isInView } = useScrollReveal()
  const { ref: imgRef, isInView: imgInView } = useScrollReveal()
  const [line1, line2] = data.headline.split('\n')

  return (
    <section id="about" className="px-6 py-16 md:py-[120px]">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Text side */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '20px' }}
          >
            [ Background ]
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3.5vw, 42px)', fontWeight: 700, letterSpacing: '0.04em', lineHeight: 1.1, marginBottom: '24px' }}
          >
            <span style={{ color: 'var(--color-heading)', display: 'block' }}>{line1}</span>
            <span style={{ color: 'var(--color-primary)', display: 'block' }}>{line2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            style={{ color: 'var(--color-text)', fontSize: '16px', lineHeight: 1.85, marginBottom: '40px', fontFamily: 'var(--font-body)' }}
          >
            {data.body}
          </motion.p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {data.stats.map((stat, i) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 + i * 0.1, ease }}
                style={{
                  borderLeft: '2px solid rgba(56,184,248,0.3)',
                  paddingLeft: '16px',
                }}
              >
                <div style={{
                  fontSize: 'clamp(22px, 4vw, 38px)', fontWeight: 700,
                  color: 'var(--color-primary)',
                  marginBottom: '6px',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '0.03em',
                }}>
                  {stat.value}
                </div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '12px', fontWeight: 500, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image */}
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={imgInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.85, delay: 0.2, ease }}
          style={{
            border: '1px solid rgba(56,184,248,0.15)',
            borderRadius: '2px',
            overflow: 'hidden',
          }}
        >
          <img src={data.img} alt="Code on screen" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
        </motion.div>
      </div>
    </section>
  )
}
