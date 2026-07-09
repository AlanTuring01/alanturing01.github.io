// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alanturing01.github.io',
  integrations: [sitemap()],
  build: {
    // 全部样式输出为外部 CSS 文件，配合 CSP style-src 'self'
    inlineStylesheets: 'never',
  },
  vite: {
    build: {
      // 禁止内联脚本，配合 CSP script-src 'self'（无 unsafe-inline）
      assetsInlineLimit: 0,
    },
  },
});
