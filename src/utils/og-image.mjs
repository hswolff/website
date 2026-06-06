import { readFile } from 'node:fs/promises';
import { URL } from 'node:url';

import { jsx, jsxs } from 'react/jsx-runtime';
import satori from 'satori';

export async function loadMerriweatherFonts() {
  const resolveFont = import.meta.resolve;
  if (!resolveFont) {
    throw new Error('Unable to resolve Merriweather font assets.');
  }

  const [fontRegular, fontBold] = await Promise.all([
    readFile(
      new URL(
        await resolveFont(
          '@fontsource/merriweather/files/merriweather-latin-400-normal.woff'
        )
      )
    ),
    readFile(
      new URL(
        await resolveFont(
          '@fontsource/merriweather/files/merriweather-latin-700-normal.woff'
        )
      )
    ),
  ]);

  return { fontRegular, fontBold };
}

function ogImageTree(text, site) {
  return jsxs('div', {
    style: {
      background: '#fefbfb',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    children: [
      jsx('div', {
        style: {
          position: 'absolute',
          top: '-1px',
          right: '-1px',
          border: '4px solid #000',
          background: '#ecebeb',
          opacity: '0.9',
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'center',
          margin: '2.5rem',
          width: '88%',
          height: '80%',
        },
      }),
      jsx('div', {
        style: {
          border: '4px solid #000',
          background: '#fefbfb',
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'center',
          margin: '2rem',
          width: '88%',
          height: '80%',
        },
        children: jsx('div', {
          style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: '20px',
            width: '90%',
            height: '90%',
          },
          children: [
            jsx('p', {
              style: {
                fontSize: 72,
                fontWeight: 'bold',
                maxHeight: '84%',
                overflow: 'hidden',
              },
              children: text,
            }),
            jsx('div', {
              style: {
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: '8px',
                fontSize: 28,
              },
              children: [
                jsx('span', {
                  children: [
                    'by ',
                    jsx('span', {
                      style: {
                        color: 'transparent',
                      },
                      children: '"',
                    }),
                    jsx('span', {
                      style: {
                        overflow: 'hidden',
                        fontWeight: 'bold',
                      },
                      children: site.author,
                    }),
                  ],
                }),
                jsx('span', {
                  style: {
                    overflow: 'hidden',
                    fontWeight: 'bold',
                  },
                  children: site.title,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}

export async function renderOgImageSvg({ text, site, fonts }) {
  return satori(ogImageTree(text, site), {
    width: 1200,
    height: 630,
    embedFont: true,
    fonts: [
      {
        name: 'Merriweather',
        data: fonts.fontRegular,
        weight: 400,
        style: 'normal',
      },
      {
        name: 'Merriweather',
        data: fonts.fontBold,
        weight: 700,
        style: 'normal',
      },
    ],
  });
}
