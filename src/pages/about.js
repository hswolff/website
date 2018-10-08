import React from 'react';
import Helmet from 'react-helmet';

export default function AboutPage() {
  return (
    <div>
      <Helmet title="About" />
      <h1>About</h1>
      <p>Harry Wolff currently lives in New York City.</p>
      <p>Find him online at the following social networks.</p>
      <div
        css={`
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
        <a href="https://plus.google.com/+HarryWolff" title="Google+">
          <img src="/images/external-networks/google+.png" alt="Google+" />
        </a>
      </div>
    </div>
  );
}
