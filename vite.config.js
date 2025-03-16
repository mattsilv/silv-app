import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Expose to all network interfaces
    open: true  // Auto-open in browser
  },
  build: {
    // Don't mark react-router-dom as external - it needs to be bundled
    minify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'styled-components'],
        }
      }
    }
  }
})
