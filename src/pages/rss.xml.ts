import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import getSortedPosts from '@utils/getSortedPosts';
import slugify from '@utils/slugify';
import { SITE } from '@config';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET() {
  const posts = await getCollection('blog');
  const sortedPosts = getSortedPosts(posts);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map(({ data, body }) => ({
      link: `blog/${slugify(data)}`,
      title: data.title,
      category: data.category,
      content: sanitizeHtml(parser.render(body)),
      // description: data.description,
      pubDate: new Date(data.date),
    })),
  });
}
