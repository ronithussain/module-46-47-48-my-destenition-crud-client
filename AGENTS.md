<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project notes

App Router project under `src/app` (there is no root `app/`). `@/*` maps to `src/*`.

## Commands

- `npm run dev` — Turbopack dev server on `:3000`.
- `npm run build` — production build; also runs TypeScript and can take over a minute on this machine.
- `npx tsc --noEmit` — quick typecheck (no `typecheck` script exists).
- `npm run lint` — ESLint over the repo; use `npx eslint <path>` for a focused run.
- No test runner is configured; do not assume `npm test` exists.
- Use npm (`package-lock.json`). `cn@0.5` requires Node 22+.

## UI conventions

- `src/components/ui/*` are shadcn-generated for style `base-nova`. They are built on `@base-ui/react`, **not** Radix — don't port Radix examples.
- Generated components import `cn` from the `cn` package. `src/lib/utils.ts` only re-exports it; keep the `cn` import when editing these files.
- Add components via the installed CLI (`npx shadcn add <component>`) so it follows `components.json` (`src/app/globals.css`, `@/components/ui`, Lucide icons).
- Tailwind is v4 and CSS-first: there is no `tailwind.config.*`. Theme tokens live in `src/app/globals.css` (`@theme inline`, `:root`, `.dark`). Don't add PostCSS/Tailwind config files.

## Framework settings that change how you write code

`next.config.ts` enables `cacheComponents`, `partialPrefetching`, `reactCompiler`, and compiles CSS through `@tailwindcss/turbopack`.

- With Cache Components on, route segment exports `dynamic`, `dynamicParams`, `revalidate`, `fetchCache`, and `runtime` are unavailable. Wrap dynamic data in `<Suspense>` or use `"use cache"`; use `export const instant = false` to opt a route out. See `node_modules/next/dist/docs/01-app/01-getting-started/08-caching.md` and `node_modules/next/dist/docs/01-app/02-guides/migrating-to-cache-components.md`.
- `LayoutProps<"/">`, `PageProps`, etc. are generated route types. After adding/moving routes, let `next dev` or `next build` regenerate them before trusting type errors.
- Dev/build output flags instant-navigation issues; these are validation insights, not necessarily build failures.

## Current state

- The homepage is composed of `src/components/Navbar.tsx`, `Banner.tsx`, `WhyChoose.tsx`, `Testimonials.tsx`, `ReadyToStart.tsx`, and `Footer.tsx`. Testimonials use the shadcn `Carousel` (`embla-carousel-react`).
- `src/app/layout.tsx` renders `Navbar` and `Footer` for every route; individual pages should not import them again.
- `src/app/add-destination/page.tsx` is a static add-package form built with shadcn `Input`, `Label`, `Select`, `Textarea`, and `Button`.
- There is no data layer, API route, or database dependency yet — the "CRUD" app is unbuilt, so don't assume existing models or endpoints.
