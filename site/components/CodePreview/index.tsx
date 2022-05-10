// Ref: https://github.com/nihgwu/react-runner/blob/d11e821dc6343ed3dd0e9e95d315265b764f9d44/website/src/components/LiveRunner.tsx

import {
  CodeEditor,
  useLiveRunner,
  UseLiveRunnerProps,
} from "react-live-runner";
import styled from "@emotion/styled";
import { scope } from "./scope";

export const Container = styled.div`
  display: flex;
  box-shadow: 0 0 2px 0 lightsteelblue;
  height: 300px;
  overflow: hidden;

  @media (max-width: 640px) {
    flex-direction: column-reverse;
    height: 480px;
  }
`;

export const EditorContainer = styled.div`
  flex: 0 1 720px;
  overflow: auto;
`;

export const Editor = styled(CodeEditor)`
  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
  font-size: 14px;
  white-space: pre;
  caret-color: #fff;
  min-width: 100%;
  min-height: 100%;
  float: left;

  & > textarea,
  & > pre {
    outline: none;
    white-space: pre !important;
  }
`;

export const PreviewContainer = styled.div`
  flex: 1 1 720px;
  position: relative;
  display: flex;
  overflow: hidden;
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

interface CodePreviewProps extends Omit<UseLiveRunnerProps, "scope"> {
  language: "jsx" | "tsx";
}
function CodePreview({ language, ...liveRunnerProps }: CodePreviewProps) {
  const { code, element, error, onChange } = useLiveRunner({
    ...liveRunnerProps,
    scope,
  });

  return (
    <Container>
      <EditorContainer>
        <Editor value={code} language={language} onChange={onChange} />
      </EditorContainer>
      <PreviewContainer>
        <Preview>{element}</Preview>
        {error && <PreviewError>{error}</PreviewError>}
      </PreviewContainer>
    </Container>
  );
}

export default CodePreview;
