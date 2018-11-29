import React from 'react';
import { graphql } from 'gatsby';
import { injectGlobal } from 'emotion';
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

injectGlobal`
.anchor {
  box-shadow: none;
}
`;
