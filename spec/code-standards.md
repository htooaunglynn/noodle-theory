# Code Standards

## General

- Keep the implementation simple because this is a 60-minute landing page build.
- Prefer readable, maintainable components over clever abstractions.
- Do not add features outside the project scope.
- Keep content realistic but fictional.
- Use clear names for sections, components, and data.
- Fix root causes instead of adding workarounds.

## TypeScript

- Use TypeScript for all React components.
- Avoid `any`.
- Use simple interfaces or type aliases for menu items and contact data when useful.
- Keep static data typed if it is separated into constants.
- Do not over-engineer types for simple static content.

## Next.js

- Use the App Router structure.
- Prefer Server Components by default.
- Add `"use client"` only if browser interactivity is truly required.
- Keep the landing page focused in `app/page.tsx` or simple section components.
- Use `metadata` in `app/layout.tsx` for title and description.
- Avoid API routes for this project.

## React Components

- Use small section components if the page becomes long:
  - `HeroSection`
  - `MenuSection`
  - `LocationSection`
  - `ContactSection`
- Keep component props simple.
- Do not create deeply nested component trees for static content.
- Keep repeated UI patterns reusable only when it improves clarity.

## Styling

- Use Tailwind CSS utility classes.
- Use shadcn/ui components where they improve speed and polish.
- Avoid hardcoded random colors across many components.
- Prefer a consistent warm ramen-inspired palette.
- Use responsive classes such as `sm:`, `md:`, and `lg:`.
- Mobile layout must be readable without horizontal scrolling.
- Keep spacing consistent between sections.
- Buttons must have clear hover and focus states.

## shadcn/ui

- Use generated components instead of rebuilding basic UI from scratch.
- Good components for this project:
  - `button`
  - `card`
  - `badge`
  - `separator`
- Do not manually rewrite `components/ui/*` unless there is a clear reason.
- Use the Base style selected during shadcn setup.

## Accessibility

- Use semantic HTML sections.
- Use readable color contrast.
- Buttons and links must have clear text.
- Images must have meaningful `alt` text if images are used.
- Do not rely only on color to communicate important information.

## File Organization

- `app/page.tsx` — Main landing page composition.
- `app/layout.tsx` — Root layout and metadata.
- `app/globals.css` — Tailwind and global theme styles.
- `components/sections/` — Optional section components.
- `components/ui/` — shadcn/ui generated components.
- `lib/data.ts` — Optional static menu and business data.
- `context/` — AI planning and workflow documents.

## Verification

Before final submission:

- Run the formatter if configured.
- Run lint if configured.
- Run `npm run build`.
- Check mobile viewport.
- Confirm all required content is visible.
- Confirm the deployed Vercel URL works.
