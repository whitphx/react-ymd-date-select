// Ref: https://github.com/nihgwu/react-runner/blob/d11e821dc6343ed3dd0e9e95d315265b764f9d44/website/src/components/LiveRunner.tsx

import {
  CodeEditor,
  useLiveRunner,
  UseLiveRunnerProps,
} from "react-live-runner";

interface LiveRunnerProps extends UseLiveRunnerProps {
  language: "jsx" | "tsx";
}
function LiveRunner({ language, ...liveRunnerProps }: LiveRunnerProps) {
  const { code, element, error, onChange } = useLiveRunner(liveRunnerProps);

  return (
    <div>
      <div>
        <CodeEditor value={code} language={language} onChange={onChange} />
      </div>
      <div>{element}</div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default LiveRunner;
