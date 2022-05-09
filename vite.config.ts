import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      jsxImportSource: "@emotion/react", // For Emotion. See https://mdxjs.com/docs/getting-started/#emotion
    }),
    tsconfigPaths(),
  ],
  build: {
    rollupOptions: {
      input: [
        path.resolve(__dirname, "index.html"),
        path.resolve(__dirname, "/samples/vanilla/index.html"),
        path.resolve(__dirname, "/samples/material/index.html"),
        path.resolve(__dirname, "/samples/chakra-ui/index.html"),
        path.resolve(
          __dirname,
          "/site/components/PresetList/samples/vanilla/index.html"
        ),
        path.resolve(
          __dirname,
          "/site/components/PresetList/samples/chakra/index.html"
        ),
        path.resolve(
          __dirname,
          "/site/components/PresetList/samples/mui/index.html"
        ),
      ],
    },
  },
  test: {
    environment: "happy-dom", // https://vitest.dev/guide/features.html#mocking
    setupFiles: "./setupTest.ts",
  },
});
