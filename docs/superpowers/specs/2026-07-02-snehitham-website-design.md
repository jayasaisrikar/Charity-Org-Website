# Snehitham Charity Website — Design Spec (2026-07-02)

## Goal
Marketing website for **Snehitham Charity Group** (mission: *"Educate a child, empower a future"*),
visually modeled on the HopeRoot reference layout but reskinned to the logo's color palette and
rewritten for a child-education mission.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS v3
- No backend — fully static. Deployable to Vercel.

## Color palette (from logo)
- `plum` `#6E1246` — primary dark surfaces (nav, hero overlay, footer)
- `magenta` `#C21E7A`, `pink` `#E84A8A` — gradients / highlights
- `orange` `#F5A623` / `#F7941D` — CTA accent (the "yellow button" role)
- `cream` `#F7F1EA` — light section backgrounds
- `ink` — near-black plum body text

## Typography
- Headings: **Fraunces** (display serif, tight)
- Body: **Inter**

## Pages
- `/` Home: hero, stats band, programs, newsletter band, footer
- `/about`, `/programs`, `/contact`

## Shared components
Navbar, Footer, Button, Section, StatCard, NewsletterBand, ProgramCard.

## Content
Realistic education-mission placeholder copy + Unsplash-hosted imagery. Editable data files.

## Actions
Visual only. CTAs link to `#`; contact/newsletter forms have no submit handler.
