# Content needed from UrbanRaise

From section 16 of the website plan. Until these are supplied the site
runs on placeholders (clearly marked `⚠️` / "Sample" in the UI and code).

## 1. Brand & contact — `src/data/site.js`

- [x] Logo — supplied and redrawn as vector (`src/components/ui/Mark.jsx`,
      `src/assets/urbanraise-mark.svg` / `urbanraise-logo.svg`). Mark + frame are
      true vector. *Optional:* if you want the exact original wordmark typeface on
      the master logo file, a designer should convert that text to outline paths
      — the site itself sets the wordmark live in Space Grotesk.
- [x] Phone number → +233 54 360 5740 (`phoneDisplay` / `phoneHref`)
- [x] WhatsApp number → assumed same as phone (`whatsappNumber` = 233543605740).
      Confirm if WhatsApp is a different number.
- [ ] Professional email → `email`, `emailHref`
- [x] Company location → `location` = "East Legon Hills – Nanakrom, Accra, Ghana"
      (add a street/landmark or Google Maps pin if there's a walk-in office)
- [ ] Areas served → `areasServed` — confirm the real list (current Accra areas are a guess)
- [ ] Business hours → `businessHours` (confirm defaults)
- [ ] Social profile URLs (Instagram, Facebook, TikTok, LinkedIn) → `socials` (remove any not used)

## 2. Company — `src/data/content.js` (`about`)

- [ ] Company background & founding year
- [ ] Experience summary
- [ ] Mission / Vision (review the drafts)
- [ ] Construction philosophy (review)
- [ ] Founder / management + team: real names, roles, photos, short bios
- [ ] Certifications / registrations (company reg. number, home-builder
      registration, industry bodies, insurances) — or tell us to remove the section

## 3. Services — `src/data/services.js`

- [ ] Review each service description and the "what's included" bullets
- [ ] Real photograph for each of the six services → `src/data/images.js` (`services.*`)

## 4. Projects — `src/data/projects.js`

The nine projects currently listed are **fictional samples**. Replace with real work:

- [ ] For each project: name, location, project type, status (Completed / Ongoing),
      year, one-paragraph summary, scope-of-work bullet list
- [ ] Professional photographs per project → `src/data/images.js` (`projects.*`)
- [ ] Mark which projects are "featured" (shown on the homepage)

## 5. Testimonials — `src/data/content.js` (`testimonials`)

- [ ] Genuine, permission-granted client quotes (first name or "Homeowner" +
      project type). Then set `testimonialsArePlaceholder = false`.
- The plan is explicit: only real testimonials may be published.

## 6. Imagery — `src/data/images.js`

- [ ] Hero photo/video of an UrbanRaise site or completed build
- [ ] All service, project and section photos (currently Unsplash placeholders)
- Recommended: large, high-res, real architecture/construction photography.

## 7. Quote form backend (decision + credentials)

- [ ] Choose: Web3Forms / Formspree / EmailJS / serverless function
- [ ] Provide the form ID / API key / destination inbox

## 8. FAQ — `src/data/faq.js`

- [ ] Review every answer (marked `faqIsDraft`). Confirm the real position on:
      staged-payment terms, permit assistance, insurance cover, guarantee /
      defects period, typical build durations. Then set `faqIsDraft = false`.

## 9. Legal pages — `src/data/legal.js`

- [ ] Have the Privacy Policy & Terms reviewed by a lawyer.
- [ ] Fill the `[bracketed]` placeholders: company registration number,
      registered address, privacy contact email.
- [ ] Company registration number also feeds `site.registration` and the
      structured data — set it in `src/data/site.js`.
- [ ] Set `legalIsDraft = false` and update `site.legalUpdated`.

## 10. Domain, SEO & analytics

- [ ] Real domain → replace `https://www.urbanraisebuildingworks.com` in
      `src/data/site.js` (`url`), `index.html`, `public/sitemap.xml`,
      `public/robots.txt`.
- [ ] Decide on analytics — Plausible (cookie-free, recommended) or GA4 — and
      register with Google Search Console (submit the sitemap).
- [ ] `public/og-image.png` is a generated placeholder card; swap for one built
      from a real hero photo if desired (keep it 1200×630).

## 11. Launch

- [ ] Domain + DNS access
- [ ] Hosting (static host — Netlify / Vercel / Cloudflare Pages); add SPA
      fallback so deep links like `/faq` resolve.
