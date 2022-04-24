import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "vite-plugin-mdx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      // See https://mdxjs.com/advanced/plugins
      remarkPlugins: [
        // E.g. `remark-frontmatter`
      ],
      rehypePlugins: [],
    }),
  ],
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
