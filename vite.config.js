import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills()
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['lucide-react', 'react-icons', 'framer-motion'],
          'pdf-vendor': ['react-pdf', '@react-pdf-viewer/core', '@react-pdf-viewer/default-layout'],
          'carousel-vendor': ['react-slick', 'slick-carousel']
        }
      }
    }
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      'lucide-react': 'lucide-react/dist/esm/icons',
      'react-icons': 'react-icons',
      'framer-motion': 'framer-motion',
      'react-pdf': 'react-pdf',
      'react-slick': 'react-slick',
      'slick-carousel': 'slick-carousel'
    }
  }
}); 