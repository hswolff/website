import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Helmet from 'react-helmet';
import { color } from '../utils/css';
import { lighten } from 'polished';

import Layout from '../components/Layout';
import BlogListItem from '../components/BlogListItem';

const lighterBgColor = lighten(0.4, color.title);

export default ({ pageContext }) => {
  const {
    group,
    index,
    first: isFirstPage,
    last,
    pageCount,
    pathPrefix,
  } = pageContext;
  const previousUrl = index - 1 == 1 ? '/blog/' : `${pathPrefix}${index - 1}/`;
  const nextUrl = `${pathPrefix}${index + 1}/`;

  const navProps = {
    isFirstPage,
    previousUrl,
    index,
    pageCount,
    last,
    nextUrl,
  };

  return (
    <Layout>
      <Helmet title="Blog" />
      {!isFirstPage && <BlogListNavigation {...navProps} />}
      {group.map(({ node }) => (
        <BlogListItem key={node.fileAbsolutePath} {...node} />
      ))}
      <BlogListNavigation {...navProps} />
    </Layout>
  );
};

const BlogListNavigation = ({
  isFirstPage,
  previousUrl,
  index,
  pageCount,
  last,
  nextUrl,
}) => (
  <div
    css={`
      margin: 40px 0;
      display: flex;
      justify-content: space-between;
      align-content: center;
      font-size: 80%;
      &, a {
        color: ${lighterBgColor};
    `}
  >
    <NavButton style={{ visibility: isFirstPage ? 'hidden' : 'visible' }}>
      <NavLink
        test={isFirstPage}
        url={previousUrl}
        text="Go to Previous Page"
      />
    </NavButton>
    <div css={{ marginTop: '5px' }}>
      Page {index} of {pageCount}
    </div>
    <NavButton>
      <NavLink test={last} url={nextUrl} text="Go to Next Page" />
    </NavButton>
  </div>
);

const NavLink = ({ test, url, text }) => {
  if (!test) {
    return <Link to={url}>{text}</Link>;
  } else {
    return <span>{text}</span>;
  }
};

const NavButton = styled('div')`
  border-width: 1px;
  border-style: solid;
  border-color: ${lighterBgColor};
  padding: 5px 10px;
  border-radius: 4px;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: ${color.title};
    a {
      color: ${color.title};
    }
  }
  a {
    box-shadow: none;
  }
`;
