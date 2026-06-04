export default function Navbar({ data }) {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: '20px',
            color: 'var(--color-heading)',
          }}
        >
          {data.brand}
        </span>

        <nav style={{ display: 'flex', gap: '32px' }}>
          {data.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          style={{
            backgroundColor: 'var(--color-primary)',
            color: '#fff',
            border: 'none',
            borderRadius: 'var(--radius-btn)',
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          {data.cta}
        </button>
      </div>
    </header>
  )
}
