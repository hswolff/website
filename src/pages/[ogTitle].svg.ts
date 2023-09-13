import { getCollection } from 'astro:content';
import generateOgImage from '@utils/generateOgImage';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params }) => {
  const ogImage = await generateOgImage(params.ogTitle);
  return new Response(ogImage, {
    status: 200,
  });
};

const postImportResult = await getCollection('blog', ({ data }) => !data.draft);
const posts = Object.values(postImportResult);

export function getStaticPaths() {
  // disable for now
  return [];
  // return posts
  //   .filter(({ data }) => !data.ogImage)
  //   .map(({ data }) => ({
  //     params: { ogTitle: data.title.replaceAll('?', '') },
  //   }));
}
