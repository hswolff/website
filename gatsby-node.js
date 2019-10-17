const path = require('path');
const _ = require('lodash');
const createPaginatedPages = require('gatsby-paginate');
const { createFilePath } = require('gatsby-source-filesystem');
const { createFullUrl, createTagMap } = require('./src/utils/helpers');

const categories = { code: {}, personal: {}, career: {} };
_.forEach(categories, (catConfig, category) => {
  catConfig.url = createFullUrl(`category/${category}`);
  catConfig.category = category;
});

// Lifecycle methods

exports.onCreateNode = function({ node, actions, getNode }) {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    createNodeField({
      name: 'editLink',
      node,
      value: `https://github.com/hswolff/website/edit/master${node.fileAbsolutePath.replace(
        __dirname,
        ''
      )}`,
    });
  }

  // Only add extra fields to blog post nodes
  if (isNodeBlogPost(node)) {
    const { slug } = node.frontmatter;

    createNodeField({
      node,
      name: 'url',
      value: createFullUrl(slug),
    });

    createNodeField({
      node,
      name: 'tagsUrls',
      value: node.frontmatter.tags
        ? node.frontmatter.tags.map(tag => `/blog/tag/${tag}/`)
        : [],
    });

    createNodeField({
      node,
      name: 'categoryUrl',
      value: _.get(categories, [node.frontmatter.category, 'url']),
    });
  }

  if (
    node.internal.type === 'MarkdownRemark' &&
    node.fileAbsolutePath.includes('/content/')
  ) {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: 'content/',
    });

    createNodeField({
      node,
      name: 'url',
      value: relativeFilePath,
    });
  }
};

exports.createPages = async function({ actions, graphql }) {
  const results = await Promise.all([
    graphql(getMarkdownQuery({ regex: '/_posts/' })),
    // prettier-ignore
    graphql(getMarkdownQuery({ regex: '/\/content\//' })), // eslint-disable-line no-useless-escape
  ]);

  const error = results.filter(r => r.errors);
  if (error.length) {
    return Promise.reject(error[0].errors);
  }

  const { createPage } = actions;

  const [blogPostResults, contentResults] = results;

  const blogPostEdges = blogPostResults.data.allMarkdownRemark.edges;

  createBlogPostPages({
    createPage,
    edges: blogPostEdges,
  });

  createCategoryPages({
    createPage,
    edges: blogPostEdges,
  });

  createTagPages({
    createPage,
    edges: blogPostEdges,
  });

  createPaginatedPages({
    edges: blogPostEdges,
    createPage: createPage,
    pageTemplate: 'src/templates/BlogListTemplate.js',
    pageLength: 6,
    context: {},
    pathPrefix: createFullUrl('page'),
    buildPath: (index, pathPrefix) => `${pathPrefix}${index ? index : 1}`,
  });

  const contentEdges = contentResults.data.allMarkdownRemark.edges;

  const component = path.resolve('src/templates/PageTemplate.js');
  contentEdges.forEach(({ node }) => {
    const { url } = node.fields;

    createPage({
      path: url,
      component,
      context: {
        fileAbsolutePath: node.fileAbsolutePath,
      },
    });
  });
};

// Implementations

function isNodeBlogPost(node) {
  return (
    node.internal.type === 'MarkdownRemark' &&
    node.fileAbsolutePath.includes('_posts')
  );
}

function getMarkdownQuery({ regex } = {}) {
  return `
    {
      allMarkdownRemark(
        # limit: 36
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "${regex}" } }
      ) {
        totalCount
        edges {
          node {
            fileAbsolutePath
            excerpt(pruneLength: 280)
            timeToRead
            frontmatter {
              title
              slug
              date
              category
              tags
            }
            fields {
              url
              categoryUrl
              tagsUrls
            }
          }
        }
      }
    }
  `;
}

function createBlogPostPages({ edges, createPage }) {
  const component = path.resolve('src/templates/BlogPostTemplate.js');

  edges.forEach(({ node }) => {
    const { slug } = node.frontmatter;

    createPage({
      path: createFullUrl(slug),
      component,
      context: {
        slug,
      },
    });
  });
}

function createCategoryPages({ createPage }) {
  const categoryTemplate = path.resolve(
    'src/templates/CategoryListTemplate.js'
  );

  _.forEach(categories, ({ category, url }) => {
    createPage({
      path: url,
      component: categoryTemplate,
      context: {
        category,
      },
    });
  });
}

function createTagPages({ createPage, edges }) {
  const tagTemplate = path.resolve('src/templates/TagPageTemplate.js');

  const tags = createTagMap(edges);

  // For each of the tags in the post object, create a tag page.
  for (const tagName in tags) {
    const tag = tags[tagName];

    createPage({
      path: tag.slug,
      component: tagTemplate,
      context: {
        tag: tag.name,
      },
    });
  }
}
