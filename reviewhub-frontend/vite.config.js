import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

// Make __dirname available in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Dev server settings (helps avoid CORS in local dev)
  server: {
    host: true,        // allows access from LAN/Gitpod if needed
    port: 5173,        // default Vite port; change if you like
    strictPort: true,  // fail if 5173 is taken (optional)
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        // If your backend doesn’t serve /api as a prefix in dev, you can uncomment:
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
