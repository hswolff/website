import { defineCollection } from 'astro:content';
import { blogSchema } from '@content/_schemas';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  schema: blogSchema,
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
});

export const collections = { blog };
