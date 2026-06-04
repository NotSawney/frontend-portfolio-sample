export default function Footer({ data }) {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        padding: '48px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          textAlign: 'center',
        }}
      >
        <span
          style={{ fontWeight: 700, fontSize: '18px', color: 'var(--color-heading)' }}
        >
          {data.brand}
        </span>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>
          {data.tagline}
        </p>
        <nav style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {data.links.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                color: 'var(--color-text-muted)',
                fontSize: '14px',
                textDecoration: 'none',
              }}
            >
              {link}
            </a>
          ))}
        </nav>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>
          {data.copyright}
        </p>
      </div>
    </footer>
  )
}
