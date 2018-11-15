import React from 'react';
import { Link } from 'gatsby';
import { css } from 'emotion';
import { color, mediaQueries } from '../utils/css';

export default () => (
  <nav
    css={`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      ${mediaQueries.phone(css`
        align-items: center;
      `)};
    `}
  >
    <Link
      to="/"
      css={`
        display: block;
        box-shadow: none;
      `}
    >
      <img
        src="/images/profile.jpg"
        css={`
          display: block;
          height: 100px;
          width: auto;
          border-radius: 50%;
          margin: 0;
        `}
      />
    </Link>
    <h1
      css={`
        margin: 1.2rem 0 0 0;
        font-size: 1.5rem;
      `}
    >
      <Link
        to="/"
        css={{
          color: color.title,
          boxShadow: 'none',
          '&:hover': {
            opacity: 0.8,
          },
        }}
      >
        Harry Wolff
      </Link>
    </h1>
    <div
      css={`
        margin: 0;
        font-size: 0.8rem;
        color: ${color.titleLighter};
      `}
    >
      You can&apos;t escape my laugh.
    </div>
    <div
      css={`
        display: flex;
        flex-direction: column;
        margin-top: 20px;
      `}
    >
      <NavLink to="/blog/">Blog</NavLink>
      <NavLink to="/projects/">Projects</NavLink>
      <NavLink to="/about/">About</NavLink>
    </div>
  </nav>
);

const NavLink = props => {
  return React.createElement(props.href ? 'a' : Link, {
    className: css`
      color: ${color.titleLighter};
      transition: color ease 0.3s;
      box-shadow: none;
      margin: 0.2rem 0;
      font-size: 0.9rem;
      &:hover {
        opacity: 0.5;
        text-decoration: underline;
      }
    `,
    ...props,
  });
};
