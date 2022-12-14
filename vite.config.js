import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Unocss from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  build: {
    outDir: 'docs',
  },
  base: '/ttracker/',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
       }
    },
  },
  plugins: [
    Vue({
      // https://github.com/vuejs/core/tree/main/packages/reactivity-transform
      reactivityTransform: true,
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        // '@vueuse/core',
      ],
      dts: false,
      dirs: [
        './src/composables',
        './src/store',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: false,
      resolvers: [
        IconsResolver(),
      ]
    }),
    Icons(),

    // https://github.com/antfu/unocss
    // see unocss.config.js for config
    Unocss(),
  ],

  // https://github.com/vitest-dev/vitest
  // test: {
  //   environment: 'jsdom',
  // },
})
