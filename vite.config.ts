import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const mdx = (await import("@mdx-js/rollup")).default;

  return {
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
          path.resolve(__dirname, "/playground/index.html"),
          path.resolve(__dirname, "/playground/vanilla/index.html"),
          path.resolve(__dirname, "/playground/mui/index.html"),
          path.resolve(__dirname, "/playground/chakra-ui/index.html"),
          path.resolve(
            __dirname,
            "/website/components/preset-samples/samples/vanilla/index.html"
          ),
          path.resolve(
            __dirname,
            "/website/components/preset-samples/samples/chakra-ui/index.html"
          ),
          path.resolve(
            __dirname,
            "/website/components/preset-samples/samples/mui/index.html"
          ),
        ],
      },
    },
    test: {
      environment: "happy-dom", // https://vitest.dev/guide/features.html#mocking
      setupFiles: "./setupTest.ts",
    },
  };
});
