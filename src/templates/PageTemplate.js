import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import BlogListItem from '../components/BlogListItem';
import Disqus from '../components/Disqus';
import SEO from '../components/SEO';
import Newsletter from '../components/Newsletter';
import { css } from '@emotion/core';

export default function PageTemplate({ data: { markdownRemark } }) {
  const {
    html,
    excerpt,
    frontmatter: {
      title,
      includeNewsletter: includeNewsletterProp,
      comments: commentsProp,
    },
    fields: { url, editLink },
  } = markdownRemark;

  const includeNewsletter = includeNewsletterProp ?? true;
  const comments = commentsProp ?? true;

  return (
    <Layout>
      <SEO title={title} description={excerpt} postSlug={url} isBlogPost />
      <BlogListItem asPage includeMetaInfo={false} {...markdownRemark} />
      {includeNewsletter && (
        <Newsletter
          css={css`
            margin: 20px 0;
          `}
        />
      )}

      <div
        className="blog-post-content"
        css={[
          css`
            margin-top: 20px;
            .anchor {
              box-shadow: none;
            }
          `,
        ]}
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
      {comments && <Disqus url={url} identifier={url} title={title} />}
    </Layout>
  );
}

export const pageQuery = graphql`
  query PageQuery($fileAbsolutePath: String!) {
    markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      html
      excerpt(pruneLength: 280)
      frontmatter {
        title
        comments
        includeNewsletter
      }
      fields {
        url
        editLink
      }
    }
  }
`;
