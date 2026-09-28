import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   allowedHosts: ['2cde-103-57-187-162.ngrok-free.app']
  // }
  // server: {
  //   allowedHosts: ['55be-103-57-187-162.ngrok-free.app']
  // }
  base: '/tech-react-app/',
})
