import React, { useEffect } from 'react';
import { Global, css } from '@emotion/core';
import typography from '../utils/typography';
import { TypographyStyle, GoogleFont } from 'react-typography';
import { globalStyles } from '../utils/css';
import 'prismjs/themes/prism.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <Global styles={globalStyles} />
      <Component {...pageProps} />
      <GoogleAnalytics />
    </>
  );
}

const GoogleAnalytics = (trackingId = 'UA-12625863-1') => {
  useEffect(() => {
    (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      (i[r] =
        i[r] ||
        function () {
          (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
      (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      'script',
      'https://www.google-analytics.com/analytics.js',
      'ga'
    );

    ga('create', trackingId, 'auto');
    ga('send', 'pageview');
  }, []);
  return null;
};
