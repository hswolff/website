import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import BlogListItem from '../../components/BlogListItem';
import { graphql } from 'gatsby';

export default function TalksPage({ data: { allMarkdownRemark } }) {
  return (
    <Layout>
      <Helmet title="Talks" />
      <h1>Talks</h1>
      <p>
        I&#39;ve had the great opportunity to talk at a couple of conferences
        and Meetups over the years.
      </p>

      <p>The following is a collection of talks that I have given.</p>

      {allMarkdownRemark.edges.map(({ node }) => (
        <BlogListItem key={node.fileAbsolutePath} {...node} />
      ))}
    </Layout>
  );
}

export const pageQuery = graphql`
  query Talks {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: "talk" } } }
    ) {
      edges {
        node {
          ...BlogListItemFragment
        }
      }
    }
  }
`;
