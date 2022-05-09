import CodePreview from "./components/CodePreview";
import VanillaVanillaBasicSampleCode from "../samples/vanilla/vanilla/basic?raw";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <CodePreview code={VanillaVanillaBasicSampleCode} language="tsx" />
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
