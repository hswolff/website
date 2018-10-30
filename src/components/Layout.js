import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import 'prismjs/themes/prism.css';

import '../utils/analytics';
import { mainContent } from '../utils/css';
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
      <React.Fragment>
        <Helmet
          title={siteMetadata.title}
          titleTemplate={`%s | ${siteMetadata.title}`}
          meta={[
            { name: 'description', content: siteMetadata.description },
            { name: 'keywords', content: siteMetadata.keywords },
          ]}
        />
        <Header />
        <main className={mainContent}>{children}</main>
        <Footer />
      </React.Fragment>
    )}
  />
);

export default Layout;
