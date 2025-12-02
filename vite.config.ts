import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.tsx', // Direct input for script generation
      output: {
        entryFileNames: 'index.js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});