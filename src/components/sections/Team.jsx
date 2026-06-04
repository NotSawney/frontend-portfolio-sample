export default function Team({ data }) {
  return (
    <section
      id="team"
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '32px',
          }}
        >
          {data.members.map((member) => (
            <div
              key={member.name}
              style={{
                textAlign: 'center',
                backgroundColor: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-card)',
                padding: '32px 24px',
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '16px',
                  border: '2px solid var(--color-border)',
                }}
              />
              <div
                style={{
                  fontWeight: 600,
                  color: 'var(--color-heading)',
                  fontSize: '16px',
                  marginBottom: '6px',
                }}
              >
                {member.name}
              </div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
