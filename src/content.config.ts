import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    year: z.string(),
    role: z.string(),
    tags: z.array(z.string()),
    cover: z.enum(['halftone', 'stalls', 'routes', 'orbit']),
    accent: z.string(),
    summary: z.string(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })),
    order: z.number(),
  }),
});

export const collections = { work };
