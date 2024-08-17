import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 5000
  },
  build: {
    outDir: '../ebuild',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        app: './index.html',
      },
    },
    lib: {
      entry: './src/main.ts',
      formats: ['es'],
      fileName: (format, entry) => `ruk${format == 'es' ? '' : '.' + format}.js`,
    },
    sourcemap: true
  }
})
