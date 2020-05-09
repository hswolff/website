import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import _ from 'lodash';
import { DateTime } from 'luxon';
import Layout from '../components/Layout';
import BlogListItem from '../components/BlogListItem';
import { mainContent } from '../utils/css';

const BlogPage = ({ data }) => {
  const { latest } = data;
  return (
    <Layout>
      <Helmet title="Blog" />
      <div className={mainContent}>
        <BlogListItem {...latest.edges[0].node} />
        <ul>
          {latest.edges.slice(1, 4).map(({ node }) => (
            <li key={node.fileAbsolutePath}>
              <LinkItem node={node} />
            </li>
          ))}
        </ul>
        <div css={{ textAlign: 'left' }}>
          <Link to="/blog/page/1/">All Posts</Link>
        </div>
      </div>

      <div css={[mainContent, { display: 'none' }]}>
        <h3>Categories</h3>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          display: none;
        `}
      >
        {['code', 'career', 'personal'].map((category) => (
          <div
            key={category}
            css={css`
              width: 30%;
            `}
          >
            <b>{_.capitalize(category)}</b>
            {data[category].edges.map(({ node }) => (
              <LinkItem key={node.fileAbsolutePath} node={node} />
            ))}
          </div>
        ))}
      </div>

      <div css={{ display: 'none' }}>
        <h3>Archives</h3>
        <Link to="/blog/archive/">Archive</Link>
        <h3>All Tags</h3>
        <Link to="/blog/tags/">Tags</Link>
      </div>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query Blog {
    latest: allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/_posts/" } }
    ) {
      edges {
        node {
          ...BlogListItemFragment
        }
      }
    }
    code: allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "code" } } }
    ) {
      edges {
        node {
          ...BlogListItemFragment
        }
      }
    }
    career: allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "career" } } }
    ) {
      edges {
        node {
          ...BlogListItemFragment
        }
      }
    }
    personal: allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "personal" } } }
    ) {
      edges {
        node {
          ...BlogListItemFragment
        }
      }
    }
  }
`;

const LinkItem = ({ node }) => (
  <div>
    <Link to={node.fields.url}>{node.frontmatter.title}</Link>{' '}
    <small>
      ({DateTime.fromISO(node.frontmatter.date).toFormat('L/d/yy')})
    </small>
  </div>
);
