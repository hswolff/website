import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { Resvg } from '@resvg/resvg-js';

import {
  loadMerriweatherFonts,
  renderOgImageSvg,
} from '../../src/utils/og-image.mjs';

describe('og image renderer', () => {
  it('renders a valid svg and png from the bundled fonts', async () => {
    const fonts = await loadMerriweatherFonts();
    const svg = await renderOgImageSvg({
      text: 'Testing OG images',
      site: {
        author: 'Harry Wolff',
        title: 'Harry Wolff',
      },
      fonts,
    });
    const png = new Resvg(svg).render().asPng();

    assert.match(svg, /<svg/);
    assert.ok(png.byteLength > 0, 'png output is non-empty');
    assert.deepEqual(
      Array.from(png.slice(0, 8)),
      [137, 80, 78, 71, 13, 10, 26, 10]
    );
  });
});
