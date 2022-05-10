import { mdxComponents } from "./mdx-components";
import AboutPresets from "./AboutPresets.mdx";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <AboutPresets components={mdxComponents} />
      <iframe
        style={{ height: "100%" }}
        src="./samples/vanilla/index.html"
        frameBorder="0"
      />
      <iframe
        style={{ height: "100%" }}
        src="./samples/material/index.html"
        frameBorder="0"
      />
      <iframe
        style={{ height: "100%" }}
        src="./samples/chakra-ui/index.html"
        frameBorder="0"
      />
    </div>
  );
}

export default App;
