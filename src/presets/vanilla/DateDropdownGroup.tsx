import React from "react";
import { Options } from "../../types";

export interface DateDropdownGroupProps {
  yearValue: string;
  monthValue: string;
  dayValue: string;
  yearOptions: Options;
  monthOptions: Options;
  dayOptions: Options;
  onYearChange: React.ChangeEventHandler<HTMLSelectElement>;
  onMonthChange: React.ChangeEventHandler<HTMLSelectElement>;
  onDayChange: React.ChangeEventHandler<HTMLSelectElement>;
  hideDay?: boolean;
}

const DateDropdownGroup = React.forwardRef<
  HTMLSelectElement,
  DateDropdownGroupProps
>((props, ref) => {
  return (
    <>
      <select value={props.yearValue} onChange={props.onYearChange}>
        <option value="" disabled></option>
        {props.yearOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <select
        value={props.monthValue}
        onChange={props.onMonthChange}
        ref={props.hideDay ? ref : undefined}
      >
        <option value="" disabled></option>
        {props.monthOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {!props.hideDay && (
        <select value={props.dayValue} onChange={props.onDayChange} ref={ref}>
          <option value="" disabled></option>
          {props.dayOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      )}
    </>
  );
});
DateDropdownGroup.displayName = "DateDropdownGroup";

export default DateDropdownGroup;
