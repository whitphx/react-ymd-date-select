import React from "react";
import { Options } from "../../types";

export interface DateDropdownGroupProps {
  setDayCount: React.Dispatch<React.SetStateAction<number>>;
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
        onChange={(e) => {
          // Check if month has 30, 31 or 28 days
          const month = parseInt(e.target.value);

          if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
            props.setDayCount(31);
          } else if (month === 2) {
            props.setDayCount(28);
          } else {
            props.setDayCount(30);
          }

          props.onMonthChange(e);
        }}
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
