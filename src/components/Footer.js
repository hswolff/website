import React from 'react';
import { mainContent, color } from '../utils/css';
import styled from 'react-emotion';
import { Link } from '@reach/router';

export default function Footer() {
  return (
    <footer
      css={`
        ${mainContent};
        padding-top: 1.45rem;
        text-align: center;
        border-top: 1px solid ${color.divider};
      `}
    >
      <LinkContainer>
        <Column>
          <Link to="/blog/">Blog</Link>
          <Link to="/blog/category/code/">Code</Link>
          <Link to="/blog/category/career/">Career</Link>
          <Link to="/blog/category/personal/">Personal</Link>
          <Link to="/blog/tags/">Tags</Link>
          <Link to="/blog/archive/">Archive</Link>
          <a href="http://feeds.feedburner.com/harrywolff/zOZJ">Subscribe</a>
        </Column>
        <Column>
          <Link to="/projects/">Projects</Link>
          <a href="https://www.youtube.com/user/hswolff">YouTube</a>
          <a href="https://theconsolelog.com/">Podcast</a>
          <a href="https://github.com/hswolff">Open Source</a>
          {/* <Link to="/projects/newsletter/">Newsletter</Link> */}
        </Column>
        <Column>
          <Link to="/about/">About</Link>
          <Link to="/about/contact-me/">Contact Me</Link>
          <Link to="/about/talks/">Talks</Link>
          {/* <Link to="/about/social/">Social</Link> */}
          <a href="https://twitter.com/hswolff">Twitter</a>
        </Column>
      </LinkContainer>
      <div css={{ fontSize: '0.7rem' }}>
        <span>A laugh a day keeps the doctor away.</span>
        <br />
        <span>This is not professional medical advice.</span>
        <br />
        <a href="https://github.com/hswolff/website">Source</a>
      </div>
    </footer>
  );
}
const LinkContainer = styled('div')`
  display: flex;
  justify-content: space-around;
  margin: 0 0 30px;
  font-size: 0.8rem;
`;

const Column = styled('div')`
  display: block;
  text-align: left;
  a {
    display: block;
    box-shadow: none;

    &:first-of-type {
      font-weight: bold;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
