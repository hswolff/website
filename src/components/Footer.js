import React from 'react';
import { mainContent, color } from '../utils/css';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      css={css`
        padding-top: 1.45rem;
        text-align: center;
        border-top: 1px solid ${color.divider};
      `}
    >
      <div
        css={css`
          ${mainContent};
        `}
      >
        <LinkContainer css={{ display: 'none' }}>
          <Column>
            <Link href="/blog/">
              <a>Blog</a>
            </Link>
            <Link href="/blog/category/code/">
              <a>Code</a>
            </Link>
            <Link href="/blog/category/career/">
              <a>Career</a>
            </Link>
            <Link href="/blog/category/personal/">
              <a>Personal</a>
            </Link>
            <Link href="/blog/tags/">
              <a>Tags</a>
            </Link>
            <Link href="/blog/archive/">
              <a>Archive</a>
            </Link>
            <a href="http://feeds.feedburner.com/harrywolff/zOZJ">Subscribe</a>
          </Column>
          <Column>
            <Link href="/projects/">
              <a>Projects</a>
            </Link>
            <a href="https://www.youtube.com/user/hswolff">YouTube</a>
            <a href="https://theconsolelog.com/">Podcast</a>
            <a href="https://github.com/hswolff">Open Source</a>
            {/* <Link href="/projects/newsletter/"><a>Newsletter</a></Link> */}
          </Column>
          <Column>
            <Link href="/about/">
              <a>About</a>
            </Link>
            <Link href="/about/contact-me/">
              <a>Contact Me</a>
            </Link>
            <Link href="/about/talks/">
              <a>Talks</a>
            </Link>
            {/* <Link href="/about/social/"><a>Social</a></Link> */}
            <a href="https://twitter.com/hswolff">Twitter</a>
          </Column>
        </LinkContainer>
        <div css={{ fontSize: '0.7rem' }}>
          <span>A laugh a day keeps the doctor away.</span>
          <br />
          <span>This is not professional medical advice.</span>
        </div>
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
