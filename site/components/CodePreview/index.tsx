import React from "react";
import LiveRunner from "./LiveRunner";
import * as reactYmdDateSelect from "react-ymd-date-select";
import * as presetVanilla from "react-ymd-date-select/presets/vanilla";

const scope = {
  import: {
    react: React,
    "react-ymd-date-select": reactYmdDateSelect,
    "react-ymd-date-select/presets/vanilla": presetVanilla,
  },
};

interface CodePreviewProps {
  code: string;
  language: "jsx" | "tsx";
}
function CodePreview(props: CodePreviewProps) {
  return (
    <LiveRunner
      initialCode={props.code}
      scope={scope}
      language={props.language}
    />
  );
}

export default CodePreview;
