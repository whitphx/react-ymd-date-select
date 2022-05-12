import { UseDateSelectOptions } from "../use-date-select";
import { ReactHookFormCompatibleProps } from "../types";

export interface PresetComponentProps extends ReactHookFormCompatibleProps {
  maxYear?: UseDateSelectOptions["maxYear"];
  minYear?: UseDateSelectOptions["minYear"];
  defaultYear?: UseDateSelectOptions["defaultYear"];
  defaultMonth?: UseDateSelectOptions["defaultMonth"];
  defaultDay?: UseDateSelectOptions["defaultDay"];
  hideDay?: boolean;
}
