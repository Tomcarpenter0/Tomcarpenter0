# Tom Carpen — Portfolio

Portfolio website for **Tom Carpen**, a Senior Product Designer based in Jakarta
with a decade of impact across editorial, e-commerce, super-apps, and digital
banking — from Kompas Gramedia to Tokopedia, Gojek, and blu by BCA Digital.

Built to tell stories. Each case study is a full narrative — problem, process,
outcome — with real metrics and honest craft.

## Stack

- **Astro** — static-first, content collections for case studies
- **GSAP + ScrollTrigger** — scroll-driven motion that follows the reader
- **Astro View Transitions** — seamless page-to-page navigation

Zero runtime bloat. Fonts are self-hosted, imagery is generated SVG, and every
animation is intentional.

## Local development

Requires Node.js 20+ and [pnpm](https://pnpm.io).

```bash
pnpm install    # install dependencies
pnpm dev        # dev server at http://localhost:4321
pnpm build      # production build to ./dist
pnpm preview    # preview the production build
```

## Project structure

```
src/
├── components/Cover.astro        # generated SVG cover art per case study
├── content/work/*.md             # 4 case studies (content collection)
├── content.config.ts             # collection schema
├── layouts/Base.astro            # shell: nav, footer, fonts, View Transitions
├── pages/index.astro             # home: hero, about, experience, work, skills, contact
├── pages/work/[slug].astro       # case study pages
├── pages/404.astro
├── scripts/animations.js         # GSAP/ScrollTrigger, re-inits on navigation
└── styles/global.css             # design tokens (palette, type scale, spacing)
```
