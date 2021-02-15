import React from 'react';
import { Helmet } from 'react-helmet';
import Link from 'next/link';
import Layout from '../components/Layout';
import BlogListItem from '../components/BlogListItem';

const IndexPage = (props) => {
  // const { allMarkdownRemark } = props.data;
  // const { edges } = allMarkdownRemark;
  const edges = [];
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
        I also{' '}
        <Link href="/blog/">
          <a>blog</a>
        </Link>
        ! Have a look at my latest posts 👇
      </p>
      {edges.map(({ node }) => (
        <BlogListItem key={node.fileAbsolutePath} {...node} />
      ))}

      <div css={{ textAlign: 'left', margin: '20px auto' }}>
        <Link href="/blog/page/1/">
          <a>All Posts</a>
        </Link>
      </div>
    </Layout>
  );
};

export default IndexPage;
