export default function Footer({ data }) {
  return (
    <footer style={{
      borderTop: '1px solid rgba(56,184,248,0.1)',
      padding: '56px 24px',
      backgroundColor: 'var(--color-surface)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '28px',
        textAlign: 'center',
      }}>
        {/* Brand */}
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '20px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--color-primary)',
        }}>
          {data.brand}
        </span>

        {/* Tagline */}
        <p style={{ color: 'var(--color-text-muted)', fontSize: '13px', letterSpacing: '0.04em', fontFamily: 'var(--font-mono)' }}>
          {data.tagline}
        </p>

        {/* Links */}
        <nav style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {data.links.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                color: 'var(--color-text-muted)',
                fontSize: '11px',
                fontWeight: 500,
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontFamily: 'var(--font-mono)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.target.style.color = 'var(--color-primary)')}
              onMouseLeave={e => (e.target.style.color = 'var(--color-text-muted)')}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div style={{ width: '100%', maxWidth: '320px', height: '1px', background: 'rgba(56,184,248,0.08)' }} />

        <p style={{ color: 'var(--color-text-muted)', fontSize: '11px', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>
          {data.copyright}
        </p>
      </div>
    </footer>
  )
}
