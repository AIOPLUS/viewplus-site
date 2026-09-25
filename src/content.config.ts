import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Privacyverklaring en algemene voorwaarden (Markdown). */
const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    ingangsdatum: z.string(),
  }),
});

/**
 * Kennisbank. Nieuw artikel: maak src/content/articles/<slug>.md met deze velden.
 * Zet `concept: true` zolang het niet online mag.
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    titel: z.string(),
    beschrijving: z.string(),
    categorie: z.enum(['Social media', 'Fotografie', 'Content', 'Engagement', 'Nieuws']),
    datum: z.coerce.date(),
    bijgewerkt: z.coerce.date().optional(),
    auteur: z.string().default('Team View Plus'),
    concept: z.boolean().default(false),
  }),
});

/**
 * Vacatures (/jobs/<bestandsnaam>). Nieuwe vacature: kopieer een bestand in src/content/jobs/.
 * `concept: true` = alleen zichtbaar op de testversie. `gesloten: true` = pagina blijft staan, solliciteren kan niet meer.
 */
const jobs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jobs' }),
  schema: z.object({
    titel: z.string(),
    samenvatting: z.string(),
    afdeling: z.enum(['Content & fotografie', 'Social media', 'Sales', 'Marketing', 'Operations']),
    dienstverband: z.array(z.enum(['fulltime', 'parttime', 'freelance', 'stage'])).min(1),
    uren: z.string(),
    werkplek: z.enum(['op locatie', 'hybride', 'remote']),
    plaats: z.string(),
    regio: z.string().optional(),
    land: z.enum(['NL', 'BE']).default('NL'),
    /** Brutosalaris in euro's; laat weg als je dat (nog) niet wilt noemen. */
    salaris: z.object({ min: z.number(), max: z.number().optional(), per: z.enum(['uur', 'maand', 'jaar']) }).optional(),
    /** Tekst als je geen bedragen noemt, bv. "Passend bij kennis en ervaring". */
    salarisTekst: z.string().optional(),
    start: z.string().optional(),
    datum: z.coerce.date(),
    /** Tot wanneer de vacature openstaat (ook voor Google for Jobs). */
    geldigTot: z.coerce.date(),
    concept: z.boolean().default(false),
    gesloten: z.boolean().default(false),
  }),
});

export const collections = { legal, articles, jobs };
