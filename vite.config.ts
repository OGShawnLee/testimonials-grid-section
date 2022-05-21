import windicss from 'vite-plugin-windicss';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), windicss()],
  resolve: {
    alias: {
      '@assets': resolve('src/assets'),
      '@assets/*': resolve('src/assets/*'),
      '@components': resolve('src/components'),
      '@components/*': resolve('src/components/*'),
    },
  },
});
