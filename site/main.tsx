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
