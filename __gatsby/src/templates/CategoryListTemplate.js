import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import BlogListItem from '../components/BlogListItem';

export default function CategoryListTemplate({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext: { category },
}) {
  return (
    <Layout>
      <Helmet title={`category: ${category}`} />
      <h1>Category: {category}</h1>
      <h3>
        {edges.length} link
        {edges.length === 1 ? '' : 's'}
      </h3>
      {edges.map(({ node }) => {
        return <BlogListItem {...node} key={node.fileAbsolutePath} />;
      })}
    </Layout>
  );
}

export const pageQuery = graphql`
  query CategoryListTemplate($category: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/_posts/" }
        frontmatter: { category: { in: [$category] } }
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
