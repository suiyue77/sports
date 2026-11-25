import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const guides=defineCollection({loader:glob({base:'./src/content/guides',pattern:'**/*.md'}),schema:z.object({title:z.string(),description:z.string(),sport:z.enum(['volleyball','fitness','baseball']),number:z.number().int().positive(),tag:z.string(),minutes:z.number().int().positive()})});
export const collections={guides};
