// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://betterlivesbuildingtribes.com',
  output: 'static',
  ...(isProduction && { adapter: cloudflare() }),
  integrations: [sitemap()],
});