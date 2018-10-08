import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Helmet from 'react-helmet';
import { color } from '../utils/css';
import { lighten } from 'polished';

import Layout from '../components/Layout';
import BlogListItem from '../components/BlogListItem';

const lighterBgColor = lighten(0.4, color.background);

export default ({ pageContext }) => {
  const { group, index, first, last, pageCount, pathPrefix } = pageContext;
  const previousUrl = index - 1 == 1 ? '/blog/' : `${pathPrefix}${index - 1}/`;
  const nextUrl = `${pathPrefix}${index + 1}/`;

  const navProps = { first, previousUrl, index, pageCount, last, nextUrl };

  return (
    <Layout>
      <Helmet title="Blog" />
      {!first && <BlogListNavigation {...navProps} />}
      {group.map(({ node }) => (
        <BlogListItem key={node.fileAbsolutePath} {...node} />
      ))}
      <BlogListNavigation {...navProps} />
    </Layout>
  );
};

const BlogListNavigation = ({
  first,
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
    <NavButton>
      <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
    </NavButton>
    <div css={{ marginTop: '5px' }}>
      Page {index} of {pageCount}
    </div>
    <NavButton>
      <NavLink test={last} url={nextUrl} text="Go to Next Page" />
    </NavButton>
  </div>
);

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
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
    border-color: ${color.background};
    a {
      color: ${color.background};
    }
  }
  a {
    box-shadow: none;
  }
`;
