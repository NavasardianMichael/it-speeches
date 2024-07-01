import react from '@vitejs/plugin-react'
import { config } from 'dotenv'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import checker from 'vite-plugin-checker'

config()

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      typescript: true,
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
})
