import { defineCollection, z } from 'astro:content';

const defaultBlog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform(val => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform(str => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
  }),
});

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    // Transform string to Date object
    date: z
      .string()
      .or(z.date())
      .transform(val => new Date(val)),
    category: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { 'default-blog': defaultBlog, blog };
