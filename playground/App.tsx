function App() {
  return (
    <>
      <div style={{ height: "100%" }}>
        <iframe
          style={{ height: "100%" }}
          src="./vanilla/index.html"
          frameBorder="0"
        />
        <iframe
          style={{ height: "100%" }}
          src="./mui/index.html"
          frameBorder="0"
        />
        <iframe
          style={{ height: "100%" }}
          src="./chakra-ui/index.html"
          frameBorder="0"
        />
      </div>
    </>
  );
}

export default App;
