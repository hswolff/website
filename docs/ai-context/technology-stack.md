# Technology Stack and Implementation Context

Last audited: 2026-06-06

This document explains what technologies are used in this codebase and how they fit together. It is intended for future AI agents before redesign, refactor, or migration work.

## Runtime and Framework

- Astro 5 is the main framework.
  - Config: `astro.config.ts`
  - Output mode: `static`
  - Site URL: `https://hswolff.com`
  - Adapter: `@astrojs/vercel`
- React is used for interactive islands.
  - `src/components/Search.tsx`
  - `src/components/ContactForm.tsx`
  - `src/components/Card.tsx`
  - `src/components/Datetime.tsx`
- TypeScript is used for Astro/React utilities and typed props.
- Markdown is the main content format for blog posts and static pages.
- MDX support is installed via `@astrojs/mdx`, though the current audited blog content is Markdown.

## Package Manager and Scripts

The repository contains both `package-lock.json` and `pnpm-lock.yaml`; current installed dependencies are under pnpm-style `node_modules/.pnpm`. Prefer `pnpm` if maintaining the existing install style, but note that `package.json` scripts are package-manager agnostic.

Important scripts:

- `npm run dev` or `pnpm dev`: run Astro dev server.
- `npm run build` or `pnpm build`: build static output.
- `npm run preview` or `pnpm preview`: preview built site.
- `npm run lint` or `pnpm lint`: run ESLint.
- `npm run format:check` or `pnpm format:check`: check Prettier formatting.
- `npm run format` or `pnpm format`: write Prettier formatting.

## Astro Integrations

Configured in `astro.config.ts`:

- `@astrojs/mdx`
  - Enables MDX support.
- `@astrojs/sitemap`
  - Generates sitemap output using `site`.
- `@astrojs/tailwind`
  - Integrates Tailwind.
  - `applyBaseStyles` is disabled, so base styling is owned by this repo.
- `@astrojs/react`
  - Enables React islands and React components.
- `@astrojs/vercel`
  - Vercel adapter.
  - Vercel Web Analytics is enabled through adapter config.

## Markdown Pipeline

Configured in `astro.config.ts`:

- `remark-toc`
  - Adds table-of-contents support for Markdown.
- `remark-collapse`
  - Collapses the "Table of contents" section.
- `plugins/remark-reading-time.js`
  - Computes reading time from Markdown AST text.
  - Writes `minutesRead` into Astro frontmatter.
- `plugins/remark-excerpt.js`
  - Takes the first 300 characters of Markdown AST text.
  - Writes `excerpt` into Astro frontmatter.
- Shiki syntax highlighting:
  - Theme: `one-dark-pro`.
  - `wrap: true`.

## Content Collections

Content collection config:

- `src/content.config.ts`
  - Defines one collection: `blog`.
  - Loads `**/*.md` from `src/content/blog`.

Schema:

- `src/content/_schemas.ts`
  - Uses Astro content + Zod.
  - Categories are strict: `code`, `personal`, `career`.
  - Required post fields: `title`, `date`, `category`, `postSlug`.
  - Optional fields: `updated`, `tags`, `draft`, `featured`, `ogImage`, `description`, `canonicalURL`.
  - Schema is `.strict()`, so unknown frontmatter fields fail validation.

## Routing Model

Astro routes live in `src/pages`.

Important routes:

- `src/pages/index.astro`: homepage.
- `src/pages/blog/index.astro`: first blog index page.
- `src/pages/blog/[slug].astro`: both blog detail pages and numeric pagination pages.
- `src/pages/blog/category/[category].astro`: category archives.
- `src/pages/blog/tags/index.astro`: tag index.
- `src/pages/blog/tags/[tag].astro`: tag archive pages.
- `src/pages/search.astro`: search page.
- `src/pages/about.md`: about page.
- `src/pages/about/contact.astro`: contact page.
- `src/pages/about/talks.astro`: talks page generated from tag `talk`.
- `src/pages/projects.md`: projects page.
- `src/pages/uses.md`: uses page.
- `src/pages/newsletter.md`: newsletter page.
- `src/pages/dough-maker.astro`: standalone product/privacy page.
- `src/pages/rss.xml.ts`: RSS feed endpoint.
- `src/pages/robots.txt.ts`: robots endpoint.
- `src/pages/[ogTitle].svg.ts`: dynamic OG SVG route, currently with no static paths.
- `src/pages/404.astro`: custom 404.

## Layouts

- `src/layouts/Layout.astro`
  - Global HTML shell.
  - Imports `src/styles/base.css`.
  - Sets global SEO, Open Graph, Twitter card, canonical, sitemap, viewport, fonts, theme script, Google Analytics, and Astro view transitions.
- `src/layouts/Main.astro`
  - Shared main content wrapper for index-like pages.
- `src/layouts/Blog.astro`
  - Blog listing layout with pagination.
- `src/layouts/BlogDetail.astro`
  - Blog post detail layout.
  - Renders content collection entries.
  - Shows title, datetime/category/reading-time metadata, tags, Disqus, and footer.
- `src/layouts/PageLayout.astro`
  - Shared layout for Markdown pages like About, Projects, Uses, and Newsletter.
  - Adds breadcrumbs.

## Components

- `Header.astro`
  - Site nav, active nav state, mobile hamburger, skip link, search link, theme toggle.
- `Footer.astro`
  - Social links and footer tagline.
- `Socials.astro`
  - Renders active social links from `SITE.SOCIALS`.
- `Card.tsx`
  - Renders a blog list item.
  - Shows title, date, and category.
- `Datetime.tsx`
  - Formats post dates using `LOCALE`.
  - Shows category link and optional reading time.
- `Search.tsx`
  - Client-side Fuse.js search.
- `ContactForm.tsx`
  - React contact form configured for Netlify forms.
  - Current submit body only includes `form-name`; name/email/message are not currently encoded.
- `Disqus.jsx`
  - Disqus comments embed for blog posts.
- `Breadcrumbs.astro`
  - Breadcrumb UI for static pages.
- `Tag.astro`
  - Tag UI and tag archive links.
- `LinkButton.astro`
  - Shared link/button styling.
- `Hr.astro`
  - Shared divider.

## Styling

- Tailwind CSS 3 is used.
  - Config: `tailwind.config.cjs`
  - Content scanning covers Astro, HTML, JS, JSX, MD, MDX, Svelte, TS, TSX, and Vue under `src`.
- Tailwind Typography is installed and used for prose content.
- Global styles live in `src/styles/base.css`.
- Design tokens are CSS custom properties:
  - Light theme values are set on `:root` and `html[data-theme='light']`.
  - Dark theme values are set on `html[data-theme='dark']`.
- Tailwind theme maps semantic color names to CSS variables:
  - `text-skin-*`
  - `bg-skin-*`
  - `border-skin-*`
  - `fill-skin-*`
  - `outline-skin-*`
- The Tailwind config defines only one breakpoint:
  - `sm: 640px`
- The Dough Maker page uses self-contained CSS in `src/pages/dough-maker.astro` rather than the shared layout/design system.

## Search

- Search uses `fuse.js`.
- Search data is built at page generation time in `src/pages/search.astro`.
- Only non-draft blog posts are included.
- Indexed fields:
  - `title`
  - `description`
- Search behavior:
  - Minimum match character length: 2.
  - Threshold: 0.5.
  - Input query is reflected into `window.location.search` as `?q=`.

## Feed, Sitemap, and Robots

- RSS:
  - Implemented in `src/pages/rss.xml.ts`.
  - Uses `@astrojs/rss`.
  - Parses Markdown body with `markdown-it`.
  - Sanitizes rendered HTML with `sanitize-html`.
  - Uses sorted posts and emits title, category, content, pubDate, and link.
  - Current implementation does not filter drafts.
- Sitemap:
  - Generated by `@astrojs/sitemap`.
- Robots:
  - Implemented by `src/pages/robots.txt.ts`.
  - Includes sitemap URL from `SITE.website`.

## Metadata and Analytics

- Global metadata is managed in `src/layouts/Layout.astro`.
- Config values live in `src/config.ts`.
- `SITE` includes website URL, author, title, description, keywords, default OG image, light/dark setting, and posts per page.
- Google Analytics is rendered through `@astrolib/analytics`.
  - Current ID: `UA-12625863-1`.
- Vercel Web Analytics is enabled in the Vercel adapter config.
- Google site verification can be injected through `PUBLIC_GOOGLE_SITE_VERIFICATION`.

## Open Graph Image Generation

- `src/utils/generateOgImage.tsx`
  - Uses `satori` to render an SVG.
  - Uses `@resvg/resvg-js` to render PNGs in production mode.
  - Fetches IBM Plex Mono font files from `1001fonts.com` at module initialization time.
  - Writes PNG files into `./dist/{title}.png` in production mode.
- `src/pages/[ogTitle].svg.ts`
  - Calls `generateOgImage()`.
  - `getStaticPaths()` currently returns `[]`, so the dynamic OG route is effectively disabled for static generation.

## Deployment Assumptions

- The Astro config targets Vercel.
- Static output is produced.
- The contact form still carries Netlify form attributes; confirm actual deployment behavior before telling users the form works.
- Generated `dist/` exists in the repo working tree but should be treated as build output unless the project intentionally commits it.

## Quality Tooling

- ESLint flat config in `eslint.config.js`.
  - Uses `@eslint/js`.
  - Uses `eslint-plugin-astro` recommended flat config.
  - Uses `@typescript-eslint/parser` for JS/TS/React files.
  - Ignores `.astro`, `.husky`, `.vercel`, `.vscode`, `.yarn`, `dist`, `node_modules`, and `public`.
- Prettier is configured through scripts.
  - Uses `prettier-plugin-astro`.
- TypeScript config lives in `tsconfig.json`.
- No automated test suite was found in `package.json`.

## Known Implementation Caveats

- `src/pages/rss.xml.ts` does not filter drafts.
- `src/components/ContactForm.tsx` does not send `name`, `email`, or `message` in its encoded POST body.
- The contact form is Netlify-style while the app is configured for Vercel.
- `src/utils/generateOgImage.tsx` fetches remote fonts at module initialization, which can make builds dependent on network availability if OG generation is re-enabled.
- `src/pages/[ogTitle].svg.ts` imports posts but returns no static paths.
- `src/config.ts` contains inactive social entries with placeholder Astro Paper URLs.
- `LOCALE` is currently `['en-EN']`.
- Some pages exist but are hidden from main nav: tag index, talks, contact, newsletter.
- `package-lock.json` and `pnpm-lock.yaml` both exist; avoid changing lockfiles casually.

## Recommended Agent Workflow

Before making redesign changes:

1. Read `docs/ai-context/current-feature-baseline.md`.
2. Read this file.
3. Inspect `src/config.ts`, `astro.config.ts`, `src/content/_schemas.ts`, and the route files under `src/pages`.
4. Decide explicitly whether hidden-but-existing surfaces become visible, remain hidden, or are removed.
5. Preserve public URLs or add redirects.
6. Run `npm run lint` or `pnpm lint`.
7. Run `npm run build` or `pnpm build` before claiming the redesign is safe.
