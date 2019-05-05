import React from 'react';
import Helmet from 'react-helmet';
import { css } from '@emotion/core';
import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <Helmet title="About" />
      <h1>About</h1>
      <p>Hello! This page is all about me. Written by me. Quite meta.</p>
      <p>
        I currently live in New York City with my wife and son. We&apos;ve been
        in NYC for over 6 years now and have enjoyed every minute. Sure,
        it&apos;s the city that never sleeps, but that works for us.
      </p>
      <p>
        During the day I{' '}
        <a href="http://www.linkedin.com/in/hswolff" title="LinkedIn">
          work
        </a>{' '}
        at <a href="http://mongodb.com/">MongoDB</a> where I&apos;m a Lead
        Engineer, leading a team of engineers to make coffee into code.
        It&apos;s an overused expression, but some days it truly feels as simple
        as that.
      </p>
      <p>
        I&apos;m pretty damn social, so you can find me on most social networks.
        Such as:
      </p>
      <div
        css={css`
          a {
            box-shadow: none;
            & + a {
              margin-left: 20px;
            }
          }
        `}
      >
        <a href="https://twitter.com/hswolff" title="Twitter">
          <img src="/images/external-networks/twitter.png" alt="Twitter" />
        </a>
        <a href="https://github.com/hswolff" title="GitHub">
          <img src="/images/external-networks/github.png" alt="GitHub" />
        </a>
        <a href="https://www.facebook.com/harrywolff" title="Facebook">
          <img src="/images/external-networks/facebook.png" alt="Facebook" />
        </a>
        <a href="https://foursquare.com/hswolff" title="Foursquare">
          <img
            src="/images/external-networks/foursquare.png"
            alt="Foursquare"
          />
        </a>
        <a href="http://instagram.com/hswolff" title="Instagram">
          <img src="/images/external-networks/instagram.png" alt="Instagram" />
        </a>
        <a href="http://www.linkedin.com/in/hswolff" title="LinkedIn">
          <img src="/images/external-networks/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
    </Layout>
  );
}
