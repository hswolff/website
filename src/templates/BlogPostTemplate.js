import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import BlogListItem from '../components/BlogListItem';
import Disqus from '../components/Disqus';
import SEO from '../components/SEO';

export default function PostTemplate({ data: { markdownRemark } }) {
  const {
    html,
    excerpt,
    frontmatter: { title, slug },
    fields: { url },
  } = markdownRemark;

  return (
    <Layout>
      <SEO title={title} description={excerpt} postSlug={url} isBlogPost />
      <BlogListItem asPage {...markdownRemark} />
      <div
        css={`
          margin-top: 20px;
          .anchor {
            box-shadow: none;
          }
        `}
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <hr />
      <Disqus url={url} identifier={slug} title={title} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      ...BlogListItemFragment
      html
    }
  }
`;
