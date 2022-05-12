import * as React from "react";
import { DateAdapterContext } from "./LocalizationProvider";

export const useUtils = () => {
  const localization = React.useContext(DateAdapterContext);

  if (localization == null) {
    return null;
  }

  return localization.utils;
};
