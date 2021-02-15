import React, { useState } from 'react';
import Link from 'next/link';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import {
  FaTwitter,
  FaRss,
  FaToolbox,
  FaUser,
  FaYoutube,
  FaRegNewspaper,
  FaGithub,
  FaEnvelope,
  FaMicrophone,
  FaAlignJustify,
  FaBox,
  FaCode,
  FaStar,
  FaDesktop,
} from 'react-icons/fa';
import { color, mq } from '../utils/css';
import { darken } from 'polished';

export default function Nav() {
  const [open, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((v) => !v);

  return (
    <nav
      css={[
        css`
          display: flex;
          flex-direction: column;
        `,
        mq({
          alignItems: ['center', null, 'flex-start'],
        }),
      ]}
    >
      <Link href="/" passHref>
        <a
          css={css`
            display: block;
            box-shadow: none;
          `}
        >
          <img
            src="/images/profile.jpg"
            css={css`
              display: block;
              height: 100px;
              width: auto;
              border-radius: 50%;
              margin: 0;
            `}
          />
        </a>
      </Link>
      <h1
        css={css`
          margin: 1.2rem 0 0 0;
          font-size: 1.5rem;
        `}
      >
        <Link href="/" passHref>
          <a
            css={{
              color: color.title,
              boxShadow: 'none',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            Harry Wolff
          </a>
        </Link>
      </h1>
      <div
        css={css`
          margin: 0;
          font-size: 0.8rem;
          color: ${color.titleLighter};
        `}
      >
        You can&apos;t escape my laugh.
      </div>
      <div
        css={mq({
          display: ['block', null, 'none'],
        })}
      >
        <NavLinkDiv onClick={toggleMenu}>
          <FaAlignJustify /> <span>Open Menu</span>
        </NavLinkDiv>
      </div>
      <div
        css={[
          css`
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            font-size: 0.9rem;
          `,
          mq({
            display: [open ? 'block' : 'none', null, 'block'],
          }),
        ]}
      >
        <Link href="/blog/page/1/" passHref>
          <NavLink>
            <FaAlignJustify /> Blog
          </NavLink>
        </Link>
        <SubNavLinks>
          <NavLinkAnchor href="http://feeds.feedburner.com/harrywolff/zOZJ">
            <FaRss /> RSS
          </NavLinkAnchor>
          {/* <Link href="/blog/category/code/">
          <FaCircle size="0.5rem" />
          Code
        </Link>
        <Link href="/blog/category/career/">
          <FaCircle size="0.5rem" />
          Career
        </Link>
        <Link href="/blog/category/personal/">
          <FaCircle size="0.5rem" />
          Personal
        </Link>
        <Link href="/blog/tags/">Tags</Link> */}
          <Link href="/blog/archive/" passHref>
            <NavLink>
              <FaBox /> Archive
            </NavLink>
          </Link>
        </SubNavLinks>
        <Link href="/projects/" passHref>
          <NavLink>
            <FaToolbox />
            Projects
          </NavLink>
        </Link>
        <SubNavLinks>
          <NavLinkAnchor href="https://www.youtube.com/user/hswolff">
            <FaYoutube /> YouTube
          </NavLinkAnchor>
          <NavLinkAnchor href="/newsletter/">
            <FaRegNewspaper /> Newsletter
          </NavLinkAnchor>
          <NavLinkAnchor href="https://github.com/hswolff">
            <FaGithub /> Open Source
          </NavLinkAnchor>
          <NavLinkAnchor href="https://www.patreon.com/hswolff">
            <FaStar /> Patreon
          </NavLinkAnchor>
        </SubNavLinks>
        <Link href="/about/" passHref>
          <NavLink>
            <FaUser /> About
          </NavLink>
        </Link>
        <SubNavLinks>
          <Link href="/about/contact-me/" passHref>
            <NavLink>
              <FaEnvelope /> Contact Me
            </NavLink>
          </Link>
          <Link href="/about/talks/" passHref>
            <NavLink>
              <FaMicrophone /> Talks
            </NavLink>
          </Link>
          <Link href="/uses/" passHref>
            <NavLink>
              <FaDesktop /> Uses
            </NavLink>
          </Link>
          <NavLinkAnchor href="https://twitter.com/hswolff">
            <FaTwitter /> @hswolff
          </NavLinkAnchor>
          <NavLinkAnchor href="https://github.com/hswolff/website">
            <FaCode /> Source
          </NavLinkAnchor>
        </SubNavLinks>
        <NavNewsletter />
      </div>
    </nav>
  );
}
const NavLink = styled('a')`
  &,
  svg {
    color: ${color.titleLighter};
    transition: color ease 0.3s;
  }

  box-shadow: none;
  margin: 0.2rem 0;

  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-right: 5px;
  }

  &:hover {
    &,
    svg {
      color: ${darken(0.8, color.titleLighter)};
    }
  }
  ${mq({
    justifyContent: ['center', null, 'flex-start'],
  })}
`;

const NavLinkAnchor = NavLink.withComponent('a');
const NavLinkDiv = NavLink.withComponent('div');

const SubNavLinks = styled('div')`
  ${mq({
    marginLeft: [0, null, '10px'],
  })}
  a {
    font-size: 0.8rem;
  }
`;

function NavNewsletter() {
  return (
    <div
      css={[
        css`
          margin: 2rem 0 1.5rem;
          font-size: 0.8rem;
          p {
            margin: 0;
          }
        `,
        css(
          mq({
            '&, input': {
              textAlign: ['center', null, 'left'],
            },
          })
        ),
      ]}
    >
      <p>Want to stay updated?</p>
      <p>Join my newsletter!</p>
      <form
        action="https://tinyletter.com/hswolff"
        method="post"
        target="popupwindow"
        onSubmit={() => {
          window.open(
            'https://tinyletter.com/hswolff',
            'popupwindow',
            'scrollbars=yes,width=800,height=600'
          );
        }}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <input
            type="text"
            name="email"
            id="tlemail"
            placeholder="Email address"
            css={css`
              margin-bottom: 5px;
            `}
          />
          <input type="hidden" defaultValue={1} name="embed" />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
}
