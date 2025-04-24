import honox from 'honox/vite'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import honoViteWorkers from '@hono/vite-build/cloudflare-workers'

export default defineConfig({
  plugins: [
    tailwindcss(),
    honox({
      client: {
        input: ['./app/style.css'],
      },
    }),
    honoViteWorkers(),
  ],
})
