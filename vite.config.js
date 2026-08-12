import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
    plugins: [viteSingleFile()],
    build: {
        target: 'esnext',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'app.html'),// Point this to your newly named file
            },
        },
        assetsInlineLimit: 100000000,// This helps ensure small assets like icons are also inlined
    },
    server: {
        open: '/app.html' 
    }
});