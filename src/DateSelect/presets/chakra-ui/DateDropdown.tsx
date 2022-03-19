import React from "react";
import { Options } from "../../types";
import { Select, HStack } from "@chakra-ui/react";

interface DateDropdownProps {
  yearValue: string;
  monthValue: string;
  dayValue: string;
  yearOptions: Options;
  monthOptions: Options;
  dayOptions: Options;
  onYearChange: React.ChangeEventHandler<HTMLSelectElement>;
  onMonthChange: React.ChangeEventHandler<HTMLSelectElement>;
  onDayChange: React.ChangeEventHandler<HTMLSelectElement>;
}

function DateDropdown(props: DateDropdownProps) {
  return (
    <HStack>
      <Select value={props.yearValue} onChange={props.onYearChange}>
        <option value="" disabled></option>
        {props.yearOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
      <Select value={props.monthValue} onChange={props.onMonthChange}>
        <option value="" disabled></option>
        {props.monthOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
      <Select value={props.dayValue} onChange={props.onDayChange}>
        <option value="" disabled></option>
        {props.dayOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </HStack>
  );
}

export default DateDropdown;
