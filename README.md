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

Global: sticky header, footer, mobile Call / WhatsApp / Get-a-Quote bar,
desktop floating WhatsApp button, scroll-reveal animations.

## Where the content lives

All copy and data is separated from components so it is easy to update:

| File | Contains |
|---|---|
| `src/data/site.js` | ⚠️ Contact details, WhatsApp number, socials, nav, service areas, business hours |
| `src/data/services.js` | The six services + "what we build" |
| `src/data/projects.js` | ⚠️ Project portfolio (currently **sample** projects) |
| `src/data/content.js` | Process steps, "why UrbanRaise", About-page copy, ⚠️ testimonials (placeholder) |
| `src/data/images.js` | ⚠️ All image URLs (currently hot-linked Unsplash placeholders) |

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

Logo: a vector redraw of the supplied artwork.
- `src/components/ui/Mark.jsx` — the puzzle-house mark as inline SVG, colours
  as props (recolours for light / dark / brand grounds).
- `src/components/ui/Logo.jsx` — `<Mark>` + typographic wordmark (Space Grotesk).
- `src/assets/urbanraise-mark.svg` — standalone mark (true white gaps).
- `src/assets/urbanraise-logo.svg` — full lockup: diamond frame + mark +
  wordmark + tagline. Wordmark is live web-font fitted to width; a designer
  should outline the type for a final master file.
- `*.png` alongside — raster exports. `logo-concept-reference.png` — original.

Preview sheet (mark + lockup on every ground, at size):
https://claude.ai/code/artifact/06e15387-6eab-47b9-aa59-6a392c1e0056
