import { THEME_COLORS } from './src/theme';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                white: '#FFFFFF',
                black: '#161925',
                ...THEME_COLORS,
            },
            screens: {
                xs: '420px',
            },
        },
    },
    plugins: [require('tailwind-scrollbar')],
};
