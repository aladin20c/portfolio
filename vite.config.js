import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteSingleFile } from 'vite-plugin-singlefile';

// A tiny custom plugin to automatically rename app.html to index.html on build
function renameIndexPlugin() {
    return {
        name: 'rename-index-html',
        enforce: 'post',
        generateBundle(options, bundle) {
            if (bundle['app.html']) {
                bundle['app.html'].fileName = 'index.html';
            }
        }
    };
}

export default defineConfig({
    // Tell Vite NOT to copy the public folder (since it's already in the root)
    publicDir: false,

    // Add our renaming plugin alongside the single-file plugin
    plugins: [viteSingleFile(), renameIndexPlugin()],
    
    build: {
        target: 'esnext',
        
        // Output straight to your root directory
        outDir: '.',
        
        // CRITICAL: Prevents Vite from deleting your entire repo when building!
        emptyOutDir: false,
        
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'app.html'),
            },
        },
        assetsInlineLimit: 100000000, 
    },
    server: {
        open: '/app.html' 
    }
});