export default function Hero({ data }) {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '760px' }}>
        <span
          style={{
            display: 'inline-block',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '99px',
            padding: '6px 16px',
            fontSize: '13px',
            color: 'var(--color-accent)',
            fontWeight: 500,
            marginBottom: '32px',
          }}
        >
          {data.badge}
        </span>

        <h1
          style={{
            fontSize: 'clamp(40px, 7vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-2px',
            color: 'var(--color-heading)',
            marginBottom: '24px',
            whiteSpace: 'pre-line',
          }}
        >
          {data.headline}
        </h1>

        <p
          style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            color: 'var(--color-text-muted)',
            lineHeight: 1.7,
            marginBottom: '40px',
            maxWidth: '580px',
            margin: '0 auto 40px',
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
              padding: '14px 28px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            {data.cta.primary}
          </button>
          <button
            style={{
              backgroundColor: 'transparent',
              color: 'var(--color-text)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-btn)',
              padding: '14px 28px',
              fontSize: '15px',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            {data.cta.secondary}
          </button>
        </div>
      </div>
    </section>
  )
}
