import React from 'react';

import '../utils/analytics';
import { css } from '@emotion/core';
import { variable, mq } from '../utils/css';
import Nav from './Nav';
import Footer from './Footer';
import SEO from './SEO';

const Layout = ({ children }) => (
  <>
    <SEO />
    <div
      css={[
        css`
          display: flex;
          justify-content: flex-start;
          max-width: ${variable.content}px;
        `,
        mq({
          flexDirection: ['column', null, 'row'],
          margin: ['1rem', null, '3rem 1rem', '3rem auto'],
          nav: {
            margin: ['0 0 2rem', null, '0 1rem 0 0', '0 3rem 0 0'],
          },
        }),
      ]}
    >
      <Nav />
      <section
        css={css`
          flex: 0 1 auto;
          overflow: auto;
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
  </>
);

export default Layout;
