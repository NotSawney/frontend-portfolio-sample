export default function Testimonials({ data }) {
  return (
    <section id="testimonials" style={{ padding: '96px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            color: 'var(--color-heading)',
            marginBottom: '64px',
            textAlign: 'center',
            letterSpacing: '-1px',
          }}
        >
          {data.headline}
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {data.items.map((item) => (
            <div
              key={item.author}
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-card)',
                padding: '32px',
              }}
            >
              <p
                style={{
                  color: 'var(--color-text)',
                  fontSize: '16px',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                  fontStyle: 'italic',
                }}
              >
                &ldquo;{item.quote}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img
                  src={item.avatar}
                  alt={item.author}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--color-border)',
                  }}
                />
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--color-heading)', fontSize: '14px' }}>
                    {item.author}
                  </div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
