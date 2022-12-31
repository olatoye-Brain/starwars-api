import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteRestart from 'vite-plugin-restart'




export default {
  plugins: [
    ViteRestart({
      restart: [
        'my.config.[jt]s',
      ]
      
    })
  ],
};