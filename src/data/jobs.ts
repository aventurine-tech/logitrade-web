import { getCollection } from 'astro:content';
import type { Locale } from '../i18n';

export interface Job {
  title: string;
  place: string;
  text: string;
}

/** Published vacancies in display order, in the given language (Romanian fills any gap). */
export async function getJobs(locale: Locale): Promise<Job[]> {
  const entries = await getCollection('jobs', (e) => e.data.published);
  entries.sort((a, b) => a.data.order - b.data.order || a.id.localeCompare(b.id));
  return entries.map(({ data }) => {
    const pick = (field: 'title' | 'place' | 'text') =>
      (locale !== 'ro' && data[`${field}_${locale}`]) || data[`${field}_ro`];
    return { title: pick('title'), place: pick('place'), text: pick('text') };
  });
}
