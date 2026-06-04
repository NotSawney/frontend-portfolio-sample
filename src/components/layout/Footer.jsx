export default function Footer({ data }) {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
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
          fontWeight: 800,
          fontSize: '18px',
          letterSpacing: '-0.3px',
          background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          {data.brand}
        </span>

        {/* Tagline */}
        <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', letterSpacing: '0.01em' }}>
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
                fontSize: '13px',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.target.style.color = 'var(--color-heading)')}
              onMouseLeave={e => (e.target.style.color = 'var(--color-text-muted)')}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div style={{ width: '100%', maxWidth: '400px', height: '1px', background: 'rgba(255,255,255,0.05)' }} />

        <p style={{ color: 'var(--color-text-muted)', fontSize: '12px', letterSpacing: '0.02em' }}>
          {data.copyright}
        </p>
      </div>
    </footer>
  )
}
