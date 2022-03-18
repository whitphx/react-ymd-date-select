import React, { useState, useCallback, useReducer, useEffect } from "react";
import { range } from "./range";
import { compileDateString } from "./date-string";

type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;
interface DateSelectProps extends HTMLInputProps {}

const yearLabels = range(1960, 2000).map((i) => i.toString()); // TODO: Be configurable
const monthLabels = range(1, 12).map((i) => i.toString());
const dayLabels = range(1, 31).map((i) => i.toString());

interface DateSelectState {
  yearValue: string; // It's of type string because it's <select />'s value.
  monthValue: string; // It's of type string because it's <select />'s value.
  dayValue: string; // It's of type string because it's <select />'s value.
  dateString: string | null;
}

interface DateSelectActionBase {
  type: string;
}
interface SetYearAction extends DateSelectActionBase {
  type: "SET_YEAR";
  year: string;
}
interface SetMonthAction extends DateSelectActionBase {
  type: "SET_MONTH";
  month: string;
}
interface SetDayAction extends DateSelectActionBase {
  type: "SET_DAY";
  day: string;
}
type DateSelectAction = SetYearAction | SetMonthAction | SetDayAction;
const dateSelectReducer: React.Reducer<DateSelectState, DateSelectAction> = (
  state,
  action
) => {
  let yearValue: string, monthValue: string, dayValue: string;
  switch (action.type) {
    case "SET_YEAR": {
      yearValue = action.year;
      monthValue = state.monthValue;
      dayValue = state.dayValue;
      break;
    }
    case "SET_MONTH": {
      yearValue = state.yearValue;
      monthValue = action.month;
      dayValue = state.dayValue;
      break;
    }
    case "SET_DAY": {
      yearValue = state.yearValue;
      monthValue = state.monthValue;
      dayValue = action.day;
      break;
    }
  }

  return {
    yearValue,
    monthValue,
    dayValue,
    dateString: compileDateString(
      parseInt(yearValue),
      parseInt(monthValue),
      parseInt(dayValue)
    ),
  };
};

const useDateSelect = () => {
  const [state, dispatch] = useReducer(dateSelectReducer, {
    yearValue: "",
    monthValue: "",
    dayValue: "",
    dateString: null,
  });

  return {
    state,
    handleYearChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
      dispatch({ type: "SET_YEAR", year: e.target.value }),
    handleMonthChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
      dispatch({ type: "SET_MONTH", month: e.target.value }),
    handleDayChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
      dispatch({ type: "SET_DAY", day: e.target.value }),
  };
};

const DateSelect = React.forwardRef<HTMLInputElement, DateSelectProps>(
  (props, ref) => {
    const { onChange, ...restProps } = props;

    const [value, setValue] = useState("");
    const handleChange = useCallback<NonNullable<HTMLInputProps["onChange"]>>(
      (e) => {
        setValue(e.target.value);

        if (onChange) {
          onChange(e);
        }
      },
      [onChange]
    );

    const {
      state: dateState,
      handleYearChange,
      handleMonthChange,
      handleDayChange,
    } = useDateSelect();

    useEffect(() => {
      if (dateState.dateString !== value) {
        console.log("Set", dateState.dateString);
      }
    }, [dateState.dateString, value]);

    return (
      <>
        <input
          type="date"
          ref={ref}
          {...restProps}
          value={value}
          onChange={handleChange}
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
