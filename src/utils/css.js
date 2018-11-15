import { css, injectGlobal } from 'emotion';
import { darken, lighten } from 'polished';

// https://coolors.co/04080f-507dbc-a1c6ea-bbd1ea-dae3e5
export const palette = {
  dark: '#04080f',
  primary: '#507dbc',
  secondary: '#a1c6ea',
  info: '#bbd1ea',
  light: '#dae3e5',
};

const background = '#fff';
export const color = {
  background,
  divider: darken(0.1, background),
  title: '#212121',
  titleLighter: lighten(0.4, '#212121'),
};

export function setupGlobalStyles() {
  injectGlobal`

  `;
}

const breakpoints = {
  // Numerical values will result in a min-width query
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  // String values will be used as is
  phone: 'only screen and (max-width: 500px)',
};

export const variable = {
  content: 720,
};

export const mainContent = css`
  margin: 0 auto 30px;
  max-width: ${variable.content}px;
  @media ${breakpoints.phone} {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

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
