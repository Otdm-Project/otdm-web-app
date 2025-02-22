import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro'
import solid from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  site: 'https://otdm.dev',
  integrations: [
    UnoCSS({injectReset: true}),
    solid()
  ],
  image: {
    domains: ["github.com"],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    }
  }
});