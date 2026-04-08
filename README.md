# matias caliz — portfolio

Personal portfolio website built with [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and [Preact](https://preactjs.com).

**Live:** _coming soon_

## Stack

| Technology | Why |
|---|---|
| **Astro 5** | Static-first, zero JS by default, View Transitions for SPA-like navigation |
| **Tailwind CSS 4** | Utility-first CSS with custom design tokens via `@theme` |
| **Preact** | Lightweight interactive components (terminal) — 3KB runtime |
| **TypeScript** | Type-safe data layer and components |

## Features

- **Interactive dot grid** — Canvas 2D hero background that reacts to mouse movement
- **Typing effect** — Rotating roles with typewriter animation
- **Interactive terminal** — Preact component with commands (`about`, `skills`, `projects`, `contact`, etc.)
- **View Transitions** — SPA-like page transitions with Astro's `ClientRouter`
- **Prefetch** — All pages preloaded on viewport intersection for instant navigation
- **Dark/light mode** — System preference detection + manual toggle with localStorage persistence
- **Scroll reveal animations** — Intersection Observer-based fade-in-up on all sections
- **Responsive** — Mobile menu with animated hamburger-to-X transition
- **Accessible** — `prefers-reduced-motion` support, semantic HTML, proper heading order, color contrast AA+

## Project structure

```
src/
├── components/
│   ├── ProjectCard.astro     # Project grid card with hover effects
│   └── Terminal.tsx           # Interactive terminal (Preact)
├── data/
│   ├── projects.ts            # Project definitions and helpers
│   └── experience.ts          # Career timeline data
├── layouts/
│   └── Layout.astro           # Base layout (header, footer, transitions, scripts)
├── pages/
│   ├── index.astro            # Homepage (hero, intro, terminal, featured projects)
│   ├── projects.astro         # Project grid with category filters
│   ├── projects/[slug].astro  # Dynamic case study pages
│   ├── experience.astro       # Career timeline + education
│   └── about.astro            # Personal story + sidebar
└── styles/
    └── global.css             # Design tokens, dark mode, animations
```

## Getting started

**Prerequisites:** Node.js >= 22 (use `nvm use` to pick up `.nvmrc`)

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Lighthouse scores

| Category | Score |
|---|---|
| Performance | 93 |
| Accessibility | 95 |
| Best Practices | 100 |
| SEO | 100 |

## Deployment

The `dist/` directory contains static HTML, CSS, and JS — deploy it to any static hosting provider.

```bash
npm run build
# Upload dist/ to your server
```

## License

MIT

---

Built by [Matias Caliz](https://github.com/mati-caliz)
