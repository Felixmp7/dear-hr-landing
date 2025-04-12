import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

export default defineConfig({
    output: 'server',
    integrations: [tailwind(), sitemap(), robotsTxt(), react()],
    adapter: vercel(),
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'es',
    },
});
