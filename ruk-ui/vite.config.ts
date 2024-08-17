import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: '../ebuild',
    lib: {
      entry: './src/main.ts',
      formats: ['es'],
      fileName: (format, entry) => `${entry}${format == 'es' ? '' : '.' + format}.js`,
    },
    sourcemap: true
  }
})
