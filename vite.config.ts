import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Allows @use '@/...' to resolve from src/
        importers: [
          {
            findFileUrl(url: string) {
              if (!url.startsWith('@/')) return null
              return new URL('file://' + path.resolve(__dirname, 'src', url.slice(2)))
            },
          },
        ],
      },
    },
  },
})
