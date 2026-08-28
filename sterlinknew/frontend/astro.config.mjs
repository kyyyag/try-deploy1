import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Jangan lupa site dan base untuk GitHub Pages dari langkah sebelumnya
  site: 'https://kyyyag.github.io',
  base: '/try-deploy1',
  integrations: [tailwind()],
});