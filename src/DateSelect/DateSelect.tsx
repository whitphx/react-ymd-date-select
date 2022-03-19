import React, { useEffect } from "react";
import { useDateSelect } from "./use-date-select";

interface RenderProps extends ReturnType<typeof useDateSelect> {
  ref: React.Ref<HTMLElement>;
}
interface DateSelectProps {
  value: string;
  onChange: (value: string) => void;
  name?: string;
  onBlur?: () => void;
  render: (renderProps: RenderProps) => React.ReactElement;
}

const DateSelect = React.forwardRef<HTMLInputElement, DateSelectProps>(
  (props, ref) => {
    // Ref is forwarded, but it is intended to be used with react-hook-form's <Controller /> to focus the input when error occurs.
    // This component is still controlled even if ref is here.

    const { onChange, value } = props;

    const dateSelectProps = useDateSelect({ minYear: 1960, maxYear: 2000 }); // TODO: Be configurable

    useEffect(() => {
      if (dateSelectProps.dateValue !== value) {
        onChange(dateSelectProps.dateValue || "");
      }
    }, [dateSelectProps.dateValue, value]);

    return props.render({ ...dateSelectProps, ref });
  }
);

export default DateSelect;
