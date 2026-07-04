import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  publicDir: 'public',
  build: {
    outDir: 'renderer-dist',
    emptyOutDir: true,
    assetsDir: 'vite-assets',
    sourcemap: false,
  },
});
