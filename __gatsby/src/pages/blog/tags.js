import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { createTagMap } from '../../utils/helpers';
import Layout from '../../components/Layout';

export default function AllTagsPageTemplate({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const tags = createTagMap(edges);

  return (
    <Layout>
      <Helmet title="All Tags" />
      <h1>Blog Tags</h1>
      <ul className="tags">
        {Object.keys(tags).map((tagName) => {
          const tag = tags[tagName];
          return (
            <li key={tagName}>
              <Link to={tag.slug}>
                {tag.name} ({tag.nodes.length})
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export const pageQuery = graphql`
  query AllTagsPageTemplate {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/_posts/" } }
    ) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`;
