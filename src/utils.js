/**
 * Returns the correct prefix path for static assets based on environment.
 * - Local Dev Server: "/" (Vite serves the public folder directly at root)
 * - Production Build: "./public" (Looks inside the public folder sitting next to index.html)
 */
export const assetDir = import.meta.env.DEV ? '/' : './public/';

/**
 * Helper function to cleanly build asset paths
 * Usage: getAsset('arcade.gif') 
 * - Dev: "/arcade.gif"
 * - Build: "./public/arcade.gif"
 */
export const getAsset = (path) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return import.meta.env.DEV 
    // DEV: Absolute path from the root of the Vite dev server
    ? `/public/${cleanPath}` 
    
    // BUILD: Relative path from index.html (so GitHub Pages finds it)
    : `./public/${cleanPath}`; 
};