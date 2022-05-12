import React from "react";
import * as ReactHookForm from "react-hook-form";
import * as Formik from "formik";
import * as reactYmdDateSelect from "react-ymd-date-select";
import * as vanillaPreset from "react-ymd-date-select/presets/vanilla";
import * as chakraPreset from "react-ymd-date-select/presets/chakra-ui";
import * as muiPreset from "react-ymd-date-select/presets/mui";
import dateFnsFrLocale from "date-fns/locale/fr";
import dateFnsRuLocale from "date-fns/locale/ru";
import dateFnsDeLocale from "date-fns/locale/de";
import dateFnsEnLocale from "date-fns/locale/en-US";
import dateFnsJaLocale from "date-fns/locale/ja";

export const scope = {
  import: {
    react: React,
    "react-hook-form": ReactHookForm,
    formik: Formik,
    "react-ymd-date-select": reactYmdDateSelect,
    "react-ymd-date-select/presets/vanilla": vanillaPreset,
    "react-ymd-date-select/presets/chakra-ui": chakraPreset,
    "react-ymd-date-select/presets/material": muiPreset,
    "date-fns/locale/fr": dateFnsFrLocale,
    "date-fns/locale/ru": dateFnsRuLocale,
    "date-fns/locale/de": dateFnsDeLocale,
    "date-fns/locale/en-US": dateFnsEnLocale,
    "date-fns/locale/ja": dateFnsJaLocale,
  },
};
