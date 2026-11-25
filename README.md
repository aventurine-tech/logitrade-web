# Logitrade website

Marketing site for Logitrade, a distribution and logistics company in Moldova.
Built with [Astro](https://astro.build) as a fully static site (no server needed).

## Getting started

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks, then writes the static site to dist/
npm run preview  # serves dist/ locally
```

## Languages

The site is built in Romanian (default, served at `/`), English (`/en/...`) and Russian (`/ru/...`).

- All copy lives in `src/i18n/ro.ts`, `en.ts` and `ru.ts`. They share one type, so a missing key fails the build.
- Shared company details (address, phone, emails, social links) are in `src/i18n/index.ts`.
- Every page is in `src/pages/[...lang]/` and is generated once per language.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home: hero, services, key figures, partners, call to action |
| `/services` | Distribution, storage and merchandising, each with an anchor |
| `/about` | Story, mission, vision, values, figures, partners |
| `/careers` | Job openings, apply by email |
| `/contact` | Office details, contact form, map |
| `/thanks` | Shown after a form is sent |
| `/privacy` | Privacy and cookies |

## Before launch

- Replace placeholder copy, figures, address, phone and emails with real ones.
- Replace the placeholder logo (`src/components/Logo.astro`, `public/favicon.svg`) and partner tiles.
- Connect the contact form to a backend (Formspree, Netlify Forms or a small API).
- Have RO and RU copy reviewed by native speakers.
