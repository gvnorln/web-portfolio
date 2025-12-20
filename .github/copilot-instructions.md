<!-- .github/copilot-instructions.md: Project-specific guidance for AI coding agents -->

# Assistant Instructions — Web Portfolio (Next.js + Tailwind)

Purpose: give concise, actionable guidance so an AI coding agent is immediately productive in this repo.

- Quick facts
  - Framework: Next.js (app directory, Next v15.x). See [next.config.mjs](next.config.mjs).
  - Styling: Tailwind CSS with dark mode via `class`. See [tailwind.config.js](tailwind.config.js).
  - Scripts: `npm run dev` (uses `next dev --turbopack`), `npm run build`, `npm run start`, `npm run lint` (see `package.json`).

- Big picture / architecture
  - Entry: `app/layout.js` wraps the site and provides `DarkModeProvider` from `context/DarkModeContext.js`.
  - Pages: single-page portfolio composed in `app/page.js` which imports multiple client components from `components/`.
  - Components: interactive UI lives in `components/*` (many are client components — they include the literal string `"use client"`). Examples: `Navbar.js`, `Contact.js`, `Projects.js`.
  - Public assets: static images live under `public/images/` and are consumed with Next `Image` in `components/Projects.js`.

- Important patterns to follow (observable in code)
  - Client vs Server: Files containing `"use client"` are interactive. Avoid using browser globals (window/document) in files that are not client components. Example: `Contact.js`, `Navbar.js`, and `Projects.js` are client components.
  - Dark mode: `context/DarkModeContext.js` toggles dark mode by calling `document.documentElement.classList.toggle('dark')`. The provider is mounted in `app/layout.js` — prefer toggling via the existing `useDarkMode()` hook rather than manipulating classes elsewhere.
  - Fonts: `app/layout.js` loads Google fonts with next/font and exposes CSS variables (`--font-inter`, `--font-roboto-mono`) applied to `<body>`.
  - Animations & viewport: Framer Motion (`framer-motion`) + `react-intersection-observer` are used for reveal animations; follow existing `motion` + `useInView` patterns.
  - Forms: Contact form uses `@formspree/react` — the project uses form id `xovjovrp` in `components/Contact.js`. Tests/changes to form behavior should preserve or intentionally replace that id.
  - Performance: `next/image` is used with local images. `next.config.mjs` is currently empty — do not assume external image domains are configured.

- Project-specific gotchas and conventions
  - Dev server: `npm run dev` invokes Turbopack (`--turbopack`). If debugging dev-server behavior, try removing `--turbopack` to fall back to webpack: `next dev`.
  - Tailwind content: `tailwind.config.js` currently lists `./pages/**/*` and `./components/**/*` but this project uses `app/`. When adding new classes, update `tailwind.config.js` to include `./app/**/*.{js,jsx,ts,tsx}` to avoid missing styles in production builds.
  - Dark-mode class strategy: the project uses `darkMode: 'class'` so toggling depends on the `dark` class on the root element; follow the provider's approach.
  - Accessibility: interactive controls include `aria-label` — keep them when modifying UI.

- Files to reference for examples
  - `app/layout.js` (root layout, font + DarkModeProvider)
  - `app/page.js` (page composition / where sections are assembled)
  - `context/DarkModeContext.js` (dark-mode provider + hook)
  - `components/Navbar.js` (desktop vs mobile menu pattern; dark-mode button)
  - `components/Contact.js` (Formspree integration; input/label pairing + ValidationError)
  - `components/Projects.js` (use of `next/image`, local images, and tech icon mapping)

- Recommended behavior for the assistant when editing code
  - Keep changes minimal and focused — preserve font variable usage and `DarkModeProvider` placement.
  - Follow existing component patterns: prefer `useMemo` / `useCallback` / `memo` when mirroring existing optimizations.
  - When introducing new Tailwind classes, update `tailwind.config.js` content paths.
  - For changes affecting build/dev commands or Next config, add a short note in `README.md` and tests (if any).

If anything above is unclear or you want me to expand a section (examples, PR checklist, or Tailwind/Next config recommendations), tell me which parts to iterate on.
