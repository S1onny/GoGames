import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
    root: './src',
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: '../build',
        rollupOptions: {
            input: {
                main: './src/index.html'
            }
        }
    },
    plugins: [
        injectHTML(),
        ViteMinifyPlugin(),
        ViteImageOptimizer({
            png: {
                // https://sharp.pixelplumbing.com/api-output#png
                quality: 80,
            },
            jpeg: {
                // https://sharp.pixelplumbing.com/api-output#jpeg
                quality: 80,
            },
            jpg: {
                // https://sharp.pixelplumbing.com/api-output#jpeg
                quality: 80,
            },
        }),
    ],
});
