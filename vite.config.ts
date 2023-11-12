import { defineConfig } from 'vite'
import { resolve } from 'path';

import vue from '@vitejs/plugin-vue'

import checker from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';

export default defineConfig((env) => ({
  build: {
    lib: {
      entry: resolve(__dirname, './src/main.ts'),
      name: 'wavesurfer.vue',
      fileName: 'wavesurfer.vue.lib',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: { globals: { vue: 'Vue' } },
    },
  },
  plugins: [
    env.mode !== "test" && checker({
      vueTsc: true,
      eslint: { lintCommand: 'eslint "./src/**/*.{ts,vue}"' },
    }),
    dts(),
    vue()
  ],
}))
