// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",          // ← aquí viven tus HTML, CSS, JS
  build: {
    outDir: "../dist",  // resultará en /dist
    emptyOutDir: true
  },
  server: {
    open: "/index.html" // abre automáticamente la home
  }
});
