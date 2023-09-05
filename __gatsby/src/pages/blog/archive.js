import React, { Component } from 'react';
import _ from 'lodash';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import { Helmet } from 'react-helmet';
import { DateTime } from 'luxon';
import Layout from '../../components/Layout';

export default class BlogArchive extends Component {
  state = {
    '2018': true,
    '2017': true,
  };

  render() {
    const { allMarkdownRemark } = this.props.data;
    const { edges } = allMarkdownRemark;
    const groups = _.groupBy(edges, ({ node }) =>
      DateTime.fromISO(node.frontmatter.date).toFormat('y')
    );
    const years = Object.keys(groups).sort((a, b) => b - a);

    return (
      <Layout>
        <Helmet title="Blog Archive" />
        <h1>Blog Archive</h1>
        {_.map(years, (year) => (
          <div key={year}>
            <h2
              css={css`
                cursor: pointer;
                opacity: ${this.state[year] ? '1' : '0.6'};
                transition: ease-in-out 0.2s opacity;
                &:hover {
                  opacity: 1;
                }
              `}
              onClick={() =>
                this.setState((state) => ({ [year]: !state[year] }))
              }
            >
              {year}
            </h2>
            {true && (
              <ul>
                {groups[year].map(({ node }) => (
                  <li key={node.fileAbsolutePath}>
                    <Link to={node.fields.url}>{node.frontmatter.title}</Link> (
                    {DateTime.fromISO(node.frontmatter.date).toFormat('MMMM d')}
                    )
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query ArchivePosts {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/_posts/" } }
    ) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            title
            date
          }
          fields {
            url
          }
        }
      }
    }
  }
`;
