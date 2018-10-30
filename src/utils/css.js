import { css } from 'emotion';
import { darken, lighten } from 'polished';

export const mainContent = css`
  margin: 0 auto;
  max-width: 720px;
`;

const background = '#fff';
export const color = {
  background,
  divider: darken(0.1, background),
  title: '#212121',
  titleLighter: lighten(0.4, '#212121'),
};

const breakpoints = {
  // Numerical values will result in a min-width query
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  // String values will be used as is
  phone: 'only screen and (max-width: 500px)',
};

export const mediaQueries = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    const bpValue = breakpoints[label];
    const bpIsString = typeof bpValue === 'string';
    let prefix = bpIsString ? '' : 'min-width:';
    let suffix = bpIsString ? '' : 'px';
    accumulator[label] = cls =>
      css`
        @media ${bpIsString ? bpValue : `(${prefix + bpValue + suffix})`} {
          ${cls};
        }
      `;
    return accumulator;
  },
  {}
);
