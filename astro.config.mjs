import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';
import remarkCollapse from 'remark-collapse';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { remarkReadingTime } from './plugins/remark-reading-time';
import { remarkExcerpt } from './plugins/remark-excerpt';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: 'Table of contents',
        },
      ],
      remarkReadingTime,
      remarkExcerpt,
    ],
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
