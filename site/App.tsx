import { mdxComponents } from "./mdx-components";
import Home from "./Home.mdx";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Home components={mdxComponents} />
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
