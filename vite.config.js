import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/proyecto-ReactJs-Coderhouse-Eter3d-Eccomerce/', // 👈 reemplazá esto con el nombre real de tu repo
  plugins: [react()],
})
