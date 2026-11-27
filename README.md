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
| `/partners` | For producers and importers: benefits, how it works, partnership request form |
| `/shops` | For shop owners: why order from Logitrade, agent-visit request form (phone is enough) |
| `/careers` | Job openings and an application form with optional CV upload (PDF, Word or photo, up to 5 MB, sent as an email attachment) |
| `/contact` | Office details, contact form, map |
| `/thanks` | Shown after a form is sent |
| `/privacy` | Privacy and cookies |
| `/404.html` | Page not found (Romanian); `/en/...` and `/ru/...` misses go to `/en/not-found/` and `/ru/not-found/` |

## Before launch

- Replace the placeholder figures on the home page and the job openings with real ones.
- Have RO and RU copy reviewed by native speakers.

## Contact form

All forms (contact, producers, shop-owner and careers pages, `src/components/ContactForm.astro`) post
to a small Cloudflare Worker in `form-worker/`. The worker checks Cloudflare Turnstile
(free bot protection), ignores honeypot hits and emails the message to
office@logitrade.md through Resend, sending from `website@logitrade.md` with SPF and
DKIM so it doesn't land in spam. It then sends the visitor a short confirmation in
their language. The confirmation never repeats what they typed, so the form can't be
used to send text to someone else. Each message uses two emails of the Resend quota
(100 a day on the free plan). Until it is set up, the form only
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

## Search engines and link previews

- `/sitemap.xml` and `/robots.txt` are generated from `routes` in `src/i18n/index.ts`.
  Add new indexable pages there. The thank-you and not-found pages are `noindex`.
- Every page carries company data for Google (schema.org `Organization`) and
  canonical/hreflang links for its three languages.
- Link previews use `public/og/{ro,en,ru}.png` (1200x630), and Google uses
  `public/logo.png` and the PNG/ICO favicons. Regenerate them after a logo or map
  change with `node scripts/og-images.mjs` (needs Playwright with Chromium), then
  `python3 scripts/favicon-ico.py` (needs Pillow).

## Visitor statistics

Cloudflare Web Analytics is free and sets no cookies. To turn it on, add the site
in the Cloudflare dashboard under Analytics & Logs > Web Analytics, copy the token
from the JS snippet it shows, and save it as the GitHub Actions variable
`CF_ANALYTICS_TOKEN`. The next "Deploy to GitHub Pages" run adds the beacon.

## Uptime check

`.github/workflows/uptime.yml` runs every hour on `main` and checks that the site,
the sitemap and the form worker answer. A failed run makes GitHub email the
repository owner, as long as Actions notifications are on in GitHub's
Settings > Notifications. GitHub pauses scheduled workflows after 60 days with
no commits, and you can re-enable it from the Actions tab.
