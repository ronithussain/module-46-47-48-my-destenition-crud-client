<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project notes

Next.js 16 App Router under `src/app` (there is no root `app/`). `@/*` maps to `src/*`.

## Commands

- `npm run dev` — Turbopack dev server on `:3000`.
- `npm run build` — production build; also runs TypeScript and can take over a minute.
- `npm start` — production server.
- `npm run lint` — ESLint over the repo; use `npx eslint <path>` for a focused run.
- `npx tsc --noEmit` — quick typecheck (no `typecheck` script exists).
- No test runner is configured; do not assume `npm test` exists.
- Use npm (`package-lock.json`). `cn@0.5` requires Node 22+.

## Framework settings that change how you write code

`next.config.ts` sets `cacheComponents: false`, `partialPrefetching: false`, `reactCompiler: true`, and compiles CSS through `@tailwindcss/turbopack`. Remote images are restricted to `images.unsplash.com`.

Because `cacheComponents` is off, route segment exports like `dynamic`, `revalidate`, `fetchCache`, `runtime` are not gated by the cache-component rules; wrap dynamic data in `<Suspense>` as needed.

`LayoutProps<"/">`, `PageProps`, etc. are generated route types. After adding/moving routes, let `next dev` or `next build` regenerate them before trusting type errors.

Dev/build output flags instant-navigation issues; these are validation insights, not necessarily build failures.

## Auth & data layer

Auth is `better-auth` with the MongoDB adapter (`@better-auth/mongo-adapter`).

- Server: `src/lib/auth.ts` (`betterAuth`, email/password + Google). Client: `src/lib/auth-client.ts` (`createAuthClient`).
- API route: `src/app/api/auth/[...all]/route.ts` handles all `/api/auth/*` endpoints.
- Required env vars (all in the gitignored `.env`; no `.env.example` is committed): `MONGODB_URI`, `GOOGLE_CLIENT`, `GOOGLE_SECRET`, `BETTER_AUTH_URL`. Create `.env` locally before auth flows work.
- Database name is `wanderlastDB`.
- There is no Next.js data layer for destinations yet. The add-destination form posts to `http://localhost:5000/add-destination` — an external backend on port 5000, **not** a Next.js API route.

## Routes

- `/` — home (`page.tsx`: Banner, WhyChoose, Testimonials, ReadyToStart)
- `/(auth)/{login, signUp, profile}`
- `/add-destination` — client form (`"use client"`), shadcn inputs, posts to `:5000/add-destination`
- `/all-destination` and `/all-destination/[destinationId]`
- `/my-booking`
- `loading.tsx`, `not-found.tsx`, `favicon.ico` live at `src/app/` root

## UI conventions

- `src/components/ui/*` are shadcn-generated for style `base-nova`, built on `@base-ui/react` **not** Radix — don't port Radix examples.
- Generated components import `cn` from the `cn` package. `src/lib/utils.ts` only re-exports it; keep the `cn` import when editing these files.
- Add components via `npx shadcn add <component>` so it follows `components.json` (`src/app/globals.css`, `@/components/ui`, Lucide icons).
- Tailwind is v4 and CSS-first: no `tailwind.config.*`. Theme tokens live in `src/app/globals.css` (`@theme inline`, `:root`, `.dark`). Don't add PostCSS/Tailwind config files.
- `src/app/layout.tsx` renders `Navbar`, `Footer`, and a `sonner` `Toaster` for every route; individual pages should not import them again.

## Build artifacts (gitignored — do not commit)

`.next/`, `out/`, `build/`, `next-env.d.ts`, `tsconfig.tsbuildinfo`, `.env*`, `node_modules`. `tsconfig.json` still references `next-env.d.ts` and `.next/types` in its `include`, but they are generated/ignored.
