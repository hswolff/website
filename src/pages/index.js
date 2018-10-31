import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { DateTime } from 'luxon';
import Layout from '../components/Layout';

const IndexPage = props => {
  const { allMarkdownRemark } = props.data;
  const { edges } = allMarkdownRemark;
  return (
    <Layout>
      <Helmet title="Home" />
      <h1>Howdy! 👋</h1>
      <p>My name is Harry Wolff and welcome to my website!</p>
      <p>
        I&apos;m a software engineer currently working at{' '}
        <a href="http://mongodb.com/">MongoDB</a>.
      </p>
      <p>
        I have a <a href="https://www.youtube.com/user/hswolff">YouTube</a>{' '}
        channel that is updated weekly. I make videos about JavaScript, React,
        and everything related to the web. I&apos;ve been told it&apos;s
        entertaining.
      </p>
      <p>
        I also host a weekly podcast called{' '}
        <a href="http://theconsolelog.com/">The Console Log</a>. We talk about
        news from the past week and what it means for you.
      </p>
      <p>
        I also <Link to="/blog/">blog</Link>! Have a look at my latest post:
      </p>
      <ul>
        {edges.map(({ node }) => (
          <li key={node.fileAbsolutePath}>
            <Link to={node.fields.url}>{node.frontmatter.title}</Link>{' '}
            <small>
              ({DateTime.fromISO(node.frontmatter.date).toFormat('L/d/yy')})
            </small>
          </li>
        ))}
      </ul>
      <p>
        I&apos;m active on <a href="https://twitter.com/hswolff">Twitter</a>,{' '}
        <a href="http://instagram.com/hswolff">Instagram</a>,{' '}
        <a href="https://github.com/hswolff">GitHub</a>, and many other{' '}
        <Link to="/about/">social networks</Link>.
      </p>
      <p>Thanks for stopping by!</p>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query AllPosts {
    allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/_posts/" } }
    ) {
      edges {
        node {
          ...BlogListItemFragment
        }
      }
    }
  }
`;
