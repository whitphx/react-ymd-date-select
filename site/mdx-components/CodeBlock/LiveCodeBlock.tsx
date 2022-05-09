import LiveRunner from "./LiveRunner";
import * as reactYmdDateSelect from "react-ymd-date-select";
import * as presetVanilla from "react-ymd-date-select/presets/vanilla";

const scope = {
  import: {
    "react-ymd-date-select": reactYmdDateSelect,
    "react-ymd-date-select/presets/vanilla": presetVanilla,
  },
};

interface LiveCodeBlockProps {
  code: string;
  language: "jsx" | "tsx";
}
function LiveCodeBlock(props: LiveCodeBlockProps) {
  return (
    <LiveRunner
      initialCode={props.code}
      scope={scope}
      language={props.language}
    />
  );
}

export default LiveCodeBlock;
