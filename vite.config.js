import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/Puji-Sulaiman_UAS_WEB/',  
  build: {
    outDir: 'dist'
  }
})