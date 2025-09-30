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
    build: {
        rollupOptions: {
            output: {
                // IMPORTANT: Ajouter des hash aux fichiers
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.').pop();
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'img';
                    } else if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
                        extType = 'fonts';
                    }
                    return `assets/${extType}/[name]-[hash][extname]`;
                },
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
            },
        },
        // Générer le manifest pour le cache busting
        manifest: true,
        // Optimiser les chunks
        chunkSizeWarningLimit: 1000,
    },
})