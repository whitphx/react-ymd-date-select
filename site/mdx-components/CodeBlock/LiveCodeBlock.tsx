import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { useDateSelect } from "../../../lib";
import { DateSelect } from "../../../lib/presets/vanilla";

const scope = {
  useDateSelect,
  DateSelect,
};

interface LiveCodeBlockProps {
  code: string;
  language: "jsx" | "tsx";
}
function LiveCodeBlock(props: LiveCodeBlockProps) {
  return (
    <LiveProvider
      code={props.code}
      language={props.language}
      scope={scope}
      // // Support TypeScript; See https://github.com/FormidableLabs/react-live/issues/8#issuecomment-613444102
      // transformCode={(snippet) =>
      //   window.ts.transpile(snippet, {
      //     noImplicitUseStrict: true,
      //     target: "es6",
      //     jsx: "react",
      //   })
      // }
    >
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
}

export default LiveCodeBlock;
