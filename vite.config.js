import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader({ defaultImport: 'component' })],
  server: {
    host: "0.0.0.0",
  },
  resolve: { 
    alias: { 
      '@': '/src',
      '~': '/public'
    }
  },
})
