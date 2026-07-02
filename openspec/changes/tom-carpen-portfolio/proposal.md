# Proposal: tom-carpen-portfolio

## Why

Build a realistic-looking dummy portfolio website for "Tom Carpen", a Senior Graphic & UI/UX Designer with 10 years of experience, presenting a credible career at well-known Indonesian national companies. The site must impress visually (scroll-driven animations, smooth page transitions) and be hosted for free on GitHub Pages as a user site.

## What Changes

- New Astro project from scratch (empty repo today).
- Home page: hero, about, experience timeline, selected works, skills, contact — with GSAP/ScrollTrigger scroll animations.
- Case study pages (one per portfolio project) as Markdown/MDX content collections, linked from Selected Works, with Astro View Transitions between pages.
- Fictional-but-credible content in English for career arc: Kompas Gramedia (2016–2018, Graphic Designer) → Tokopedia (2018–2021, UI/UX Designer) → Gojek/GoTo (2021–2024, Senior Product Designer) → blu by BCA Digital (2024–now, Lead Product Designer).
- GitHub Actions workflow deploying to GitHub Pages user site (`<username>.github.io`, no base path), using pnpm.
- README with local dev (pnpm) and GitHub Pages publishing instructions.

## Capabilities

### New Capabilities
- `portfolio-site`: The static portfolio website — pages, layout, content (persona, experience, case studies), animations, responsive design.
- `pages-deploy`: Automated build & deploy to GitHub Pages via GitHub Actions on push to main.

### Modified Capabilities

None — greenfield project.

## Impact

- New codebase: Astro, GSAP (only runtime JS dependency), GitHub Actions workflow.
- No backend, no forms handling (contact is mailto/social links), no analytics.
- Placeholder imagery (SVG/CSS-generated), no licensed photos.
