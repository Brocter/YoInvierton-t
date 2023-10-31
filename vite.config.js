import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      // Add the Google Font URL to the `additionalData` property
      scss: {
        additionalData: `@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Quicksand&display=swap');`,
      },
    },
  },
  server: {
    host: true
  },
});
