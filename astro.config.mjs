// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // IMPORTANT: Update this to your domain. Also update public/robots.txt sitemap URL to match.
  site: 'https://example.com',
  output: 'static',
  trailingSlash: 'never',
  adapter: cloudflare(),
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
