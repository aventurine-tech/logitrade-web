// Texts that staff edit in Pages CMS (see .pages.yml): home figures, contact details
// and the benefit cards on the producers and shops pages. Each file holds RO/EN/RU
// fields; an empty English or Russian field falls back to the Romanian text.
import type { Locale } from '../i18n';
import statsFile from '../content/site/home-stats.json';
import contactFile from '../content/site/contact.json';
import partnersFile from '../content/site/partners-benefits.json';
import shopsFile from '../content/site/shops-benefits.json';

type Localized<K extends string> = { [P in `${K}_${Locale}`]?: string };

function pick<K extends string>(item: Localized<K>, key: K, locale: Locale): string {
  const own = item[`${key}_${locale}` as `${K}_${Locale}`]?.trim();
  return own || item[`${key}_ro` as `${K}_${Locale}`]?.trim() || '';
}

const numberLocale: Record<Locale, string> = { ro: 'ro-MD', en: 'en-GB', ru: 'ru-RU' };

/** "5000+" becomes 5.000+ (RO), 5,000+ (EN) or 5 000+ (RU). */
function formatValue(value: string, locale: Locale): string {
  const fmt = new Intl.NumberFormat(numberLocale[locale]);
  return value.trim().replace(/\d{4,}/g, (n) => fmt.format(Number(n)));
}

export function getStats(locale: Locale) {
  return (statsFile.items as (Localized<'label' | 'text'> & { value?: string })[])
    .filter((s) => s.value?.trim())
    .map((s) => ({ value: formatValue(s.value!, locale), label: pick(s, 'label', locale), text: pick(s, 'text', locale) }));
}

function benefits(items: Localized<'name' | 'text'>[], locale: Locale) {
  return items
    .map((b) => ({ name: pick(b, 'name', locale), text: pick(b, 'text', locale) }))
    .filter((b) => b.name);
}

export const getPartnerBenefits = (locale: Locale) => benefits(partnersFile.items, locale);
export const getShopBenefits = (locale: Locale) => benefits(shopsFile.items, locale);

export function getContact(locale: Locale) {
  const c = contactFile as Localized<'address'> & { email: string; phone?: string };
  const phone = c.phone?.trim() || '';
  return {
    email: c.email.trim(),
    phone,
    /** Digits and a leading + only, for tel: links. */
    phoneHref: phone ? `tel:${phone.replace(/[^\d+]/g, '')}` : '',
    address: pick(c, 'address', locale).split('\n').map((l) => l.trim()).filter(Boolean),
  };
}
