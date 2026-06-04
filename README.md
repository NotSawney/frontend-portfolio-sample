# Nexus — Frontend Portfolio Sample

**Live demo:** [frontend-portfolio-sample.vercel.app](https://frontend-portfolio-sample.vercel.app)

> A production-quality SaaS landing page built to demonstrate Figma-to-code skills, responsive layout, and modern React patterns. Designed as a reusable portfolio piece for frontend freelance work.

---

<!-- Replace with an actual screenshot after deploying -->
![Nexus landing page preview](https://frontend-portfolio-sample.vercel.app/og-preview.png)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Font | Plus Jakarta Sans (Google Fonts) |
| Deploy | Vercel (auto-deploy on push to `main`) |

---

## Features

- **Mobile-first responsive** — tested at 375px, 768px, 1280px, 1920px
- **Scroll reveal animations** — blur + slide with spring physics via Framer Motion
- **Floating pill navbar** — glassmorphism, scroll-aware opacity, hamburger → X morph on mobile
- **Dual-theme system** — CSS custom properties wired up for SaaS and Agency themes (toggle coming in v2)
- **Mock product dashboard** — hero section includes a simulated metrics UI
- **Bento grid layout** — asymmetric feature cards with double-bezel architecture
- **Security headers** — CSP, X-Frame-Options, Referrer-Policy via `vercel.json`
- **CI/CD** — GitHub Actions runs lint + build on every PR

---

## Sections

`Navbar` → `Hero` → `Features` → `About` → `Team` → `Testimonials` → `CTA` → `Footer`

---

## Customize the content

All copy, images, and labels live in one file — `src/data/content.js`. No JSX changes needed to swap out text or images.

```js
// src/data/content.js
export const themes = {
  saas: {
    nav: { brand: 'YourBrand', links: [...], cta: 'Get started' },
    hero: { headline: 'Your headline\nhere', ... },
    // ...
  }
}
```

**Three steps to make it yours:**
1. Edit `src/data/content.js` — change copy, names, images, stats
2. Update CSS variables in `src/index.css` — swap the color palette
3. Replace the font in `index.html` — any Google Font works

---

## Run locally

```bash
git clone https://github.com/YOUR_USERNAME/frontend-portfolio-sample.git
cd frontend-portfolio-sample
pnpm install
pnpm dev
```

## Deploy your own

Fork this repo → import in [vercel.com](https://vercel.com) → deploy. Vercel auto-detects Vite. No configuration needed.

---

## Project structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── sections/      # Hero, Features, About, Team, Testimonials, CallToAction
│   └── Icons.jsx      # Inline SVG icon set (thin-stroked)
├── data/
│   └── content.js     # All copy and image URLs — edit here
├── hooks/
│   └── useScrollReveal.js
└── index.css          # CSS variables (theming tokens)
```

---

## Technical decisions

**Vite over Next.js** — this is a static site with no SSR requirements. Vite produces lean HTML/CSS/JS output deployable anywhere, with faster builds and less configuration overhead.

**Tailwind v4** — handles all responsive layout and spacing. CSS custom properties handle runtime theming (the `data-theme` attribute approach keeps the SaaS↔Agency toggle clean and framework-agnostic).

**Inline styles for color, Tailwind for layout** — theme colors change at runtime via CSS variables so they can't live in Tailwind's static classes. Layout, spacing, and responsive behavior use Tailwind utilities to avoid specificity conflicts.

**Framer Motion** — `useInView` + `motion` variants with custom `cubic-bezier(0.32, 0.72, 0, 1)` easing simulate Apple-esque deceleration. All animations use only `transform` and `opacity` to stay on the GPU compositor thread.

---

## Roadmap

- [ ] Agency theme toggle (v2) — second palette, different copy, animated transition
- [ ] Lighthouse score badge in README
- [ ] Dark/light mode switcher

---

## License

MIT — use freely, attribution appreciated but not required.
