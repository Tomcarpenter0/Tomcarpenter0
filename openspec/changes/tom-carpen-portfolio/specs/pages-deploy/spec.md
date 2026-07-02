# pages-deploy

## ADDED Requirements

### Requirement: Automated deploy to GitHub Pages
The repository SHALL contain a GitHub Actions workflow that builds the Astro site with pnpm and deploys it to GitHub Pages on every push to `main`, using the official `withastro/action` and GitHub Pages deploy actions.

#### Scenario: Push to main
- **WHEN** a commit is pushed to `main`
- **THEN** the workflow builds the site and publishes it to GitHub Pages without manual steps

### Requirement: User-site URL configuration
The Astro config SHALL set `site` to the GitHub Pages user-site URL (`https://<username>.github.io`) and MUST NOT set a `base` path, so all links and assets resolve from the domain root.

#### Scenario: Local build output
- **WHEN** `pnpm build` runs
- **THEN** generated links and asset URLs are root-relative (no repo-name subpath)

### Requirement: README with setup and deploy instructions
The repository SHALL contain a `README.md` documenting the project, local development commands (pnpm install/dev/build/preview), and step-by-step instructions to publish it on GitHub Pages as a user site (create `<username>.github.io` repo, push, enable Pages with GitHub Actions source, update `site` in `astro.config.mjs`).

#### Scenario: New user follows the README
- **WHEN** someone clones the repo and follows the README
- **THEN** they can run the site locally with pnpm and deploy it to their own `<username>.github.io` without extra knowledge
