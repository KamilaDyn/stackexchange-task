import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://kamilaDyn.github.io/stackexchange-task',

  plugins: [react()],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src/'),
    },
  },
});
