import React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!); // eslint-disable-line @typescript-eslint/no-non-null-assertion
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
