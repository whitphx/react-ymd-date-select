import React, { useEffect } from "react";
import { useDateSelect } from "./use-date-select";

interface ReactHookFormCompatibleProps {
  value: string;
  onChange: (value: string) => void;
  name?: string;
  onBlur?: () => void;
}

export interface ChildComponentProps extends ReturnType<typeof useDateSelect> {
  ref?: React.Ref<any>;
}
export type RenderArgs = ReturnType<typeof useDateSelect>;
export interface DateSelectProps extends ReactHookFormCompatibleProps {
  component?: React.ComponentType<ChildComponentProps>;
  render?: (renderArgs: RenderArgs) => React.ReactElement;
  maxYear?: number;
  minYear?: number;
  defaultYear?: number;
  defaultMonth?: number;
  defaultDay?: number;
}

const DateSelect = React.forwardRef<HTMLInputElement, DateSelectProps>(
  (props, ref) => {
    // Ref is forwarded, but it is intended to be used with react-hook-form's <Controller /> to focus the input when error occurs.
    // This component is still controlled even if ref is here.

    const {
      onChange,
      value,
      maxYear,
      minYear,
      defaultYear,
      defaultMonth,
      defaultDay,
    } = props;

    const dateSelectProps = useDateSelect({
      minYear,
      maxYear,
      onChange,
      defaultYear,
      defaultMonth,
      defaultDay,
    });

    const { setDate, dateValue } = dateSelectProps;
    useEffect(() => {
      if (typeof value !== "string") {
        return;
      }

      const dateValueAsString = dateValue || "";
      if (dateValueAsString !== value) {
        setDate(value);
      }
    }, [setDate, dateValue, value]);

    if (props.component) {
      return React.createElement(props.component, { ref, ...dateSelectProps });
    } else if (props.render) {
      return props.render({ ...dateSelectProps });
    } else {
      throw new Error(`Either render or component must be provided.`);
    }
  }
);
DateSelect.displayName = "DateSelect";

export default DateSelect;
