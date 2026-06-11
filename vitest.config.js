import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',          // ✅ provides document, window, etc.
    globals: true,                 // optional: makes describe/test/expect global
    setupFiles: './src/test/setup.js', // optional: see step 2
  },
  base: '/Learning-CICD/', // ✅ set base path for GitHub Pages
  
});