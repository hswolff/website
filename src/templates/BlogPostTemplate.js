import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { injectGlobal } from 'emotion';
import Layout from '../components/Layout';
import BlogListItem from '../components/BlogListItem';
import Disqus from '../components/Disqus';

export default function PostTemplate({ data: { markdownRemark } }) {
  const {
    html,
    frontmatter: { title, slug },
    fields: { url },
  } = markdownRemark;

  return (
    <Layout>
      <Helmet title={title} />
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
      html
      timeToRead
      frontmatter {
        title
        slug
        date
        tags
      }
      fields {
        url
        tagsUrls
      }
    }
  }
`;

injectGlobal`
.anchor {
  box-shadow: none;
}
`;
