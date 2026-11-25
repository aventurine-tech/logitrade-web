// @ts-check
import { defineConfig } from 'astro/config';

// Static marketing site. Locales are handled by src/pages/[...lang]/:
// Romanian (default) is served at the root, English under /en and Russian under /ru.
// See src/i18n/index.ts.
export default defineConfig({
  site: 'https://www.logitrade.md',
  trailingSlash: 'ignore',
});
