import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import BlogListItem from '../components/BlogListItem';

export default function EpisodeTagsTemplate({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext: { tag },
}) {
  return (
    <Layout>
      <Helmet title={`tag: ${tag}`} />
      <h1>
        {edges.length} link
        {edges.length === 1 ? '' : 's'} tagged with {tag}
      </h1>
      {edges.map(({ node }) => {
        return <BlogListItem {...node} key={node.fileAbsolutePath} />;
      })}
    </Layout>
  );
}

export const pageQuery = graphql`
  query TagPageTemplate($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/_posts/" }
        frontmatter: { tags: { in: [$tag] } }
      }
    ) {
      edges {
        node {
          ...BlogListItemFragment
        }
      }
    }
  }
`;
