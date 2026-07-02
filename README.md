# Tom Carpen — Portfolio

Concept portfolio website for **Tom Carpen**, a fictional Senior Graphic & UI/UX
Designer in Jakarta with a 10-year career arc through Kompas Gramedia, Tokopedia,
Gojek, and blu by BCA Digital.

> **Note:** This is a dummy/concept portfolio. Tom Carpen is not a real person, the
> case studies and metrics are fictional, and the companies are referenced as
> employer context only.

## Stack

- [Astro](https://astro.build) — static site, content collections for case studies
- [GSAP + ScrollTrigger](https://gsap.com) — scroll-driven animations
- Astro View Transitions — smooth page-to-page navigation
- No other runtime dependencies; fonts are self-hosted, imagery is generated SVG

## Local development

Requires Node.js 20+ and [pnpm](https://pnpm.io).

```bash
pnpm install    # install dependencies
pnpm dev        # dev server at http://localhost:4321
pnpm build      # production build to ./dist
pnpm preview    # preview the production build
```

## Deploying to GitHub Pages (user site)

This repo is set up to deploy automatically as a **user site**
(`https://<username>.github.io`) via GitHub Actions.

1. Create a new GitHub repository named exactly `<username>.github.io`
   (replace `<username>` with your GitHub username).
2. Update `site` in `astro.config.mjs` to `https://<username>.github.io`.
3. Run `pnpm install` once locally so `pnpm-lock.yaml` exists (the deploy action
   uses it to detect pnpm).
4. Push this project to the repo's `main` branch:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio"
   git branch -M main
   git remote add origin git@github.com:<username>/<username>.github.io.git
   git push -u origin main
   ```
5. In the repo settings, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
6. The `Deploy to GitHub Pages` workflow runs on every push to `main`. When it
   finishes, the site is live at `https://<username>.github.io`.

### Project structure

```
src/
├── components/Cover.astro      # generated SVG cover art per case study
├── content/work/*.md           # 4 case studies (content collection)
├── content.config.ts           # collection schema
├── layouts/Base.astro          # shell: nav, footer, fonts, View Transitions
├── pages/index.astro           # home: hero, about, experience, work, skills, contact
├── pages/work/[slug].astro     # case study pages
├── pages/404.astro
├── scripts/animations.js       # GSAP/ScrollTrigger, re-inits on navigation
└── styles/global.css           # design tokens (palette, type scale, spacing)
```
