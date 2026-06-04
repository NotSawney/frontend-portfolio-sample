export default function CallToAction({ data }) {
  return (
    <section
      id="cta"
      style={{
        padding: '96px 24px',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            color: 'var(--color-heading)',
            marginBottom: '20px',
            letterSpacing: '-1.5px',
          }}
        >
          {data.headline}
        </h2>
        <p
          style={{
            color: 'var(--color-text-muted)',
            fontSize: '18px',
            lineHeight: 1.65,
            marginBottom: '40px',
          }}
        >
          {data.subheadline}
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            style={{
              backgroundColor: 'var(--color-primary)',
              color: '#fff',
              border: 'none',
              borderRadius: 'var(--radius-btn)',
              padding: '14px 32px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            {data.primary}
          </button>
          <button
            style={{
              backgroundColor: 'transparent',
              color: 'var(--color-text)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-btn)',
              padding: '14px 32px',
              fontSize: '15px',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            {data.secondary}
          </button>
        </div>
      </div>
    </section>
  )
}
