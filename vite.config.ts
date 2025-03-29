import { defineConfig } from "vite";
//import { fileURLToPath } from "url";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    //outDir: fileURLToPath(new URL("./templates/assets/dist", import.meta.url)),
    outDir: path.resolve(__dirname, "templates/assets/dist"),
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      name: "main",
      fileName: "main",
      formats: ["iife"],
    },
    /* rollupOptions: {
      output: {
        assetFileNames: "[name].[hash].[ext]",
        // assetFileNames: (assetInfo) => {
        //   if (assetInfo.names && assetInfo.names.includes("main.css")) {
        //     return "style.css";
        //   }
        //   return "[name].[hash][extname]";
        // },
      },
    }, */
  },
});
