# E2E Test Harness

These tests protect the public behavior documented in `docs/ai-context/current-feature-baseline.md`.

They intentionally test generated site behavior instead of component internals. A redesign or refactor can change implementation details, component names, class names, and layouts while keeping these tests green if the core public functionality remains intact.

## Commands

- `npm run test:e2e`
  - Builds the site, then runs the e2e tests against `dist/`.
  - Use this before and after redesign/refactor work.
- `npm run test:e2e:static`
  - Runs the tests against the current `dist/` without rebuilding.
  - Use this for a quick check after a known-good build.

## What This Covers

- Core public routes exist.
- Homepage identity, nav, search, theme, and recent-writing entry points exist.
- Shared SEO and social metadata exist.
- All non-draft Markdown blog posts generate public article pages.
- Blog pagination reflects the archive size.
- Category and tag archive pages are generated.
- Search page exposes the client-side search surface.
- RSS, robots, and sitemap output exist and remain discoverable.
- Dough Maker product/privacy page keeps its support, metadata, and app-store contracts.
- Secondary pages keep their primary content contracts.

## What This Does Not Cover Yet

- Real browser interactions such as typing into search, toggling theme, or opening the mobile nav.
- Visual regression, responsive layout, or screenshot comparison.
- Contact form delivery.
- Third-party integrations such as Disqus, Google Analytics, Vercel Analytics, or App Store availability.

Add browser-level tests later if the project adopts Playwright or another e2e runner.
