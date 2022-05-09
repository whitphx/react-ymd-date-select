import React from "react";
import * as ChakraUiReact from "@chakra-ui/react";
import * as reactYmdDateSelect from "react-ymd-date-select";
import * as vanillaPreset from "react-ymd-date-select/presets/vanilla";
import * as chakraPreset from "react-ymd-date-select/presets/chakra-ui";
import * as muiPreset from "react-ymd-date-select/presets/material";

export const scope = {
  import: {
    react: React,
    "@chakra-ui/react": ChakraUiReact,
    "react-ymd-date-select": reactYmdDateSelect,
    "react-ymd-date-select/presets/vanilla": vanillaPreset,
    "react-ymd-date-select/presets/chakra-ui": chakraPreset,
    "react-ymd-date-select/presets/material": muiPreset,
  },
};
