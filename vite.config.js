import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Ganti 'nama-repo-kamu' dengan nama repository GitHub project ini
  base: '/Puji_Sulaiman_UAS_WEB/', 
  build: {
    outDir: 'dist'
  }
})