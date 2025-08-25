// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://liwox.net', // ✅ Clean URL
  integrations: [
    tailwind(),   // ✅ Enable Tailwind
    sitemap(),    // ✅ Generate sitemap.xml
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',  // ✅ Use dark theme to match Blackhole
      wrap: true             // ✅ Wrap long lines
    }
  }
});