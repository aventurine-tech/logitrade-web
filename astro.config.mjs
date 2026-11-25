// @ts-check
import { defineConfig } from 'astro/config';

// Static marketing site. Locales are handled by src/pages/[...lang]/:
// Romanian (default) is served at the root, English under /en and Russian under /ru.
// See src/i18n/index.ts.
// SITE and BASE_PATH are set by the GitHub Pages workflow; defaults suit the real domain.
export default defineConfig({
  site: process.env.SITE ?? 'https://www.logitrade.md',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore',
});
