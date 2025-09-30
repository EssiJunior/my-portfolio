import {
    defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [{
            find: "@",
            replacement: path.resolve(__dirname, "src")
        }],
    },
    optimizeDeps: {
        exclude: ['js-big-decimal']
    },
    // Configuration Vite pour le build
    build: {
        rollupOptions: {
            output: {
                // Ajouter des hash aux fichiers pour le cache busting
                assetFileNames: 'assets/[name].[hash].[ext]',
                chunkFileNames: 'assets/[name].[hash].js',
                entryFileNames: 'assets/[name].[hash].js',
            },
        },
    },
    // Pour le serveur de dev (optionnel)
    server: {
        headers: {
            'Cache-Control': 'public, max-age=31536000',
        },
    },
})