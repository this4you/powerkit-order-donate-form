import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/powerkit-order-donate-form/',
  build: {
    rollupOptions: {
      output: {
        dir: 'dist',
        entryFileNames: 'orderDonateForm.js',
        assetFileNames: 'orderDonateForm.css',
        chunkFileNames: "orderDonateFormChunk.js",
        manualChunks: undefined,
      }
    }
  },
  plugins: [react()],
})
