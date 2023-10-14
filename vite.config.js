import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import babel from 'vite-plugin-babel';
import react from '@vitejs/plugin-react';

export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [reactRefresh(), react(), babel({
    babelConfig: {
      babelrc: false,
      configFile: false,
      presets: ['@babel/preset-react']
    }
  })]
});
