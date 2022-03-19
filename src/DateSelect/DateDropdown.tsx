import React from "react";

interface DateDropdownProps {
  yearValue: string;
  monthValue: string;
  dayValue: string;
  yearOptions: string[];
  monthOptions: string[];
  dayOptions: string[];
  onYearChange: React.ChangeEventHandler<HTMLSelectElement>;
  onMonthChange: React.ChangeEventHandler<HTMLSelectElement>;
  onDayChange: React.ChangeEventHandler<HTMLSelectElement>;
}

function DateDropdown(props: DateDropdownProps) {
  return (
    <>
      <select value={props.yearValue} onChange={props.onYearChange}>
        <option value="" disabled></option>
        {props.yearOptions.map((yearLabel) => (
          <option key={yearLabel} value={yearLabel}>
            {yearLabel}
          </option>
        ))}
      </select>
      <select value={props.monthValue} onChange={props.onMonthChange}>
        <option value="" disabled></option>
        {props.monthOptions.map((monthLabel) => (
          <option key={monthLabel} value={monthLabel}>
            {monthLabel}
          </option>
        ))}
      </select>
      <select value={props.dayValue} onChange={props.onDayChange}>
        <option value="" disabled></option>
        {props.dayOptions.map((dayLabel) => (
          <option key={dayLabel} value={dayLabel}>
            {dayLabel}
          </option>
        ))}
      </select>
    </>
  );
}

export default DateDropdown;
