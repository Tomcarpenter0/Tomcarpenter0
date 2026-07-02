# Design: tom-carpen-portfolio

## Context

Empty repo. Greenfield static portfolio site for a fictional persona, to be served from a GitHub Pages **user site** (`<username>.github.io`), so no `base` path configuration is needed. Decisions on stack, animation style, language, and career arc were settled with the user during grilling.

## Goals / Non-Goals

**Goals:**
- Awwwards-style scroll-driven portfolio that reads as a real senior designer's site.
- Multi-page: home + one page per case study, smooth transitions between them.
- Zero-cost hosting, auto-deploy on push to `main`.
- Fast: mostly static HTML, GSAP as the only runtime JS dependency.

**Non-Goals:**
- No CMS, no backend, no contact form processing (mailto + social links only).
- No real client work or licensed images — all imagery is generated (SVG/CSS gradients/mockup frames).
- No i18n — English only.
- No blog.

## Decisions

1. **Astro over Vite+React SPA** — content-heavy multi-page site; Astro ships zero JS by default, MD/MDX content collections fit case studies, first-class GitHub Pages deploy story. React islands not needed since interactivity is scroll-driven, handled by GSAP.
2. **GSAP + ScrollTrigger via npm** — de facto standard for scroll animation (free tier covers everything we need: reveals, parallax, pinning, stagger). Initialized in a small client script per page; re-initialized on `astro:page-load` so it survives View Transitions.
3. **Astro View Transitions (`<ClientRouter />`)** — native-feeling page transitions home ⇄ case study with one line, no router dependency.
4. **Case studies as a content collection** (`src/content/work/*.md`) with schema (title, company, year, role, tags, cover color, summary, metrics). One dynamic route `src/pages/work/[slug].astro` renders them. 4 case studies, one per employer era, so the portfolio corroborates the CV.
5. **Styling: plain scoped CSS + CSS custom properties** for the design system (type scale, palette, spacing). No Tailwind — a designer portfolio needs bespoke CSS anyway, and it keeps the dependency list at exactly astro + gsap.
6. **Imagery: inline SVG / CSS-drawn device mockups and abstract covers.** Keeps the repo self-contained, avoids fake screenshots that look like stolen assets, and reads as intentional art direction.
7. **Deploy: official `withastro/action` GitHub Actions workflow** → GitHub Pages (Actions source). Standard, maintained, no `gh-pages` branch juggling. Package manager is **pnpm** (user requirement); the action auto-detects it from `pnpm-lock.yaml`.
8. **Reduced motion**: gate GSAP animations behind `prefers-reduced-motion` — accessibility basics are non-negotiable.

## Risks / Trade-offs

- [GSAP + View Transitions double-init / dead triggers on navigation] → single `initAnimations()` bound to `astro:page-load`, kill existing ScrollTriggers before re-creating.
- [Fictional CV could be mistaken for a real person's] → persona name "Tom Carpen" is clearly a placeholder; footer keeps a small "concept portfolio" note. Companies are named as employers only, no fabricated confidential data or real screenshots.
- [User-site repo name unknown until repo creation] → site config uses no `base`; only `site` URL in `astro.config.mjs` needs updating when the repo is created.

## Open Questions

- GitHub username for the `site` URL — placeholder until the user creates the repo.
