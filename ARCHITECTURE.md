# Architecture

A static personal site (`jakobnordhagen.com`) built with Next.js 15 and deployed to GitHub Pages.

## Stack

- **Next.js 15 (App Router)** + **React 19** with **TypeScript**
- **Tailwind CSS** for styling, with `Inter` (sans) + `Fraunces` (serif) via `next/font`
- **MDX** for project content via `next-mdx-remote/rsc` + `gray-matter`
- **GitHub Actions** → **GitHub Pages** for hosting

## Layout

```
app/                 # App Router routes (all server components)
  layout.tsx         # Root layout: fonts, <Nav>, <Footer>
  page.tsx           # Home: hero + featured projects
  projects/
    page.tsx         # All projects index
    [slug]/page.tsx  # Per-project MDX page (statically generated)
  resume/page.tsx
components/          # Presentational components (Nav, Footer, ProjectCard, ...)
lib/projects.ts      # MDX content loader (fs + gray-matter)
content/projects/    # One .mdx file per project (frontmatter + body)
.github/workflows/   # CI: build + deploy to gh-pages
```

## Key decisions

### 1. Static export (`output: 'export'`)

`next.config.js` sets `output: 'export'` so `next build` emits a fully static site into `out/`. This is what allows hosting on GitHub Pages — no Node runtime, no server functions. Consequences:

- Dynamic routes (`/projects/[slug]`) must declare `generateStaticParams`
- `next/image` is set to `unoptimized: true` (no Image Optimization API at runtime)
- No API routes, no server actions, no ISR — everything is built ahead of time

### 2. MDX-as-content, filesystem as CMS

Projects live as `.mdx` files in `content/projects/` with YAML frontmatter (`title`, `description`, `tags`, `date`, `featured`, optional `github`/`live`). [lib/projects.ts](lib/projects.ts) reads the directory synchronously at build time and exposes `getAllProjects`, `getProjectBySlug`, `getFeaturedProjects`.

Why: no database, no headless CMS, no admin UI to maintain. Adding a project = adding a Markdown file and pushing to `main`.

### 3. Server components everywhere

There are no `"use client"` directives in the app — all pages and components are RSCs that render to static HTML. Filesystem access in `lib/projects.ts` works because it only runs at build time.

### 4. Design system in Tailwind config, not CSS

Two custom tokens are defined in [tailwind.config.ts](tailwind.config.ts) (`ink` for text, `accent` for amber highlights) and used directly as utility classes. The only hand-written CSS lives in [app/globals.css](app/globals.css) and is restricted to: (a) base typography defaults, and (b) the `.prose-mdx` component class for styling rendered MDX bodies (since the MDX HTML has no Tailwind classes of its own).

### 5. Deploy on push to `main`

[.github/workflows/deploy.yml](.github/workflows/deploy.yml) checks out, installs, builds, and publishes `out/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`. Custom domain (`jakobnordhagen.com`) is pinned via the `cname` field on the deploy action. The `.next/cache` directory is cached between runs to speed up incremental builds.

## Adding content

- **New project**: drop `content/projects/<slug>.mdx` with the required frontmatter. It appears on `/projects` automatically; set `featured: true` to also surface it on the home page.
- **Sort order**: projects are sorted by frontmatter `date` descending (string compare on `YYYY-MM`).
