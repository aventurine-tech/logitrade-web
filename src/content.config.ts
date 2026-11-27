import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Job vacancies: one JSON file per opening in src/content/jobs/.
// Staff edit these through Pages CMS (see .pages.yml); each save commits to main and redeploys.
// Only Romanian is required. Empty English or Russian fields fall back to the Romanian text.
const text = z.string().trim().optional().default('');

const jobs = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/jobs' }),
  schema: z.object({
    published: z.boolean().default(true),
    order: z.number().default(100),
    title_ro: z.string().trim().min(1),
    title_en: text,
    title_ru: text,
    place_ro: text,
    place_en: text,
    place_ru: text,
    text_ro: text,
    text_en: text,
    text_ru: text,
  }),
});

export const collections = { jobs };
