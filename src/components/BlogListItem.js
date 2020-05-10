import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { DateTime } from 'luxon';
import { lighten } from 'polished';
import { color, mq } from '../utils/css';

export default function BlogListItem(props) {
  const {
    asPage,
    frontmatter: { title, date, tags, category },
    timeToRead,
    fields,
    includeMetaInfo = true,
  } = props;
  const Title = asPage ? BaseTitle.withComponent('h1') : BaseTitle;
  return (
    <div
      css={css`
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
        {asPage ? title : <Link to={fields.url}>{title}</Link>}
      </Title>
      {!asPage && (
        <div
          css={css`
            margin: 10px 0;
          `}
        >
          {props.excerpt}
        </div>
      )}
      {includeMetaInfo && (
        <div
          css={css`
            display: flex;
            justify-content: flex-start;
            align-items: baseline;
            font-size: 0.82rem;
            &,
            a {
              color: ${lighten(0.3, color.title)};
            }
          `}
        >
          <FooterItem>
            {DateTime.fromISO(date).toFormat('LLLL d, y')}
          </FooterItem>
          <FooterSeparator />
          <FooterLinks>
            {category && (
              <span key={category}>
                <Link to={fields.categoryUrl}>{category}</Link>
              </span>
            )}
          </FooterLinks>
          <FooterSeparator />
          <FooterLinks>
            {(tags || []).map((tag, index) => (
              <span key={tag}>
                <Link to={fields.tagsUrls[index]}>{tag}</Link>
                {index + 1 !== tags.length && ', '}
              </span>
            ))}
          </FooterLinks>
          {tags && <FooterSeparator />}
          <FooterItem>
            Read time {timeToRead} minute
            {timeToRead > 1 && 's'}
          </FooterItem>
        </div>
      )}
    </div>
  );
}

BlogListItem.defaultProps = {
  asPage: false,
};

const BaseTitle = styled('h2')`
  margin: 0;
  a {
    color: ${color.title};
    box-shadow: none;
    transition: opacity ease-in 0.2s;
    ${({ asPage }) => !asPage && 'opacity: 0.8;'};
    &:hover {
      ${({ asPage }) => !asPage && 'opacity: 1;'};
    }
  }
`;

const FooterItem = styled('div')`
  ${mq({
    flex: ['auto', null, '0 0 auto'],
  })}
`;

const FooterLinks = styled('div')`
  a {
    box-shadow: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterSeparator = () => (
  <div
    css={css`
      padding: 0 10px;
    `}
  >
    &bull;
  </div>
);

export const query = graphql`
  fragment BlogListItemFragment on MarkdownRemark {
    fileAbsolutePath
    excerpt(pruneLength: 280)
    timeToRead
    frontmatter {
      title
      slug
      date
      category
      tags
    }
    fields {
      url
      tagsUrls
      categoryUrl
    }
  }
`;
