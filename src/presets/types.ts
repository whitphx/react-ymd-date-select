import { UseDateSelectOptions } from "../use-date-select";
import { ReactHookFormCompatibleProps } from "../types";

export interface PresetComponentProps
  extends ReactHookFormCompatibleProps,
    UseDateSelectOptions {
  hideDay?: boolean;
}
