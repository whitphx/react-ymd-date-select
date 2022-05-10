import React from "react";
import * as ReactHookForm from "react-hook-form";
import * as reactYmdDateSelect from "react-ymd-date-select";
import * as vanillaPreset from "react-ymd-date-select/presets/vanilla";
import * as chakraPreset from "react-ymd-date-select/presets/chakra-ui";
import * as muiPreset from "react-ymd-date-select/presets/mui";

export const scope = {
  import: {
    react: React,
    "react-hook-form": ReactHookForm,
    "react-ymd-date-select": reactYmdDateSelect,
    "react-ymd-date-select/presets/vanilla": vanillaPreset,
    "react-ymd-date-select/presets/chakra-ui": chakraPreset,
    "react-ymd-date-select/presets/material": muiPreset,
  },
};
