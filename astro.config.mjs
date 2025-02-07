import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
    site: 'http://localhost:4321',
    output: 'server',
    integrations: [tailwind(), sitemap(), robotsTxt()],
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'es',
    },
    adapter: node({
        mode: 'standalone',
    }),
});
