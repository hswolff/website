import { css } from '@emotion/core';
import facepaint from 'facepaint';
import { darken, lighten } from 'polished';

// https://coolors.co/04080f-507dbc-a1c6ea-bbd1ea-dae3e5
export const palette = {
  black: '#04080f',
  heavyBlue: '#507dbc',
  mediumBlue: '#a1c6ea',
  lightBlue: '#bbd1ea',
  offLightBlue: '#dae3e5',
};

const background = '#fff';
export const color = {
  background,
  divider: darken(0.1, background),
  title: '#212121',
  titleLighter: lighten(0.4, '#212121'),
};

// videoWrapper
// Hack from https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php
export const globalStyles = css`
  .videoWrapper {
    position: relative;
    padding-bottom: 50%;
    padding-top: 25px;
    height: 0;
    margin: 20px 0;
  }
  .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const breakpoints = {
  // Numerical values will result in a min-width query
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
};

export const mq = facepaint([
  ...Object.keys(breakpoints)
    .filter((key) => key !== 'phone')
    .map((key) => `@media (min-width: ${breakpoints[key]}px)`),
]);

export const variable = {
  content: 960,
};

export const mainContent = css`
  margin: 0 auto 30px;
  max-width: ${variable.content}px;
  @media ${breakpoints.phone} {
    margin-left: 20px;
    margin-right: 20px;
  }
`;
