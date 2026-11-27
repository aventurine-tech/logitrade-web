import en, { type Dictionary } from './en';
import ro from './ro';
import ru from './ru';

export const locales = ['ro', 'en', 'ru'] as const;
export type Locale = (typeof locales)[number];
// Romanian is the primary audience, so it is served at the root; EN and RU live under /en and /ru.
export const defaultLocale: Locale = 'ro';

export const localeNames: Record<Locale, string> = {
  ro: 'Română',
  en: 'English',
  ru: 'Русский',
};

const dictionaries: Record<Locale, Dictionary> = { en, ro, ru };

export function t(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Value for the [...lang] rest param: undefined for the default locale. */
export function langParam(locale: Locale): string | undefined {
  return locale === defaultLocale ? undefined : locale;
}

/** getStaticPaths helper used by every page under src/pages/[...lang]/. */
export function localePaths() {
  return locales.map((locale) => ({ params: { lang: langParam(locale) }, props: { locale } }));
}

// Base path the site is served from: '/' normally, '/logitrade-web/' on GitHub Pages.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Build an internal URL for a locale, e.g. path('en', '/about') -> '/en/about'. */
export function path(locale: Locale, to = '/'): string {
  const clean = to === '/' ? '' : to;
  const local = locale === defaultLocale ? clean || '/' : `/${locale}${clean}`;
  return base + local;
}

/** Path to a file in public/, honouring the base path. */
export function asset(file: string): string {
  return `${base}/${file.replace(/^\//, '')}`;
}

/** Strip the base and locale prefix from a pathname, e.g. '/en/about' -> '/about'. */
export function stripLocale(pathname: string): string {
  const rest = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  const parts = rest.split('/').filter(Boolean);
  if (parts.length && (locales as readonly string[]).includes(parts[0])) parts.shift();
  return '/' + parts.join('/');
}

/**
 * Company details shared by every locale.
 * Legal name, IDNO and address come from the state register (srl.md, datero.md).
 * There is no public phone number or social media yet (Radu, 2026-11-26).
 */
export const company = {
  name: 'Logitrade Group',
  legalName: 'SRL „Logitrade Group”',
  idno: '1026023134466',
  registered: '2026-08-18',
  address: {
    ro: ['str. Cetatea Albă 176', 'MD-2002, Chișinău, sect. Botanica', 'Republica Moldova'],
    en: ['176 Cetatea Albă St.', 'MD-2002, Chișinău, Botanica', 'Republic of Moldova'],
    ru: ['ул. Четатя Албэ, 176', 'MD-2002, Кишинёв, сектор Ботаника', 'Республика Молдова'],
  } satisfies Record<Locale, string[]>,
  /** Office location on OpenStreetMap. */
  geo: { lat: 46.98518, lon: 28.88626 },
  email: 'office@logitrade.md',
};

/** Indexable routes (without locale prefix), used by the sitemap. /thanks is left out on purpose. */
export const routes = ['/', '/services', '/about', '/careers', '/contact', '/privacy'] as const;

/**
 * Absolute URL of a page, with the trailing slash GitHub Pages redirects to,
 * so canonical links and the sitemap point straight at the final address.
 */
export function pageUrl(locale: Locale, route: string, site: URL): string {
  const p = path(locale, route);
  return new URL(p.endsWith('/') ? p : `${p}/`, site).href;
}
