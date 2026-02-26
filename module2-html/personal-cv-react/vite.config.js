import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/WebSys/module2-html/personal-cv-react/',
  plugins: [react()],
})