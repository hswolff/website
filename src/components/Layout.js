import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import 'prismjs/themes/prism.css';

import '../utils/analytics';
import { blogContent } from '../utils/css';
import Header from './Header';
import Footer from './Footer';

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
      <div>
        <Helmet
          title={siteMetadata.title}
          titleTemplate={`%s | ${siteMetadata.title}`}
          meta={[
            { name: 'description', content: siteMetadata.description },
            { name: 'keywords', content: siteMetadata.keywords },
          ]}
        />
        <Header />
        <main
          className={blogContent}
          css={{
            paddingTop: 0,
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    )}
  />
);

export default Layout;
