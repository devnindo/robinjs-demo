import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    commonjsOptions: {
      include: ['tailwind-config.cjs', 'node_modules/**'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@commons': path.resolve(__dirname, './src/commons'),
      '@components': path.resolve(__dirname, './src/components'),
      '@main': path.resolve(__dirname, "./src/main"),
      '@robin': path.resolve(__dirname, "./src/robin-js")
    },
  },
  plugins: [react()],


  server: {
    open: true,
    port: 3000
  },
})
