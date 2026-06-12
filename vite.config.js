import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // jika ada

export default defineConfig({
  plugins: [vue()],
  // WAJIB SAMA PERSIS dengan nama repository GitHub kamu
  base: '/Puji-Sulaiman_UAS_WEB/', 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // biarkan jika sudah ada bawaan dari Vite
    },
  },
})