# AI Workflow Rules

## Approach

Build the Noodle Theory landing page using a spec-driven and deadline-aware workflow. The context files define what to build, how to build it, and what is currently complete. Always implement against these files. Do not invent extra product behavior.

## Scoping Rules

- Work on one clear unit at a time.
- Prefer small, verifiable steps over large speculative changes.
- Do not add backend features.
- Do not add authentication.
- Do not add database logic.
- Do not add payment or real ordering logic.
- Do not combine unrelated changes in one step.
- Prioritize the required deliverables first.

## Recommended Work Units

1. Project setup and dependency confirmation.
2. Theme, layout, and global styles.
3. Hero section.
4. Menu section.
5. Location section.
6. Contact / CTA section.
7. Mobile responsiveness pass.
8. Build verification.
9. GitHub PR documentation.
10. Vercel deployment and submission write-up.

## When to Split Work

Split an implementation step if it combines:

- UI layout and deployment configuration.
- Multiple unrelated page sections with unclear requirements.
- Generated shadcn/ui component changes and custom component changes.
- Styling changes and Git workflow documentation.
- Any behavior not defined in the context files.

If a change cannot be verified quickly, the scope is too broad. Split it.

## Handling Missing Requirements

- Do not invent product behavior not defined in the context files.
- If a requirement is ambiguous, choose the simplest landing-page-friendly option.
- If a feature is not required for submission, keep it out of scope.
- If a decision must be tracked, add it to `progress-tracker.md`.
- Use fictional restaurant details when real details are not provided.

## Protected Files

Do not modify the following unless explicitly instructed:

- `components/ui/*` generated shadcn/ui internals.
- `package-lock.json`, `pnpm-lock.yaml`, or `yarn.lock` by hand.
- Vercel-generated files.
- Third-party library internals.

## Keeping Docs in Sync

Update the relevant context file when implementation changes:

- Update `project-overview.md` if product scope changes.
- Update `architecture.md` if folder structure or technical decisions change.
- Update `ui-context.md` if theme decisions change.
- Update `code-standards.md` if coding conventions change.
- Update `progress-tracker.md` after meaningful implementation progress.

## Before Moving to the Next Unit

1. The current unit works within its defined scope.
2. No invariant in `architecture.md` was violated.
3. Required sections remain present.
4. Mobile layout still works.
5. `progress-tracker.md` reflects the current state.
6. `npm run build` passes before deployment.
