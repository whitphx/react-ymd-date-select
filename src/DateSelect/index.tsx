import React, { useCallback, useReducer, useEffect } from "react";
import { range } from "./range";
import { useDateSelect } from "./use-date-select";

interface DateSelectProps {
  value: string;
  onChange: (value: string) => void;
  name?: string;
  onBlur?: () => void;
}

const yearLabels = range(1960, 2000).map((i) => i.toString()); // TODO: Be configurable
const monthLabels = range(1, 12).map((i) => i.toString());
const dayLabels = range(1, 31).map((i) => i.toString());

const DateSelect = React.forwardRef<HTMLInputElement, DateSelectProps>(
  (props, ref) => {
    // Ref is forwarded, but it is intended to be used with react-hook-form's <Controller /> to focus the input when error occurs.
    // This component is still controlled even if ref is here.

    const { onChange, value } = props;

    const {
      state: dateState,
      handleYearChange,
      handleMonthChange,
      handleDayChange,
    } = useDateSelect();

    useEffect(() => {
      if (dateState.dateString !== value) {
        onChange(dateState.dateString || "");
      }
    }, [dateState.dateString, value]);

    return (
      <>
        <input
          type="date"
          value={value || ""}
          onChange={useCallback<React.ChangeEventHandler<HTMLInputElement>>(
            (e) => {
              onChange(e.target.value);
            },
            []
          )}
          ref={ref}
        />

        <select value={dateState.yearValue} onChange={handleYearChange}>
          <option value="" disabled></option>
          {yearLabels.map((yearLabel) => (
            <option key={yearLabel} value={yearLabel}>
              {yearLabel}
            </option>
          ))}
        </select>
        <select value={dateState.monthValue} onChange={handleMonthChange}>
          <option value="" disabled></option>
          {monthLabels.map((monthLabel) => (
            <option key={monthLabel} value={monthLabel}>
              {monthLabel}
            </option>
          ))}
        </select>
        <select value={dateState.dayValue} onChange={handleDayChange}>
          <option value="" disabled></option>
          {dayLabels.map((dayLabel) => (
            <option key={dayLabel} value={dayLabel}>
              {dayLabel}
            </option>
          ))}
        </select>
      </>
    );
  }
);

export default DateSelect;
