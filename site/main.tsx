import React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";
import App from "./App";

const theme = extendTheme({
  styles: {
    // Disable the global styles; https://chakra-ui.com/docs/styled-system/features/global-styles
    global: {
      // body: {
      //   fontFamily: 'body',
      //   color: mode('gray.800', 'whiteAlpha.900')(props),
      //   bg: mode('white', 'gray.800')(props),
      //   lineHeight: 'base',
      // },
      // '*::placeholder': {
      //   color: mode('gray.400', 'whiteAlpha.400')(props),
      // },
      "*, *::before, &::after": {
        borderColor: null,
        wordWrap: null,
      },
      // ResetCSS is disabled but some of them are still necessary or preferable,
      // they are manually set here; https://github.com/chakra-ui/chakra-ui/blob/b77acf36688abb696fd1ec2a7898a7de43a91e37/packages/css-reset/src/css-reset.tsx
      html: {
        lineHeight: 1.5,
      },
      body: {
        position: "relative",
        minHeight: "100%",
        fontFeatureSettings: "kern",
      },
      "*, *::before, *::after": {
        boxSizing: "border-box",
      },
      "body, blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre": {
        margin: 0,
      },
    },
  },
});

const container = document.getElementById("root");
const root = createRoot(container!); // eslint-disable-line @typescript-eslint/no-non-null-assertion
root.render(
  <React.StrictMode>
    <ChakraProvider resetCSS={false} theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
