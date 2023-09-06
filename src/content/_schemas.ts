import { z } from 'astro:content';

export const blogSchema = z
  .object({
    title: z.string(),
    // Transform string to Date object
    date: z
      .string()
      .or(z.date())
      .transform(val => new Date(val)),
    updated: z
      .string()
      .or(z.date())
      .transform(val => new Date(val))
      .optional(),
    category: z.string(),
    postSlug: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;
