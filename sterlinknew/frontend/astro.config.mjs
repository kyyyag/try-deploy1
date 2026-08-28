import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kyyyag.github.io',
  base: '/try-deploy1',
  vite: {
    plugins: [tailwindcss()],
  },
});