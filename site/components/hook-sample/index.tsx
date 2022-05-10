import CodePreview from "../CodePreview";
import SampleCode from "./samples/hook?raw";

export function CustomComponentSample() {
  return <CodePreview initialCode={SampleCode} language="tsx" />;
}
