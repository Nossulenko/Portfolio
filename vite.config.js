import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import babel from 'vite-plugin-babel';
import react from '@vitejs/plugin-react';
import { ViteImageOptimize } from 'vite-plugin-imagemin';

export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [
    reactRefresh(),
    react(),
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        presets: ['@babel/preset-react']
      }
    }),
    ViteImageOptimize({
      test: /\.(jpe?g|png|gif|tiff|webp|svg)$/i,
      includePublicDir: true
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          arwes: ['@arwes/react', 'arwes'],
          audio: ['howler']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  }
});
