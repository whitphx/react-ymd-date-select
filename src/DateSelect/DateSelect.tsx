import React, { useEffect } from "react";
import { useDateSelect } from "./use-date-select";

interface ReactHookFormCompatibleProps {
  value: string;
  onChange: (value: string) => void;
  name?: string;
  onBlur?: () => void;
}

export interface RenderProps extends ReturnType<typeof useDateSelect> {
  ref: React.Ref<any>;
}
export interface DateSelectProps extends ReactHookFormCompatibleProps {
  render: (renderProps: RenderProps) => React.ReactElement;
  maxYear?: number;
  minYear?: number;
}

const DateSelect = React.forwardRef<HTMLInputElement, DateSelectProps>(
  (props, ref) => {
    // Ref is forwarded, but it is intended to be used with react-hook-form's <Controller /> to focus the input when error occurs.
    // This component is still controlled even if ref is here.

    const { onChange, value, maxYear, minYear } = props;

    const dateSelectProps = useDateSelect({
      minYear,
      maxYear,
      onChange,
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

    return props.render({ ...dateSelectProps, ref });
  }
);

export default DateSelect;
