import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Squelette statique du jeu — déploiement Vercel (projet `jeu`).
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    // Preview Arena : le trafic passe par https://<port>-<sandbox>.e2b.app
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: true,
  },
});
