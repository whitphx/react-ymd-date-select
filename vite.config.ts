import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
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
  test: {
    environment: "happy-dom", // https://vitest.dev/guide/features.html#mocking
    setupFiles: "./setupTest.ts",
  },
});
