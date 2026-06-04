# Frontend Portfolio Sample — Plan de Proyecto

**Fecha:** 2026-06-04  
**Estado:** Planeación  
**Deploy target:** Vercel (via GitHub CI/CD)

---

## Objetivo

Landing page multi-sección que sirva como prueba de habilidades frontend para aplicaciones en Freelancer.com. El link va directo en cover letters cuando el brief pide "Figma-to-code", landing pages o trabajo front estático/semi-dinámico.

**Audiencia real:** Clientes no técnicos que evalúan portafolios en 30 segundos. El site tiene que impresionar visualmente antes de que lean una línea de código.

---

## Decisiones de stack

### React + Vite (no vanilla)

**Por qué React y no vanilla:**
- Los briefs que pagan bien en Freelancer casi siempre mencionan React, Next.js o "framework moderno"
- El código con componentes es más legible para clientes que van a mostrarle el repo a otro dev
- Vite da HMR rápido y build optimizado sin config overhead

**Por qué Vite y no Next.js:**
- Este es un sitio estático — no necesita SSR ni routing de páginas
- Build output es HTML/CSS/JS puro → deploy trivial en Vercel o cualquier hosting
- Menos dependencias, menos superficie de ataque

**Styling: Tailwind CSS**
- Clases utilitarias = HTML legible para clientes que inspeccionan el código
- Responsive mobile-first integrado, sin escribir media queries custom
- JIT compiler → CSS final minúsculo

**Animaciones: Framer Motion**
- Scroll reveal y hover states con API declarativa (no imperative scroll listeners)
- Alternativa considerada: CSS puro con `@keyframes`. Descartado: Framer Motion da más control y el bundle no es prohibitivo para un sitio vitrina.

**Deploy: GitHub → Vercel (automático)**
- Cada push a `main` dispara deploy en Vercel
- Preview deployments en cada PR (útil si el cliente quiere revisar cambios antes de merge)
- HTTPS automático, CDN global, sin configuración manual

---

## Secciones del sitio

El orden sigue el flujo de conversión estándar de landing pages: captura atención → genera confianza → muestra valor → llama a la acción.

```
1. Navbar          — fijo, scroll-aware (transparente → sólido al bajar), CTA button
2. Hero            — headline + subhead + CTA + visual (imagen/ilustración o gradiente animado)
3. Features        — 3 o 6 cards con íconos, grilla responsive
4. About / Story   — sección narrativa con imagen lateral
5. Team            — cards de personas con foto, nombre, rol (puede ser ficticio/placeholder)
6. Testimonials    — carrusel o grid de quotes (placeholder content realista)
7. CTA final       — banner de conversión antes del footer
8. Footer          — links, social icons, copyright
```

**Nota sobre el contenido:** Todo el copy y las imágenes van a ser placeholder realistas (Lorem Ipsum de alta calidad, fotos de Unsplash con license). El punto es el código y el diseño, no el contenido.

---

## Sistema de diseño

Definir antes de codear:

| Token          | Decisión                                        |
|----------------|-------------------------------------------------|
| Colores        | Paleta de 2 colores principales + neutral dark/light + accent |
| Tipografía     | Inter (Google Fonts) — legible, profesional, free |
| Espaciado      | Sistema de 4px base (Tailwind default)          |
| Border radius  | `rounded-xl` como estándar (16px) para cards    |
| Sombras        | Tailwind `shadow-lg` para cards, `shadow-2xl` para elementos elevados |

**Referencia de inspiración a consultar antes de codear:**
- Dribbble: "SaaS landing page" — identificar patrones de layout comunes
- Framer Templates — ver qué animaciones funcionan a escala real
- Linear.app / Vercel.com — referencia de calidad para gradientes y tipografía

---

## Seguridad (frontend-only pero no ignorable)

Aunque no hay backend, el sitio tiene superficie de ataque real:

### Dependencias
- `pnpm audit` antes de cada commit importante
- No instalar paquetes sin verificar maintainer y weekly downloads
- Lockfile (`pnpm-lock.yaml`) commiteado — evita supply chain attacks por floating versions

### Headers HTTP (configurados en `vercel.json`)
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        { "key": "Content-Security-Policy", "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data: https://images.unsplash.com;" }
      ]
    }
  ]
}
```

### GitHub
- Branch protection en `main`: require PR + status check antes de merge
- No secrets en el código (aunque sea frontend — no meter API keys de analytics hardcodeadas)
- Variables de entorno en Vercel dashboard, nunca en el repo

### Dependencias de terceros
- Google Fonts cargado con `rel="preconnect"` + `display=swap` — no dejar que un CDN lento bloquee el render
- Imágenes de Unsplash: usar URLs directas solo en desarrollo, en producción considerar descargar y servir estáticas

---

## Estructura del repo

```
frontend-portfolio-sample/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── Features.jsx
│   │       ├── About.jsx
│   │       ├── Team.jsx
│   │       ├── Testimonials.jsx
│   │       └── CallToAction.jsx
│   ├── hooks/
│   │   └── useScrollReveal.js      ← hook custom para animaciones scroll
│   ├── data/
│   │   └── content.js              ← todo el copy en un solo lugar (fácil de customizar)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── docs/
│   └── PLAN.md                     ← este archivo
├── .github/
│   └── workflows/
│       └── ci.yml                  ← lint + build check en cada PR
├── vercel.json                     ← headers de seguridad + config de deploy
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.js
├── vite.config.js
└── README.md
```

**Principio clave:** `content.js` centraliza todo el texto y URLs de imágenes. Cuando un cliente quiera customizar el contenido, toca un solo archivo — esto es parte del pitch de "código mantenible".

**Estructura de contenido dual (SaaS + Agency):**
```js
// content.js
export const themes = {
  saas: {
    hero: { headline: "Ship faster, scale smarter", ... },
    features: [...],
    // ...
  },
  agency: {
    hero: { headline: "We make brands unforgettable", ... },
    features: [...],
    // ...
  }
}
```
Los componentes consumen `themes[activeTheme]` — sin condicionales en JSX, solo datos distintos.

---

## GitHub Actions CI

En cada PR, el workflow verifica:
1. `pnpm install --frozen-lockfile` — instala exactamente lo del lockfile
2. ESLint — catch errores y estilo antes de merge
3. `pnpm build` — verifica que el build de producción no rompe

Si cualquier paso falla, el PR no puede mergearse.

---

## README (pitch document)

El README es parte del producto — lo van a leer clientes. Estructura:

1. **Demo link** (Vercel) — primero y grande
2. **Screenshot** — antes de cualquier texto
3. **Stack** — lista corta, sin sobre-explicar
4. **Cómo customizar** — 3 pasos para cambiar el contenido (`content.js`)
5. **Deploy propio** — fork + Vercel en 2 clicks
6. **Decisiones técnicas** — párrafo breve justificando las elecciones

---

## Criterios de "listo para mostrar"

El proyecto está listo cuando:

- [ ] Build de producción sin warnings en consola
- [ ] Lighthouse score: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 90
- [ ] Responsive verificado en: 375px (iPhone SE), 768px (iPad), 1280px (desktop), 1920px (wide)
- [ ] Animaciones no causan layout shift (CLS = 0 en Core Web Vitals)
- [ ] Headers HTTP de seguridad verificados con securityheaders.com
- [ ] `pnpm audit` sin vulnerabilidades high/critical
- [ ] README con screenshot actualizado y link de demo funcionando
- [ ] Repo público en GitHub con descripción y topics relevantes (`react`, `vite`, `tailwindcss`, `landing-page`, `portfolio`)

---

## Fases de trabajo

> Las fases 1–5 entregan el sitio SaaS completo como primer producto funcional.
> Las fases 6–7 son extensión incremental que agrega el tema Agency sin romper nada.

---

### BLOQUE 1 — SaaS (primer push público)

#### Fase 1 — Setup y esqueleto (1 sesión)
- Init Vite + React
- Instalar y configurar Tailwind
- Instalar Framer Motion
- Setup ESLint
- Crear estructura de carpetas
- Componentes vacíos con layout básico
- Conectar GitHub → Vercel (deploy automático desde el primer commit)

#### Fase 2 — Diseño y tokens SaaS (1 sesión)
- Paleta SaaS en `tailwind.config.js`: dark navy/azul eléctrico, tipografía geométrica (Inter)
- CSS custom properties base: `--color-bg`, `--color-primary`, `--color-text`, etc.
- Elegir assets de Unsplash: mockup de dashboard, foto de equipo tech
- Armar `content.js` → objeto `themes.saas` con copy placeholder realista
- Codear Navbar + Footer con estilos SaaS

#### Fase 3 — Secciones SaaS (2-3 sesiones)
- Hero con animación de entrada (mockup de producto)
- Features grid (6 cards con íconos)
- About con layout de dos columnas
- Team cards
- Testimonials
- CTA final

#### Fase 4 — Pulido y seguridad (1 sesión)
- Scroll reveal con Framer Motion en todas las secciones
- Hover states en todos los elementos interactivos
- Responsive verificado: 375px / 768px / 1280px / 1920px
- `vercel.json` con headers de seguridad
- GitHub Actions CI
- Lighthouse audit y fixes
- `pnpm audit`

#### Fase 5 — Documentación y launch SaaS (1 sesión)
- Screenshot para el README
- README final con link de demo
- Topics en el repo de GitHub
- Verificar securityheaders.com
- **Site en producción — listo para cover letters**

---

### BLOQUE 2 — Agency theme (extensión incremental)

#### Fase 6 — Sistema de theming + contenido Agency (1 sesión)
- Implementar `ThemeContext` + hook `useTheme()`
- CSS custom properties extendidas: segunda paleta completa (colores bold/expresivos, tipografía con carácter — ej. Playfair Display o Space Grotesk para headings)
- `data-theme` attribute en el root element — Tailwind y CSS vars reaccionan a él
- Armar `themes.agency` en `content.js`: copy, imágenes (portfolio/arte en lugar de dashboards), textos de secciones
- Toggle button con animación Framer Motion — este botón es el showcase, tiene que ser memorable
- Verificar que ambos temas pasen Lighthouse y se vean correctos en todos los breakpoints

#### Fase 7 — Documentación dual y re-launch (½ sesión)
- Actualizar README con GIF o dos screenshots (uno por tema)
- Agregar topics: `theming`, `css-variables`, `dual-theme`
- Actualizar descripción del repo en GitHub
- Re-verificar securityheaders.com post-deploy
- **Site v2 en producción — dos casos de uso en un solo link**
