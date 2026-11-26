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

## Contact form

The form posts to a small Cloudflare Worker in `form-worker/`. The worker checks
Cloudflare Turnstile (free bot protection), ignores honeypot hits and emails the
message to office@logitrade.md through Resend, sending from `website@logitrade.md`
with SPF and DKIM so it doesn't land in spam. Until it is set up, the form only
shows the thank-you page.

To turn it on, add these in GitHub under Settings > Secrets and variables > Actions:

| Kind | Name | Value |
| --- | --- | --- |
| Secret | `CLOUDFLARE_API_TOKEN` | Cloudflare API token with "Edit Cloudflare Workers" |
| Secret | `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID |
| Secret | `TURNSTILE_SECRET` | Turnstile widget secret key |
| Secret | `RESEND_API_KEY` | Resend API key |
| Variable | `FORM_WORKER_ENABLED` | `true` |
| Variable | `TURNSTILE_SITE_KEY` | Turnstile widget site key |
| Variable | `FORM_ENDPOINT` | The worker URL, e.g. `https://logitrade-form.<subdomain>.workers.dev` |

Then run the "Deploy contact form worker" and "Deploy to GitHub Pages" workflows.
