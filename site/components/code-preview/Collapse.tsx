// Ref: https://github.com/nihgwu/react-runner/blob/d11e821dc6343ed3dd0e9e95d315265b764f9d44/website/src/components/LiveRunner.tsx

import {
  CodeEditor,
  useLiveRunner,
  UseLiveRunnerProps,
} from "react-live-runner";
import styled from "@emotion/styled";
import { useBoolean } from "@chakra-ui/react";
import { scope } from "./scope";

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

interface CollapseProps extends Omit<UseLiveRunnerProps, "scope"> {
  language: "jsx" | "tsx";
}
function Collapse({ language, ...liveRunnerProps }: CollapseProps) {
  const { code, element, error, onChange } = useLiveRunner({
    ...liveRunnerProps,
    scope,
  });
  const [isOpen, { on: open, off: close }] = useBoolean();

  return (
    <Container>
      <PreviewContainer>
        <Preview>{element}</Preview>
        {error && <PreviewError>{error}</PreviewError>}
      </PreviewContainer>
      {!isOpen && <button onClick={open}>Show code</button>}
      {isOpen && (
        <EditorContainer>
          <Editor value={code} language={language} onChange={onChange} />
        </EditorContainer>
      )}
      {isOpen && <button onClick={close}>Hide code</button>}
    </Container>
  );
}

export default Collapse;
