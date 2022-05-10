import { CodeEditor } from "react-live-runner";
import styled from "@emotion/styled";
import { useBoolean } from "@chakra-ui/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 2px 0 lightsteelblue;
  width: 100%;
  overflow: hidden;
`;

export const EditorContainer = styled.div`
  overflow: auto;
  max-height: 300px;
`;

export const Editor = styled(CodeEditor)`
  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
  font-size: 14px;
  white-space: pre;
  caret-color: #fff;
  min-width: 100%;
  max-height: 100%;
  float: left;

  & > textarea,
  & > pre {
    outline: none;
    white-space: pre !important;
  }
`;

export const PreviewContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  min-height: 180px;
`;

export const Preview = styled.div`
  margin: auto;
  white-space: pre-wrap;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`;

export const PreviewError = styled.div`
  background: #fcc;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  margin: 0;
  padding: 10px;
  color: #f00;
  white-space: pre-wrap;
`;

export const Button = styled.button`
  background: #ddd;
  border: #aaa 1px solid;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.4rem;
`;

interface CollapseCodeBlockProps {
  code: string;
  language: "jsx" | "tsx";
  children: React.ReactNode;
}
function CollapseCodeBlock({
  code,
  language,
  children,
}: CollapseCodeBlockProps) {
  const [isOpen, { on: open, off: close }] = useBoolean();

  return (
    <Container>
      <PreviewContainer>{children}</PreviewContainer>
      {!isOpen && <Button onClick={open}>Show code</Button>}
      {isOpen && (
        <EditorContainer>
          <Editor value={code} language={language} readOnly />
        </EditorContainer>
      )}
      {isOpen && <Button onClick={close}>Hide code</Button>}
    </Container>
  );
}

export default CollapseCodeBlock;
