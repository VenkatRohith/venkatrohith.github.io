import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const base = process.env.ASTRO_BASE || '/';

export default defineConfig({
  site: 'https://venkatrohith.github.io',
  base,
  integrations: [sitemap()],
  vite: {
    build: {
      assetsInlineLimit: 1024,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
