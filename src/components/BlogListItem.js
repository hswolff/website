import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import { DateTime } from 'luxon';
import { lighten } from 'polished';
import { color } from '../utils/css';

export default function BlogListItem(props) {
  const { asPage, frontmatter, timeToRead, fields } = props;
  const Title = asPage ? BaseTitle.withComponent('h1') : BaseTitle;
  return (
    <div
      css={`
        padding: ${asPage ? 0 : '40px'} 0;
        opacity: 0.9;
        transition: opacity 0.1s ease-in-out;
        &:hover {
          opacity: 1;
        }
        & + & {
          border-top: 1px solid ${color.divider};
        }
      `}
    >
      <Title asPage={asPage}>
        {asPage ? (
          frontmatter.title
        ) : (
          <Link to={fields.url}>{frontmatter.title}</Link>
        )}
      </Title>
      {!asPage && (
        <div
          css={`
            margin: 10px 0;
          `}
        >
          {props.excerpt}
        </div>
      )}
      <div
        css={`
          display: flex;
          justify-content: flex-start;
          align-items: baseline;
          font-size: 0.82rem;
          &,
          a {
            color: ${lighten(0.3, color.background)};
          }
        `}
      >
        <FooterItem>
          {DateTime.fromISO(frontmatter.date).toFormat('LLLL d, y')}
        </FooterItem>
        <div
          css={`
            padding: 0 10px;
          `}
        >
          &bull;
        </div>
        <div
          css={`
            a {
              box-shadow: none;
              &:hover {
                text-decoration: underline;
              }
            }
          `}
        >
          {(frontmatter.tags || []).map((tag, index) => (
            <span key={tag}>
              <Link to={fields.tagsUrls[index]}>{tag}</Link>
              {index + 1 !== frontmatter.tags.length && ', '}
            </span>
          ))}
        </div>
        <div
          css={`
            padding: 0 10px;
          `}
        >
          &bull;
        </div>
        <FooterItem>
          Read time {timeToRead} minute{timeToRead > 1 && 's'}
        </FooterItem>
      </div>
    </div>
  );
}

BlogListItem.defaultProps = {
  asPage: false,
};

const BaseTitle = styled('h2')`
  margin: 0;
  a {
    color: ${color.background};
    box-shadow: none;
    transition: opacity ease-in 0.2s;
    ${({ asPage }) => !asPage && 'opacity: 0.8;'};
    &:hover {
      ${({ asPage }) => !asPage && 'opacity: 1;'};
    }
  }
  ${({ asPage }) => asPage && 'margin-top: 10px;'};
`;

const FooterItem = styled('div')`
  flex: 0 0 auto;
`;
