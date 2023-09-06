import { slugifyAll } from './slugify';
import type { CollectionEntry } from 'astro:content';

const getPostsByTag = (posts: CollectionEntry<'blog'>[], tag: string) =>
  posts.filter(post =>
    post.data.tags ? slugifyAll(post.data.tags).includes(tag) : false
  );

export default getPostsByTag;
