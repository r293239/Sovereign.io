import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Sovereign.io/', // This is CRITICAL for GitHub Pages
  server: {
    port: 3000
  },
  build: {
    target: 'es2020',
    outDir: 'dist',
    sourcemap: true
  }
});
