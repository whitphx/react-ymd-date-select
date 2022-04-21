import React from "react";
import { useDateSelect, UseDateSelectInterface } from "./use-date-select";

export interface ChildComponentProps<TRef = any> // eslint-disable-line @typescript-eslint/no-explicit-any
  extends UseDateSelectInterface {
  ref?: React.Ref<TRef>;
}
export interface RenderArgs<TRef = any> // eslint-disable-line @typescript-eslint/no-explicit-any
  extends UseDateSelectInterface {
  ref?: React.Ref<TRef>;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface DateSelectProps<TRef = any> {
  value: string;
  onChange: (value: string) => void;
  render: (renderArgs: RenderArgs<TRef>) => React.ReactElement;
  maxYear?: number;
  minYear?: number;
  defaultYear?: number;
  defaultMonth?: number;
  defaultDay?: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DateSelect = React.forwardRef<any, DateSelectProps<any>>((props, ref) => {
  // Ref is forwarded, but it is intended to be used with react-hook-form's <Controller /> to focus the input when error occurs.
  // This component is still controlled even if ref is here.

  const { onChange, value, ...opts } = props;

  const dateSelectProps = useDateSelect(value, onChange, opts);

  return props.render({ ...dateSelectProps, ref });
});
DateSelect.displayName = "DateSelect";

export default DateSelect;
