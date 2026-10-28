// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: https://mynameisseone.github.io/fullstack-portfolio/
  site: 'https://mynameisseone.github.io',
  base: '/fullstack-portfolio',
  integrations: [sitemap()],
});
