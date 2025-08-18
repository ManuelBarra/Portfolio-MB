// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Ya no necesitamos 'path' ni la configuración 'resolve' para este caso.

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
});
