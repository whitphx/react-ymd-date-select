import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        vanillaSample: path.resolve(__dirname, "/samples/vanilla/index.html"),
        materialSample: path.resolve(__dirname, "/samples/material/index.html"),
        chakraSample: path.resolve(__dirname, "/samples/chakra-ui/index.html"),
      },
    },
  },
});
