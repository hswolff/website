const fs = require('fs');
const matter = require('gray-matter');

const remark = require('remark');
const html = require('remark-html');
const toc = require('remark-toc');
const slug = require('remark-slug');
const headings = require('remark-autolink-headings');
const remarkPrism = require('remark-prism');

const hashFile = require('./hash-file');

async function convertMarkdown(markdown) {
  const processed = await remark()
    .use(toc)
    .use(slug)
    .use(headings)
    .use(remarkPrism, {
      transformInlineCode: true,
      plugins: [
        'autolinker',
        'command-line',
        'data-uri-highlight',
        'diff-highlight',
        'inline-color',
        'keep-markup',
        'line-numbers',
        'line-highlight',
        'show-invisibles',
        'treeview',
      ],
    })
    .use(html)
    .process(markdown);

  const content = processed.toString();

  return content;
}

module.exports = async function parseBlogPost(absolutePath) {
  const fileContents = fs.readFileSync(absolutePath, 'utf8');

  const { data: frontmatter, content: rawMarkdownContent } = matter(
    fileContents
  );

  const post = {
    meta: {
      hash: await hashFile(absolutePath),
      absolutePath,
    },
    html: await convertMarkdown(rawMarkdownContent),
    //   excerpt,
    frontmatter: {
      ...frontmatter,
      date: frontmatter.date.toISOString(),
    },
    fields: { url: '', editLink: '' },
  };

  return post;
};
