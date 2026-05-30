# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

RoutePark (途泊转运协助中心) is a Chinese-language marketing/landing site for a non-emergency medical transport coordination service. It connects patients' families with licensed ambulance fleets across China using a "return-trip matching" model to reduce costs. The site is purely static (no database) deployed on Cloudflare Pages, with a single serverless function for form submissions.

## Commands

- `npm run dev` — Start dev server on port 3000
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build locally
- `npm run lint` — Type-check with `tsc --noEmit`
- `npm run clean` — Remove `dist/` and `server.js`

No test framework is configured.

## Architecture

**Stack:** React 19 + Vite 6 + Tailwind CSS 4 + TypeScript. No routing library — single-page app with all sections rendered vertically.

**Key files:**
- `src/App.tsx` — Root component, assembles all sections in order, manages WeChat modal and scroll-to-top state
- `src/data.ts` — All content data (products, case studies, FAQs, audit criteria). Content changes go here, not in components
- `src/types.ts` — TypeScript interfaces for data structures
- `functions/api/submit.js` — Cloudflare Pages Function that POSTs inquiry form data to a WeCom (企业微信) webhook. Env var `WECHAT_WEBHOOK_URL` required in production
- `src/index.css` — Tailwind imports + custom animations (`breathe`, `pulse-gentle`) and utility classes (`glass-card`, `dot-grid`, `calculator-shadow`)

**Component flow (top to bottom):**
Header → Hero → AuditPanel → Products → CaseStudies → Calculator → FAQ → Footer, with StickyBottom and WeChatModal as overlays.

**Calculator** (`src/components/Calculator.tsx`) is the main interactive element. It estimates transport cost using a simple hash-based pseudo-distance algorithm, then POSTs the inquiry to `/functions/api/submit`. In local dev the API call gracefully falls back to a mock response.

## Design System

- Primary color: `#0B3D91` (navy blue), Accent: `#D90429` (red), Success: `#009688` (teal)
- Fonts: Inter/Outfit (sans), Playfair Display (serif, for headings), JetBrains Mono (mono/numbers)
- `@` path alias maps to project root (`@/*` → `./*`)

## Deployment

Static export to Cloudflare Pages. The `functions/` directory is auto-detected as Cloudflare Pages Functions. No SSR, no database.
