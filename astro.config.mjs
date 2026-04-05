import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const isPreview = process.env.IS_PREVIEW === 'true';
const prNumber = process.env.PR_NUMBER || '';
const base = isPreview && prNumber ? `/preview/pr-${prNumber}/` : '/';

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
