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

/** Company details shared by every locale. Placeholders until confirmed. */
export const company = {
  name: 'Logitrade',
  address: ['Str. Exemplu 1', 'MD-2000, Chișinău', 'Republic of Moldova'],
  phone: '+373 22 000 000',
  phoneHref: 'tel:+37322000000',
  email: 'office@logitrade.md',
  hrEmail: 'hr@logitrade.md',
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },
};
