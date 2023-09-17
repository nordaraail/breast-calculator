import { defineConfig } from "vite";
// import vue from '@vitejs/plugin-vue' // vue 3
import vue from "@vitejs/plugin-vue2"; //vue 2
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/breast-calculator/',
  plugins: [vue()],
  resolve: {
    base:'breast-calculator',
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
