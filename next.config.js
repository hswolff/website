const fs = require('fs');
const path = require('path');
const parseBlogPost = require('./src/utils/parse-blog-post');

const postsDirectory = path.join(process.cwd(), '_posts', '2020');

async function createSlugToPostMap(slugToPostMap = {}) {
  const filenames = fs.readdirSync(postsDirectory);

  for (const filename of filenames) {
    const absolutePath = path.join(postsDirectory, filename);
    const post = await parseBlogPost(absolutePath);

    slugToPostMap[post.frontmatter.slug] = post;
  }

  return slugToPostMap;
}

const slugToPostMap = {};

(async function main() {
  await createSlugToPostMap(slugToPostMap);
})().then(() => {
  console.log('created slug to post map');
});

module.exports = {
  trailingSlash: true,

  serverRuntimeConfig: {
    slugToPostMap,
  },
};
