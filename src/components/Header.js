import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import { css } from 'emotion';
import { mainContent, color, mediaQueries } from '../utils/css';

const Header = () => (
  <div
    css={{
      background: color.background,
      marginBottom: '1.45rem',
    }}
  >
    <Inner>
      <Left>
        <Link to="/">
          <img
            src="/images/profile.jpg"
            css={`
              display: block;
              height: 125px;
              width: auto;
              border-radius: 50%;
            `}
          />
        </Link>
      </Left>
      <Right>
        <h1
          css={`
            margin: 0;
            margin-left: -4px;
          `}
        >
          <Link
            to="/"
            css={{
              color: color.title,
              textDecoration: 'none',
              fontSize: '3rem',
            }}
          >
            Harry Wolff
          </Link>
        </h1>
        <div
          css={`
            margin: 0;
            font-size: 1.2rem;
            color: ${color.titleLighter};
          `}
        >
          You can&apos;t escape my laugh.
        </div>
        <NavRow>
          <NavLink to="/blog/">Blog</NavLink>
          <NavLink to="/about/">About</NavLink>
          <NavLink to="/talks/">Talks</NavLink>
          <NavLink to="/blog/archive/">Archive</NavLink>
          <NavLink href="http://feeds.feedburner.com/harrywolff/zOZJ">
            RSS Feed
          </NavLink>
        </NavRow>
      </Right>
    </Inner>
  </div>
);

export default Header;

const Inner = styled('div')`
  ${mainContent};
  padding-top: 1.45rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: row;
  a {
    box-shadow: none;
  }
  ${mediaQueries.phone(css`
    flex-direction: column;
    align-items: center;
    padding-bottom: 1rem;
  `)};
`;

const Left = styled('div')``;

const Right = styled('div')`
  padding-left: 2rem;
`;

const NavRow = styled('div')`
  display: flex;
  justify-content: space-between;
`;

const NavLink = props => {
  return React.createElement(props.href ? 'a' : Link, {
    className: css`
      color: ${color.titleLighter};
      text-decoration: none;
      transition: color ease 0.3s;
      &:hover {
        opacity: 0.5;
        text-decoration: underline;
      }
    `,
    ...props,
  });
};
