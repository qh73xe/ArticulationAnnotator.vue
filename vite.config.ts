import { defineConfig } from 'vite';
import { resolve } from 'path';

import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig((env) => ({
  build: {
    lib: {
      entry: resolve(__dirname, './src/main.ts'),
      name: 'articulationannotator.vue',
      fileName: 'articulationannotator.vue.lib',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: { globals: { vue: 'Vue' } },
    },
  },
  plugins: [
    dts(),
    vue(),
    env.mode !== 'test' &&
      checker({
        vueTsc: true,
        eslint: { lintCommand: 'eslint "./src/**/*.{ts,vue}"' },
      }),
  ],
}));
