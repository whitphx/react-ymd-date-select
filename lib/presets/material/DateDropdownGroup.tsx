import { useEffect, useCallback } from "react";
import { Options } from "../../types";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectProps } from "@mui/material/Select";

export interface DateDropdownGroupProps {
  yearValue: string;
  monthValue: string;
  dayValue: string;
  yearOptions: Options;
  monthOptions: Options;
  dayOptions: Options;
  onYearChange: (value: string) => void;
  onMonthChange: (value: string) => void;
  onDayChange: (value: string) => void;
  hideDay?: boolean;
}

let globalIdCount = 0;

function DateDropdownGroup(props: DateDropdownGroupProps) {
  useEffect(() => {
    globalIdCount++;
  }, []);

  const idPrefix = `react-date-select-mui-${globalIdCount.toString()}`;

  return (
    <Box>
      <FormControl>
        <InputLabel id={`${idPrefix}-month`}>Year</InputLabel>
        <Select
          labelId={`${idPrefix}-year`}
          value={props.yearValue}
          onChange={useCallback<NonNullable<SelectProps["onChange"]>>(
            (e) => {
              props.onYearChange(e.target.value as string);
            },
            [props.onYearChange]
          )}
          label="Year"
        >
          <MenuItem value="" disabled></MenuItem>
          {props.yearOptions.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id={`${idPrefix}-month`}>Month</InputLabel>
        <Select
          labelId={`${idPrefix}-month`}
          value={props.monthValue}
          onChange={useCallback<NonNullable<SelectProps["onChange"]>>(
            (e) => {
              props.onMonthChange(e.target.value as string);
            },
            [props.onMonthChange]
          )}
          label="Month"
        >
          <MenuItem value="" disabled></MenuItem>
          {props.monthOptions.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {!props.hideDay && (
        <FormControl>
          <InputLabel id={`${idPrefix}-day`}>Day</InputLabel>
          <Select
            labelId={`${idPrefix}-day`}
            value={props.dayValue}
            onChange={useCallback<NonNullable<SelectProps["onChange"]>>(
              (e) => {
                props.onDayChange(e.target.value as string);
              },
              [props.onDayChange]
            )}
            label="Day"
          >
            <MenuItem value="" disabled></MenuItem>
            {props.dayOptions.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Box>
  );
}

export default DateDropdownGroup;
