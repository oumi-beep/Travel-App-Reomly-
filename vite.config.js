<<<<<<< HEAD
// vite.config.js
=======
>>>>>>> 672d1b3d7a423912424e4033eefdefc4439caa05
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
<<<<<<< HEAD
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:2001',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '/api'),
            },
        },
    },
=======
  plugins: [react()],
  base: "/travel_app_projet/",
  server: {
    host: '0.0.0.0',  // Autorise l'accès externe
    port: process.env.PORT || 3000,  // Utilise le port fourni par Render
  },
>>>>>>> 672d1b3d7a423912424e4033eefdefc4439caa05
});
