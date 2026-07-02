# portfolio-site

## ADDED Requirements

### Requirement: Home page presents the persona
The site SHALL serve a home page presenting Tom Carpen as a Senior Graphic & UI/UX Designer with 10 years of experience, containing hero, about, experience timeline, selected works, skills, and contact sections, written in English.

#### Scenario: Visitor opens the home page
- **WHEN** a visitor loads `/`
- **THEN** they see a hero with name, title, and a scroll cue, followed by about, experience, selected works, skills, and contact sections in order

### Requirement: Experience timeline reflects the agreed career arc
The experience section SHALL list exactly four roles in reverse-chronological order: Lead Product Designer at blu by BCA Digital (2024–Present), Senior Product Designer at Gojek (2021–2024), UI/UX Designer at Tokopedia (2018–2021), Graphic Designer at Kompas Gramedia (2016–2018), each with a short credible description of responsibilities.

#### Scenario: Visitor reads the timeline
- **WHEN** a visitor scrolls to the experience section
- **THEN** all four roles appear with company, title, period, and description, most recent first

### Requirement: Case studies as individual pages
The site SHALL provide four case study pages, one per employer era, rendered from a content collection and linked from the Selected Works section. Each case study MUST include title, company, year, role, summary, problem, process, and outcome with plausible metrics.

#### Scenario: Visitor opens a case study
- **WHEN** a visitor clicks a project card in Selected Works
- **THEN** they navigate to `/work/<slug>/` showing the full case study and a link back home

#### Scenario: Invalid slug
- **WHEN** a visitor requests a work slug that does not exist
- **THEN** the site returns the 404 page

### Requirement: Scroll-driven animations
Pages SHALL use GSAP ScrollTrigger for reveal/parallax/stagger animations on section entry, and Astro View Transitions for navigation between pages. Animations MUST re-initialize correctly after client-side navigation.

#### Scenario: Scrolling the home page
- **WHEN** a visitor scrolls down the home page
- **THEN** sections animate into view as they enter the viewport

#### Scenario: Navigating between pages
- **WHEN** a visitor navigates home → case study → home
- **THEN** transitions are animated and scroll animations still work on every page

#### Scenario: Reduced motion preference
- **WHEN** a visitor has `prefers-reduced-motion: reduce`
- **THEN** content is fully visible without scroll animations

### Requirement: Responsive and self-contained
The site SHALL be responsive from 360px to desktop widths and MUST NOT depend on external runtime resources except self-hosted/system fonts; imagery is inline SVG or CSS-generated.

#### Scenario: Mobile viewport
- **WHEN** the site is viewed at 360px width
- **THEN** all sections render without horizontal overflow and navigation remains usable

### Requirement: Concept-portfolio disclosure
The footer SHALL include a short note that this is a concept/dummy portfolio, so the fictional CV is not mistaken for a real person's record.

#### Scenario: Visitor reads the footer
- **WHEN** a visitor scrolls to the footer on any page
- **THEN** a "concept portfolio" note is visible
