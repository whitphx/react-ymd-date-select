import React from "react";
import { createRoot } from "react-dom/client";
import Sample from "./Sample";

const container = document.getElementById("root");
const root = createRoot(container!); // eslint-disable-line @typescript-eslint/no-non-null-assertion
root.render(
  <React.StrictMode>
    <Sample />
  </React.StrictMode>
);
