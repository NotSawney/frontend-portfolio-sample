const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 14, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function BoltIcon({ size = 22 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256">
      <polyline points="160 16 144 96 208 96 96 240 112 160 48 160 160 16" {...base} />
    </svg>
  )
}

export function ShieldCheckIcon({ size = 22 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256">
      <path d="M40,114.79V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.77c0,84.18-71.31,112.07-85.54,116.8a7.54,7.54,0,0,1-4.92,0C111.31,226.86,40,199,40,114.79Z" {...base} />
      <polyline points="88 136 112 160 168 104" {...base} />
    </svg>
  )
}

export function ChartIcon({ size = 22 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256">
      <polyline points="48 208 48 136 96 136 96 208" {...base} />
      <polyline points="112 208 112 96 160 96 160 208" {...base} />
      <polyline points="176 208 176 48 224 48 224 208" {...base} />
      <line x1="24" y1="208" x2="232" y2="208" {...base} />
    </svg>
  )
}

export function SlidersIcon({ size = 22 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256">
      <line x1="40" y1="128" x2="216" y2="128" {...base} />
      <line x1="40" y1="64" x2="216" y2="64" {...base} />
      <line x1="40" y1="192" x2="216" y2="192" {...base} />
      <circle cx="104" cy="128" r="16" {...base} />
      <circle cx="152" cy="64" r="16" {...base} />
      <circle cx="80" cy="192" r="16" {...base} />
    </svg>
  )
}

export function UsersIcon({ size = 22 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256">
      <circle cx="88" cy="108" r="52" {...base} />
      <path d="M155.41,57.6a52,52,0,1,1,0,100.79" {...base} />
      <path d="M16,197.7a88,88,0,0,1,144,0" {...base} />
      <path d="M172,160a88,88,0,0,1,68,37.7" {...base} />
    </svg>
  )
}

export function GlobeIcon({ size = 22 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256">
      <circle cx="128" cy="128" r="96" {...base} />
      <ellipse cx="128" cy="128" rx="40" ry="96" {...base} />
      <line x1="32" y1="128" x2="224" y2="128" {...base} />
      <line x1="37.46" y1="96" x2="218.54" y2="96" {...base} />
      <line x1="37.46" y1="160" x2="218.54" y2="160" {...base} />
    </svg>
  )
}
