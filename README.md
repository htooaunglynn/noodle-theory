# Noodle Theory AI Context Files

This folder contains the project context documents for building the **Noodle Theory** restaurant landing page with an AI code editor such as Codex.

The goal of these files is to keep the AI agent focused, consistent, and fast during the 60-minute build. Before writing code, the agent should read these files and follow them as the source of truth.

## Project Summary

**Noodle Theory** is a fictional ramen shop landing page built with:

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Base component style
- Sera visual direction
- GitHub
- Vercel

The landing page must include:

1. Hero section
2. Menu section with at least 8 items
3. Location section with address and map-style layout
4. Contact / CTA section with hours, phone number, and Order Now button
5. Mobile-responsive design
6. Live deployment on Vercel

## Recommended Folder Structure

Place these files inside a `context/` folder in the project root:

```txt
context/
├── README.md
├── project-overview.md
├── architecture.md
├── code-standards.md
├── ai-workflow-rules.md
├── ui-context.md
└── progress-tracker.md
```

## How to Use These Files

### 1. Read `project-overview.md` First

This file explains what the project is, who it is for, what sections are required, what is in scope, and what success means.

Use this file when the AI needs to understand the product goal.

### 2. Read `architecture.md`

This file explains the technical structure of the project.

Use it to understand:

- Tech stack
- Folder responsibilities
- Deployment model
- System boundaries
- Rules the codebase must not break

### 3. Read `ui-context.md`

This file explains the visual style of the landing page.

Use it when building:

- Colors
- Typography
- Spacing
- Cards
- Buttons
- Mobile layout
- shadcn/ui components

### 4. Read `code-standards.md`

This file explains coding rules.

Use it to keep the project clean, consistent, and easy to maintain.

### 5. Read `ai-workflow-rules.md`

This file explains how the AI coding agent should work.

Use it to avoid:

- Building too much at once
- Changing unrelated files
- Guessing missing requirements
- Forgetting to update progress

### 6. Update `progress-tracker.md`

This file tracks current project status.

Update it after meaningful changes, such as:

- Project setup complete
- Landing page sections complete
- Mobile responsive check complete
- Build passes
- Deployment complete
- PR merged

## Suggested AI Agent Start Prompt

Use this prompt in Codex or another AI code editor:

```txt
Read all files inside the context/ folder before making changes.

Build the Noodle Theory landing page exactly according to the context files.

Start with project setup and landing page implementation.
Use Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui.
Use Base component style and follow the Sera visual direction.

Work on the feat/landing-page branch.
Do not add backend, database, authentication, CMS, payment, or real ordering features.
After each meaningful change, update context/progress-tracker.md.
```
