import type { CollectionEntry } from 'astro:content';

const getPostsByCategory = (
  posts: CollectionEntry<'blog'>[],
  category: string
) => posts.filter(post => post.data.category === category);

export default getPostsByCategory;
