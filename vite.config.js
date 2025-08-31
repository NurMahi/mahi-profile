import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mahi-profile/',
  build: {
    outDir: 'dist',
  },
})