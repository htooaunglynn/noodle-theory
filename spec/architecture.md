# Architecture Context

## Stack

| Layer | Technology | Role |
| --- | --- | --- |
| Framework | Next.js 16 | App Router framework for the landing page |
| Language | TypeScript | Type safety and maintainable React code |
| UI | React | Component-based UI implementation |
| Styling | Tailwind CSS | Utility-first styling and responsive layout |
| Components | shadcn/ui | Reusable UI components such as Button, Card, Badge, and Separator |
| Animation | Framer Motion | Smooth component entrance, hover, and ambient landing page motion |
| Component Style | Base | shadcn/ui style choice for clean component defaults |
| Visual Direction | Sera | Warm, modern, editorial restaurant aesthetic |
| Icons | Lucide React | Lightweight stroke icons for UI details |
| Version Control | GitHub | Repository, feature branch, Pull Request, and merge workflow |
| Deployment | Vercel | Hosting and production deployment |

## System Boundaries

- `app/` — Owns Next.js routes, page entry, global layout, metadata, and global styles.
- `components/` — Owns custom landing page sections and shared page components.
- `components/ui/` — Owns generated shadcn/ui components. Do not manually rewrite generated internals unless required.
- `lib/` — Owns small utilities and static data helpers.
- `context/` — Owns planning, architecture, UI rules, workflow rules, and progress tracking.
- `public/` — Owns static images and public assets if used.

## Data Model

This project uses static local data only.

- Menu items live in a local TypeScript array or inside the page/component file.
- Hours, phone number, and address are static content.
- No database is required.
- No external API is required.
- No backend route handlers are required.

## Deployment Model

- The site is deployed as a static-friendly Next.js application on Vercel.
- Production deployment must be publicly accessible.
- The final submitted URL should be the Vercel live URL.

## Git Workflow

1. Create or use a GitHub repository.
2. Create a feature branch named `feat/landing-page`.
3. Commit landing page work with clear commit messages.
4. Open a Pull Request from `feat/landing-page` into `main`.
5. Document what was built in the PR description.
6. Merge the PR.
7. Deploy to Vercel.

## Auth and Access Model

- No authentication is required.
- No user roles are required.
- No protected pages are required.
- All content is public.

## Invariants

1. The app must remain a static restaurant landing page for this deadline.
2. Do not add backend, database, authentication, payment, or CMS features.
3. All required sections must remain visible and accessible on mobile.
4. The `Order Now` button must be present in the hero or CTA section.
5. Generated shadcn/ui components in `components/ui/` should not be heavily modified.
6. The build must pass before deployment.
7. Do not use real business claims, real phone numbers, or real addresses unless explicitly provided.
