export default function About({ data }) {
  return (
    <section id="about" style={{ padding: '96px 24px' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        <div>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              color: 'var(--color-heading)',
              marginBottom: '24px',
              letterSpacing: '-1px',
              whiteSpace: 'pre-line',
            }}
          >
            {data.headline}
          </h2>
          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '17px',
              lineHeight: 1.75,
              marginBottom: '48px',
            }}
          >
            {data.body}
          </p>

          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            {data.stats.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    color: 'var(--color-primary)',
                    letterSpacing: '-1px',
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '14px', marginTop: '4px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img
            src={data.img}
            alt="Team at work"
            style={{
              width: '100%',
              borderRadius: 'var(--radius-card)',
              border: '1px solid var(--color-border)',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  )
}
