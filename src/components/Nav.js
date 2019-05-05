import React from 'react';
import { Link } from 'gatsby';
import { css, cx } from 'emotion';
import {
  FaTwitter,
  FaRss,
  FaToolbox,
  FaUser,
  FaYoutube,
  FaPodcast,
  FaGithub,
  FaEnvelope,
  FaMicrophone,
  FaAlignJustify,
  FaBox,
  FaCode,
  FaStar,
} from 'react-icons/fa';
import { color, mediaQueries, mq } from '../utils/css';
import styled from 'react-emotion';
import { darken } from 'polished';

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
        font-size: 0.9rem;
      `}
    >
      <NavLink to="/blog/page/1/">
        <FaAlignJustify /> Blog
      </NavLink>
      <SubNavLinks>
        <NavLink href="http://feeds.feedburner.com/harrywolff/zOZJ">
          <FaRss /> RSS
        </NavLink>
        {/* <NavLink to="/blog/category/code/">
          <FaCircle size="0.5rem" />
          Code
        </NavLink>
        <NavLink to="/blog/category/career/">
          <FaCircle size="0.5rem" />
          Career
        </NavLink>
        <NavLink to="/blog/category/personal/">
          <FaCircle size="0.5rem" />
          Personal
        </NavLink>
        <NavLink to="/blog/tags/">Tags</NavLink> */}
        <NavLink to="/blog/archive/">
          <FaBox /> Archive
        </NavLink>
      </SubNavLinks>
      <NavLink to="/projects/">
        <FaToolbox />
        Projects
      </NavLink>
      <SubNavLinks>
        <NavLink href="https://www.youtube.com/user/hswolff">
          <FaYoutube /> YouTube
        </NavLink>
        <NavLink href="https://theconsolelog.com/">
          <FaPodcast /> Podcast
        </NavLink>
        <NavLink href="https://github.com/hswolff">
          <FaGithub /> Open Source
        </NavLink>
        <NavLink href="https://www.patreon.com/hswolff">
          <FaStar /> Patreon
        </NavLink>
      </SubNavLinks>
      <NavLink to="/about/">
        <FaUser /> About
      </NavLink>
      <SubNavLinks>
        <NavLink to="/about/contact-me/">
          <FaEnvelope /> Contact Me
        </NavLink>
        <NavLink to="/about/talks/">
          <FaMicrophone /> Talks
        </NavLink>
        <NavLink href="https://twitter.com/hswolff">
          <FaTwitter /> @hswolff
        </NavLink>
        <NavLink href="https://github.com/hswolff/website">
          <FaCode /> Source
        </NavLink>
      </SubNavLinks>
      <div
        css={cx(
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
                textAlign: ['left', 'center'],
              },
            })
          )
        )}
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
            css={cx(`
              display: flex;
              flex-direction: column;
            `)}
          >
            <input
              type="text"
              name="email"
              id="tlemail"
              placeholder="Email address"
              css={`
                margin-bottom: 5px;
              `}
            />
            <input type="hidden" defaultValue={1} name="embed" />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  </nav>
);

const NavLink = props => {
  return React.createElement(props.href ? 'a' : Link, {
    ...props,
    className: cx(
      css`
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
      `,
      css(
        mq({
          justifyContent: ['flex-start', 'center'],
        })
      ),
      props.className
    ),
  });
};

const SubNavLinks = styled('div')`
  ${mq({
    marginLeft: ['10px', 0],
  })}
  a {
    font-size: 0.8rem;
  }
`;
