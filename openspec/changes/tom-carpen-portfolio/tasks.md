# Tasks: tom-carpen-portfolio

## 1. Project Setup

- [x] 1.1 Scaffold Astro project with pnpm (minimal template), add `gsap` dependency
- [x] 1.2 Configure `astro.config.mjs` (`site: https://<username>.github.io`, no base) and base layout with `<ClientRouter />` for View Transitions
- [x] 1.3 Create design system in global CSS (custom properties: palette, type scale, spacing) and self-hosted/system font stack

## 2. Content

- [x] 2.1 Define `work` content collection schema (title, company, year, role, tags, cover, summary, metrics)
- [x] 2.2 Write 4 case studies in English, one per employer era: Kompas Gramedia (editorial/brand design), Tokopedia (e-commerce UX), Gojek (super-app feature), blu by BCA Digital (digital banking) — each with problem, process, outcome + plausible metrics
- [x] 2.3 Create inline-SVG/CSS cover art and device-mockup visuals per case study

## 3. Pages & Sections

- [x] 3.1 Home page: hero (name, title, scroll cue), about, experience timeline (4 roles, reverse-chronological), selected works grid, skills, contact (mailto + socials), footer with concept-portfolio note
- [x] 3.2 Case study dynamic route `/work/[slug]/` rendering the collection, with back-home navigation
- [x] 3.3 Custom 404 page
- [x] 3.4 Responsive pass 360px → desktop, no horizontal overflow

## 4. Animations

- [x] 4.1 GSAP + ScrollTrigger init module bound to `astro:page-load`, killing stale triggers on navigation
- [x] 4.2 Home animations: hero intro, section reveals, timeline stagger, works-grid parallax
- [x] 4.3 Case study animations: header reveal, content section reveals
- [x] 4.4 `prefers-reduced-motion` gate — content fully visible without animation

## 5. Deploy & Docs

- [x] 5.1 GitHub Actions workflow: `withastro/action` (pnpm auto-detected) + Pages deploy on push to `main`
- [x] 5.2 README: project intro, pnpm dev/build/preview commands, step-by-step GitHub Pages user-site publishing guide
- [ ] 5.3 Verify `pnpm build` output: root-relative URLs, all pages generated, no external runtime resources
