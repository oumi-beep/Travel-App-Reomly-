import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/travel_app_projet/",
  server: {
    host: '0.0.0.0',  // Autorise l'accès externe
    port: process.env.PORT || 3000,  // Utilise le port fourni par Render
    proxy: {
      '/api': {
        target: 'http://localhost:2001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
});
