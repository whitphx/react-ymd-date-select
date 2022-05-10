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
    </>
  );
}

export default App;
