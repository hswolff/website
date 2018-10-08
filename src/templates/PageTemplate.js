import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default function PageTemplate({ data: { markdownRemark } }) {
  const { html, frontmatter } = markdownRemark;
  const { title } = frontmatter;

  return (
    <Layout>
      <Helmet title={title} />
      <h1>{title}</h1>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query PageBySlug($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        title
        slug
        date
        tags
      }
      html
    }
  }
`;
