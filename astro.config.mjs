import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://venkatrohith.github.io',
  integrations: [sitemap()],
  vite: {
    build: {
      assetsInlineLimit: 1024,
      esbuild: {
        drop: ['console', 'debugger'],
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
