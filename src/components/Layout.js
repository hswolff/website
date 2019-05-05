import React from 'react';

import 'prismjs/themes/prism.css';

import '../utils/analytics';
import { css, Global } from '@emotion/core';
import { globalStyles, mediaQueries, variable } from '../utils/css';
import Nav from './Nav';
import Footer from './Footer';
import SEO from './SEO';

const Layout = ({ children }) => (
  <React.Fragment>
    <Global styles={globalStyles} />
    <SEO />
    <div
      css={css`
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
        css={css`
          flex: 1 0 auto;
          max-width: ${variable.content}px;
        `}
      >
        <main
          css={css`
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
);

export default Layout;
