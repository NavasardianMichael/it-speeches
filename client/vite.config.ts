import react from '@vitejs/plugin-react'
import { config } from 'dotenv'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
    open: true,
  },
})
