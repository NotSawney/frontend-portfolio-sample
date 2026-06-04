export default function Features({ data }) {
  return (
    <section
      id="features"
      style={{
        padding: '96px 24px',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              color: 'var(--color-heading)',
              marginBottom: '16px',
              letterSpacing: '-1px',
            }}
          >
            {data.headline}
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px' }}>
            {data.subheadline}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {data.items.map((item) => (
            <div
              key={item.title}
              style={{
                backgroundColor: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-card)',
                padding: '28px',
              }}
            >
              <div style={{ fontSize: '28px', marginBottom: '16px' }}>{item.icon}</div>
              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: 600,
                  color: 'var(--color-heading)',
                  marginBottom: '10px',
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', lineHeight: 1.65 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
