import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/art-gallery/',
  plugins: [svelte()],
  resolve: {
    alias: {
      '@': path.resolve('/src'),
    },
  },
  server:{
    port:3001
  }
})
