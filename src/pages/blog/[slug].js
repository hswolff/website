import React from 'react';
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();
import Layout from '../../components/Layout';
import BlogListItem from '../../components/BlogListItem';
import Disqus from '../../components/Disqus';
import SEO from '../../components/SEO';
import Newsletter from '../../components/Newsletter';
import { css } from '@emotion/core';
import hashFile from '../../utils/hash-file';
import parseBlogPost from '../../utils/parse-blog-post';

export default function BlogPost(props) {
  const {
    html,
    excerpt,
    frontmatter: { title, slug },
    fields: { url, editLink },
  } = props;

  return (
    <Layout>
      <SEO title={title} description={excerpt} postSlug={url} isBlogPost />
      <BlogListItem asPage {...props} />
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

export async function getStaticProps({ params: { slug } }) {
  const { slugToPostMap } = serverRuntimeConfig;

  let post = slugToPostMap[slug];

  const { absolutePath, hash } = post.meta;
  const generatedHash = await hashFile(absolutePath);

  if (generatedHash !== hash) {
    console.log('Post changed, re-parsing', absolutePath);
    slugToPostMap[slug] = await parseBlogPost(absolutePath);

    post = slugToPostMap[slug];
  }

  return {
    props: post,
  };
}

export async function getStaticPaths() {
  const { slugToPostMap } = serverRuntimeConfig;

  const res = {
    paths: Object.keys(slugToPostMap).map((slug) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };

  return res;
}
