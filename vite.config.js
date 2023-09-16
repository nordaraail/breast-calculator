import { defineConfig } from "vite";
// import vue from '@vitejs/plugin-vue' // vue 3
import { createVuePlugin as vue } from "vite-plugin-vue2"; //vue 2
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [vue()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
