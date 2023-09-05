import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import BlogListItem from '../components/BlogListItem';
import Disqus from '../components/Disqus';
import SEO from '../components/SEO';
import Newsletter from '../components/Newsletter';
import { css } from '@emotion/core';

export default function PostTemplate({ data: { markdownRemark } }) {
  const {
    html,
    excerpt,
    frontmatter: { title, slug },
    fields: { url, editLink },
  } = markdownRemark;

  return (
    <Layout>
      <SEO title={title} description={excerpt} postSlug={url} isBlogPost />
      <BlogListItem asPage {...markdownRemark} />
      <Newsletter
        css={css`
          margin: 20px 0;
        `}
      />

      <div
        className="blog-post-content"
        css={css`
            margin-top: 20px;
            .anchor {
              box-shadow: none;
            }
            iframe {
              100%;
            }
          `}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <hr />
      <div
        css={css`
          margin: 20px 0 50px;
          text-align: center;
        `}
      >
        <a href={editLink}>Edit post on GitHub</a>
      </div>
      <Disqus url={url} identifier={slug} title={title} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      ...BlogListItemFragment
      html
      fields {
        editLink
      }
    }
  }
`;
