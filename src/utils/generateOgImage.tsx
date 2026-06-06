import { SITE } from '@config';
import { writeFile } from 'node:fs/promises';
import { Resvg } from '@resvg/resvg-js';
import { loadMerriweatherFonts, renderOgImageSvg } from './og-image.mjs';

const fonts = await loadMerriweatherFonts();

const generateOgImage = async (mytext = SITE.title) => {
  const svg = await renderOgImageSvg({
    text: mytext,
    site: SITE,
    fonts,
  });

  // render png in production mode
  if (import.meta.env.MODE === 'production') {
    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    console.info('Output PNG Image  :', `${mytext}.png`);

    await writeFile(`./dist/${mytext}.png`, new Uint8Array(pngBuffer));
  }

  return svg;
};

export default generateOgImage;
