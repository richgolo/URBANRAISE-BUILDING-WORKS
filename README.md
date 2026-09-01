# UrbanRaise Building Works — Website

Marketing website for UrbanRaise Building Works, built to the UrbanRaise
Website Product & Development Plan. Smart Design. Solid Buildings.

**Stack:** React 19 · Vite 8 · React Router 7 · Tailwind CSS v4

```bash
yarn install
yarn dev       # local dev server
yarn build     # production build -> dist/
yarn preview   # serve the production build
yarn lint      # eslint
```

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, services, featured projects, about, why UrbanRaise, process, testimonials, quote CTA, closing CTA |
| `/about` | Company background, experience, mission, vision, values, philosophy, team, certifications |
| `/services` | The six services, each with photo + detail (anchor links: `/services#residential-construction`, …) |
| `/projects` | Portfolio with All / Completed / Ongoing filter |
| `/projects/:slug` | Individual project — name, location, type, status, scope of work, gallery + lightbox |
| `/quote` | Request-a-quote form (see note below) |
| `/contact` | Phone, WhatsApp, email, areas served, business hours, socials |
| `/faq` | Accordion of common build questions (`src/data/faq.js`, draft answers) |
| `/privacy`, `/terms` | Legal pages (`src/data/legal.js`, draft template) |

The Home page also has a **Guarantees** section ("how we keep a build low-risk")
— `src/components/sections/Guarantees.jsx`.

Global: sticky header, footer, mobile Call / WhatsApp / Get-a-Quote bar,
desktop floating WhatsApp button, scroll-reveal animations.

## SEO & metadata

- `useDocumentTitle(title, description)` (`src/lib/`) sets per-route `<title>`,
  description, canonical, and Open-Graph / Twitter tags.
- `index.html` carries the site-wide defaults + a `GeneralContractor` JSON-LD
  block; `/faq` injects `FAQPage` JSON-LD.
- `public/`: `robots.txt`, `sitemap.xml`, `site.webmanifest`, `favicon.svg`,
  `favicon-32.png`, `apple-touch-icon.png`, `icon-512.png`, `og-image.png`
  (1200×630 social card). Icon + OG sources: `src/assets/icon.svg`,
  `src/assets/og-image.svg` — regenerate PNGs with `sips`.
- ⚠️ Every URL uses the placeholder domain
  `https://www.urbanraisebuildingworks.com` — replace before launch
  (`site.js` `url`, `index.html`, `sitemap.xml`, `robots.txt`).

## Where the content lives

All copy and data is separated from components so it is easy to update:

| File | Contains |
|---|---|
| `src/data/site.js` | ⚠️ Contact details, WhatsApp number, socials, nav, service areas, business hours |
| `src/data/services.js` | The six services + "what we build" |
| `src/data/projects.js` | ⚠️ Project portfolio (currently **sample** projects) |
| `src/data/content.js` | Process steps, "why UrbanRaise", About-page copy, ⚠️ testimonials (placeholder) |
| `src/data/images.js` | ⚠️ All image URLs (currently hot-linked Unsplash placeholders) |
| `src/data/faq.js` | ⚠️ FAQ questions & answers (draft) |
| `src/data/legal.js` | ⚠️ Privacy & Terms content (draft template) |

`⚠️` = placeholder data that must be replaced before launch. See
[`CONTENT-NEEDED.md`](CONTENT-NEEDED.md).

## The quote form

`src/pages/Quote.jsx` is **not connected to a backend**. On submit it
validates, then composes a project brief the client sends via WhatsApp
(pre-filled `wa.me` link) or email (pre-filled `mailto:`). File uploads
are listed but not transmitted — the client is prompted to attach them
in the chat/email.

Before launch, wire it to one of:

- **Web3Forms / Formspree** — swap the `onSubmit` success path for a
  `fetch()` POST to the form endpoint (supports file attachments).
- **EmailJS** — browser-to-inbox, no server.
- A small serverless function on whatever host is chosen.

The composed-brief fallback can stay as a secondary path.

## Brand

Defined as Tailwind theme tokens in `src/index.css` (`@theme`):

- `brand-500` `#5B2A86` (deep purple, used sparingly) + 50–900 scale
- `ink-800` `#2B2B2B` (charcoal — dark architectural sections)
- `line` `#E5E5E5`, `surface` `#F6F5F7`
- Display font: Space Grotesk · Body: Inter (loaded in `index.html`)

Logo: the **supplied artwork** (`src/assets/logo-concept-reference.png`),
trimmed and resized for the web.
- `src/assets/urbanraise-logo.png` — full lockup (frame + mark + wordmark +
  tagline), transparent.
- `src/assets/urbanraise-mark.png` — just the puzzle-house mark, transparent.
- `src/components/ui/Logo.jsx` — `variant="compact"` (mark + typeset wordmark)
  in the header; `variant="lockup"` (full artwork) in the footer. On dark
  backgrounds the purple art is reversed to white with a CSS filter — no
  separate file.
- Favicon / OG image are generated from the same art: `src/assets/icon.svg`
  and `src/assets/og-image.svg` embed the PNGs; regenerate the `public/*.png`
  outputs with `sips`.
- It is raster — for large-format print (signage, vehicles) get the original
  vector (AI/SVG/EPS) from whoever designed the logo. See `CONTENT-NEEDED.md`.

Preview sheet (lockup + mark on every ground, at size):
https://claude.ai/code/artifact/06e15387-6eab-47b9-aa59-6a392c1e0056
