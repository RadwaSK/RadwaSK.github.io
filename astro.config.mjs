// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages deployment configuration
  site: 'https://radwakhattab.github.io',
  
  // Use 'site' mode for GitHub Pages
  base: '/',
  
  // Optimizations
  compressHTML: true,
  
  // Image optimization
  image: {
    domains: ['radwakhattab.github.io'],
  },
});
