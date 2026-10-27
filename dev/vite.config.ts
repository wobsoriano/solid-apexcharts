import { URL, fileURLToPath } from 'node:url'
import solid from '@solidjs/vite-plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: [{ find: 'src', replacement: fileURLToPath(new URL('../src', import.meta.url)) }],
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
