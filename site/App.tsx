import Hero from "./components/Hero";
import Container from "./components/Container";
import { mdxComponents } from "./mdx-components";
import Main from "./Main.mdx";

function App() {
  return (
    <>
      <Hero />
      <Container>
        <Main components={mdxComponents} />
      </Container>
      {/* TODO: Remove below */}
      <div style={{ height: "100%" }}>
        <iframe
          style={{ height: "100%" }}
          src="./samples/vanilla/index.html"
          frameBorder="0"
        />
        <iframe
          style={{ height: "100%" }}
          src="./samples/mui/index.html"
          frameBorder="0"
        />
        <iframe
          style={{ height: "100%" }}
          src="./samples/chakra-ui/index.html"
          frameBorder="0"
        />
      </div>
    </>
  );
}

export default App;
