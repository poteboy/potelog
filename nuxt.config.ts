import { defineNuxtConfig } from 'nuxt';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    plugins: [],
    srcDir: 'src/',
    vite: {
        plugins: [vueJsx()],
        resolve: {
            alias: {
                '@src/': `${__dirname}/src/`,
            },
        },
    },
});
