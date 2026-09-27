# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (Turbopack). Port 3000 by default.
npm run build    # production build (Turbopack) — also runs the TypeScript check
npm run start    # serve the production build
npm run lint     # ESLint (eslint-config-next core-web-vitals + typescript)
npx tsc --noEmit # typecheck only, without a full build
```

There is no test suite configured in this repo.

## Architecture

This is the marketing site for MosqueAI (an AI phone receptionist for UK mosques), built with Next.js 16 (App Router) + TypeScript, styled with plain CSS Modules (no Tailwind, no component library).

**Content is centralized in `src/content/site.ts`.** Nearly every piece of copy on the site — site metadata, nav links, the `features` grid (image + alt + title + body), `steps`, `valuePoints`, `testimonials`, and `faqs` — lives in this one file as typed arrays/objects, imported into presentational components. When asked to change site copy, edit `site.ts`, not the component JSX.

**Images are static imports, not remote URLs.** All photos live in `src/assets/` and are imported directly (e.g. `import clockBrickImg from "@/assets/clock-brick-wall.jpg"`) so Next's Image Optimization can generate blur placeholders and AVIF/WebP variants at build time. `next.config.ts` enables `formats: ["image/avif", "image/webp"]`. Every `<Image>` usage sets an explicit `sizes` prop tuned to the component's actual max render width (not a vague viewport percentage) and a `quality` prop — smaller card thumbnails use quality ~65–70, larger hero/section images use the default. Keep every image on the page visually distinct — there is a standing project preference for no two sections reusing the same source photo (see the `features` array in `site.ts` for the current 1:1 image-to-topic mapping).

**One component per section, each with a co-located `.module.css` file** (e.g. `Hero.tsx` + `Hero.module.css`). `src/app/page.tsx` composes the homepage by assembling section components in order: `Hero`, `Features`, `HowItWorks`, `ValueProp`, `Testimonials`, `Faq`, `CallToAction`. `Header` and `Footer` are rendered once in `src/app/layout.tsx`, not per-page.

**Global design tokens live in `src/app/globals.css`** as CSS custom properties (colors like `--green-800`, `--brass`, `--cream`; layout tokens like `--wrap`, `--section-y`, `--radius`) plus shared utility classes (`.wrap`, `.section`, `.section-head`, `.btn` / `.btn-primary` / `.btn-outline` / `.btn-light`). Component CSS Modules reference these tokens rather than hardcoding colors — keep new component styles consistent with this palette (warm cream/paper background, deep green primary, brass accent, serif display font via `--font-display` for headings) rather than introducing new brand colors.

**Fonts**: `Fraunces` (serif, for headings/display) and `Inter` (sans, body) are loaded via `next/font/google` in `src/app/layout.tsx` and exposed as `--font-display` / `--font-sans`.

**The contact form is a real server action**, not a static mailto link. `src/app/contact/actions.ts` validates submissions with Zod, then POSTs a JSON payload to an external webhook (`process.env.CONTACT_WEBHOOK_URL`, currently pointed at an n8n workflow) with an optional `X-Webhook-Secret` header. `src/components/ContactForm.tsx` is the client component using `useActionState`. The payload shape (`name`, `email`, `phone`, `company`, `message`, `website`, `source`, `submittedAt`) is intentionally matched to that n8n workflow's Google Sheets/Gmail node field mapping — don't rename these fields without checking the receiving workflow. In development without `CONTACT_WEBHOOK_URL` set, submissions just log to the console and report success; see `.env.example` for the required env vars (`.env.local` is gitignored).

**Routes**: `/` (homepage) and `/contact` (the enquiry form). `src/app/sitemap.ts` and `src/app/robots.ts` are Next's file-convention metadata routes and must be kept in sync if new pages are added. The homepage also emits inline JSON-LD (Organization + FAQPage) built from `site.ts` data in `src/app/page.tsx`.

**`.claude/launch.json`** configures the dev server for the preview tooling (`npm run dev`, `autoPort: true` — don't hardcode a `--port` flag in the dev script, since the assigned port comes from the `PORT` env var when 3000 is taken).
