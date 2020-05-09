const createFullUrl = (relativePath) => `/blog/${relativePath}/`;
exports.createFullUrl = createFullUrl;

exports.createTagMap = (edges) => {
  const tags = {};

  edges.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach((tag) => {
        if (!tags[tag]) {
          tags[tag] = {
            name: tag,
            slug: createFullUrl(`tag/${tag}`),
            nodes: [],
          };
        }
        tags[tag].nodes.push(node);
      });
    }
  });

  return tags;
};
