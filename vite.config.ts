import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import checker from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/config/
export default defineConfig((env) => ({
  plugins: [
    env.mode !== "test" && checker({
      vueTsc: true,
      eslint: { lintCommand: 'eslint "./src/**/*.{ts,vue}"' },
    }),
    dts(),
    vue()
  ],
}))
