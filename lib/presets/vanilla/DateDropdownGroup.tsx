import { Options } from "../../types";
import { OnDateValueChange } from "../../use-date-select";

interface DateDropdownGroupProps {
  yearValue: string;
  monthValue: string;
  dayValue: string;
  yearOptions: Options;
  monthOptions: Options;
  dayOptions: Options;
  onYearChange: OnDateValueChange;
  onMonthChange: OnDateValueChange;
  onDayChange: OnDateValueChange;
  hideDay?: boolean;
}

function DateDropdownGroup(props: DateDropdownGroupProps) {
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
      <select value={props.monthValue} onChange={props.onMonthChange}>
        <option value="" disabled></option>
        {props.monthOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {!props.hideDay && (
        <select value={props.dayValue} onChange={props.onDayChange}>
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
}

export default DateDropdownGroup;
