import { defineNuxtConfig } from 'nuxt';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: ['@nuxt/content'],
  css: ['@src/style/global.css'],
  vite: {
    plugins: [vueJsx()],
    resolve: {
      alias: {
        '@src/': `${__dirname}/src/`,
        '@core': `${__dirname}/src/components/core`,
      },
    },
  },
  vue: {
    config: {
      silent: true,
    },
  },
  router: {
    mode: 'history',
  },
  // ssr: false,
  nitro: {
    routes: {
      '/post/*': { swr: true },
    }
  },
});
