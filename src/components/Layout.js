import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import 'prismjs/themes/prism.css';

import '../utils/analytics';
import { setupGlobalStyles, mediaQueries, variable } from '../utils/css';
import Nav from './Nav';
import Footer from './Footer';
import { css } from 'emotion';

setupGlobalStyles();

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutData {
        site {
          siteMetadata {
            title
            description
            siteUrl
            keywords
          }
        }
      }
    `}
    render={({ site: { siteMetadata } }) => (
      <React.Fragment>
        <Helmet
          title={siteMetadata.title}
          titleTemplate={`%s | ${siteMetadata.title}`}
          meta={[
            { name: 'description', content: siteMetadata.description },
            { name: 'keywords', content: siteMetadata.keywords },
          ]}
        />
        <div
          css={`
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            margin: 3rem 5rem;
            nav {
              margin-right: 4rem;
              max-width: 200px;

              ${mediaQueries.phone(css`
                margin: 0 0 2rem;
                max-width: 100%;
              `)};
            }
            ${mediaQueries.phone(css`
              flex-direction: column;
              margin: 1rem;
            `)};
          `}
        >
          <Nav />
          <section
            css={`
              flex: 1 0 auto;
              max-width: ${variable.content}px;
            `}
          >
            <main
              css={`
                h1 {
                  margin-top: 0;
                }
              `}
            >
              {children}
            </main>
            <Footer />
          </section>
        </div>
      </React.Fragment>
    )}
  />
);

export default Layout;
