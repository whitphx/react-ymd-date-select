import React, { useCallback, useEffect } from "react";
import { useDateSelect } from "./use-date-select";
import DateDropdown from "./DateDropdown";

interface DateSelectProps {
  value: string;
  onChange: (value: string) => void;
  name?: string;
  onBlur?: () => void;
}

const DateSelect = React.forwardRef<HTMLInputElement, DateSelectProps>(
  (props, ref) => {
    // Ref is forwarded, but it is intended to be used with react-hook-form's <Controller /> to focus the input when error occurs.
    // This component is still controlled even if ref is here.

    const { onChange, value } = props;

    const {
      yearValue,
      monthValue,
      dayValue,
      yearOptions,
      monthOptions,
      dayOptions,
      onYearChange,
      onMonthChange,
      onDayChange,
      dateValue,
      onDateChange,
    } = useDateSelect({ minYear: 1960, maxYear: 2000 }); // TODO: Be configurable

    useEffect(() => {
      if (dateValue !== value) {
        onChange(dateValue || "");
      }
    }, [dateValue, value]);

    return (
      <>
        <input
          type="date"
          value={value || ""}
          onChange={useCallback<React.ChangeEventHandler<HTMLInputElement>>(
            (e) => {
              onDateChange(e);
              onChange(e.target.value);
            },
            []
          )}
          ref={ref}
        />
        <DateDropdown
          yearValue={yearValue}
          monthValue={monthValue}
          dayValue={dayValue}
          yearOptions={yearOptions}
          monthOptions={monthOptions}
          dayOptions={dayOptions}
          onYearChange={onYearChange}
          onMonthChange={onMonthChange}
          onDayChange={onDayChange}
        />
      </>
    );
  }
);

export default DateSelect;
