import type { APIRoute } from 'astro';
import { defaultLocale, locales, pageUrl, routes } from '../i18n';

// One <url> per page and language, each listing its translations so search
// engines show visitors the right language.
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://logitrade.md');
  const urls = routes.flatMap((route) =>
    locales.map((locale) => {
      const alternates = [
        ...locales.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${pageUrl(l, route, base)}"/>`),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl(defaultLocale, route, base)}"/>`,
      ].join('\n');
      return `  <url>\n    <loc>${pageUrl(locale, route, base)}</loc>\n${alternates}\n  </url>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
