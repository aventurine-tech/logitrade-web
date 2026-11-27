// Renders the link-preview images (public/og/{ro,en,ru}.png, 1200x630) and the
// raster logo Google uses (public/logo.png), plus PNG favicons. Run after changing the logo or map:
//   node scripts/og-images.mjs
// Needs Playwright with Chromium (not a project dependency).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { brand, logoViewBox, markPath, wordPath } from '../src/data/logo.ts';
import { outline, towns, viewBox as mapViewBox } from '../src/data/moldova-map.ts';

const taglines = {
  ro: ['Distribuție și logistică', 'în toată Republica Moldova'],
  en: ['Distribution and logistics', 'across the Republic of Moldova'],
  ru: ['Дистрибуция и логистика', 'по всей Республике Молдова'],
};
const hubs = { north: 'Bălți', centre: 'Chișinău', south: 'Cahul' };

function mapSvg() {
  const lines = [];
  const dots = [];
  for (const [region, list] of Object.entries(towns)) {
    const [hx, hy] = list[hubs[region]];
    for (const [name, [x, y]] of Object.entries(list)) {
      if (name === hubs[region]) continue;
      lines.push(`<line x1="${hx}" y1="${hy}" x2="${x}" y2="${y}" />`);
      dots.push(`<circle cx="${x}" cy="${y}" r="4.5" class="town" />`);
    }
    dots.push(`<circle cx="${hx}" cy="${hy}" r="16" class="halo" /><circle cx="${hx}" cy="${hy}" r="9" class="hub" />`);
  }
  return `<svg class="map" viewBox="${mapViewBox}"><path d="${outline}" class="land" /><g class="routes">${lines.join('')}</g>${dots.join('')}</svg>`;
}

const logo = (fill) =>
  `<svg class="logo" viewBox="${logoViewBox}"><path fill-rule="evenodd" d="${markPath}" fill="${fill}"/><path fill-rule="evenodd" d="${wordPath}" fill="${fill}"/></svg>`;

function page(lang) {
  const [l1, l2] = taglines[lang];
  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&display=swap" rel="stylesheet">
<style>
  *{margin:0;box-sizing:border-box}
  body{width:1200px;height:630px;overflow:hidden;font-family:Manrope,system-ui,sans-serif;color:#eef3fa;
    background:radial-gradient(900px 600px at 85% 40%, #16407a 0, #0f2c54 45%, #0a1f3c 100%);position:relative}
  .bar{position:absolute;left:0;top:0;bottom:0;width:18px;background:${brand.maroon}}
  .text{position:absolute;left:96px;top:110px;width:720px}
  .logo{width:420px;display:block}
  h1{margin-top:56px;font-size:48px;line-height:1.12;font-weight:800;letter-spacing:-.5px}
  h1 span{color:#f5a524}
  .domain{position:absolute;left:96px;bottom:72px;font-size:28px;font-weight:600;opacity:.8}
  .map{position:absolute;right:64px;top:45px;height:540px}
  .land{fill:rgba(255,255,255,.07);stroke:rgba(255,255,255,.55);stroke-width:2.5}
  .routes line{stroke:#f5a524;stroke-width:1.6;opacity:.55}
  .town{fill:#eef3fa}
  .hub{fill:#f5a524;stroke:#0a1f3c;stroke-width:3}
  .halo{fill:#f5a524;opacity:.25}
</style></head><body>
<div class="bar"></div>
<div class="text">${logo('#fff')}<h1>${l1}<br><span>${l2}</span></h1></div>
<div class="domain">logitrade.md</div>
${mapSvg()}
</body></html>`;
}

// Playwright is resolved like require() so a global install works too.
const { chromium } = createRequire(import.meta.url)('playwright');
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
const p = await ctx.newPage();
mkdirSync('public/og', { recursive: true });
for (const lang of Object.keys(taglines)) {
  await p.setContent(page(lang), { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  writeFileSync(`public/og/${lang}.png`, await p.screenshot({ type: 'png' }));
  console.log(`public/og/${lang}.png`);
}

// Logo on white for search engines (schema.org Organization.logo).
await p.setViewportSize({ width: 600, height: 240 });
await p.setContent(
  `<body style="margin:0;width:600px;height:240px;display:grid;place-items:center;background:#fff">
   <svg viewBox="${logoViewBox}" style="width:520px"><path fill-rule="evenodd" d="${markPath}" fill="${brand.maroon}"/><path fill-rule="evenodd" d="${wordPath}" fill="${brand.navy}"/></svg></body>`,
);
writeFileSync('public/logo.png', await p.screenshot({ type: 'png' }));
console.log('public/logo.png');

// Raster favicons: Google and older browsers do not use the SVG one.
const svg = readFileSync('public/favicon.svg', 'utf8');
for (const [file, size] of [['favicon-48.png', 48], ['favicon-192.png', 192], ['apple-touch-icon.png', 180]]) {
  await p.setViewportSize({ width: size, height: size });
  // The touch icon gets a full square; iOS rounds the corners itself.
  const body = file.startsWith('apple')
    ? svg.replace('rx="12"', 'rx="0"')
    : svg;
  await p.setContent(`<body style="margin:0;background:transparent">${body.replace('<svg ', `<svg width="${size}" height="${size}" `)}</body>`);
  writeFileSync(`public/${file}`, await p.screenshot({ type: 'png', omitBackground: true }));
  console.log(`public/${file}`);
}
await browser.close();
// favicon.ico (16/32/48) is built from favicon-192.png with: python3 scripts/favicon-ico.py
