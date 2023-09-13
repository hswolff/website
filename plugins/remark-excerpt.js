import { toString } from 'mdast-util-to-string';

export function remarkExcerpt() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);

    data.astro.frontmatter.excerpt = textOnPage.substring(0, 300);
  };
}
