import { useCallback, useReducer, useMemo } from "react";
import { range } from "./range";
import { compileDateString, parseDateString } from "./date-string";
import { Option, Options } from "./types"

function compileOption(value: string): Option {
  return { value, label: value }  // TODO: Be customizable for localization
}

const monthOptions: Options = range(1, 12).map((i) => compileOption(i.toString()));
const dayOptions: Options = range(1, 31).map((i) => compileOption(i.toString()));

interface DateSelectState {
  yearValue: string; // It's of type string because it's <select />'s value.
  monthValue: string; // It's of type string because it's <select />'s value.
  dayValue: string; // It's of type string because it's <select />'s value.
  dateString: string | null;
}

interface DateSelectActionBase {
  type: string;
}
interface SetDateAction extends DateSelectActionBase {
  type: "SET_DATE";
  year?: string;
  month?: string;
  day?: string;
}
type DateSelectAction = SetDateAction;
const dateSelectReducer: React.Reducer<DateSelectState, DateSelectAction> = (
  state,
  action
) => {
  let yearValue: string, monthValue: string, dayValue: string;
  switch (action.type) {
    case "SET_DATE": {  // TODO: `useState` is sufficient?
      yearValue = action.year || state.yearValue;
      monthValue = action.month || state.monthValue;
      dayValue = action.day || state.dayValue;
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


interface UseDateSelectOptions {
  minYear: number;
  maxYear: number;
}
export const useDateSelect = (opts: UseDateSelectOptions) => {
  const [state, dispatch] = useReducer(dateSelectReducer, {
    yearValue: "",
    monthValue: "",
    dayValue: "",
    dateString: null,
  });

  const yearOptions = useMemo(() => {
    const raw = range(opts.minYear, opts.maxYear).map((i) => { const s = i.toString(); return { value: s, label: s } });
    if (!raw.some(o => o.value === state.yearValue)) {
      return raw.concat(compileOption(state.yearValue))
    }
    return raw
  }, [opts.minYear, opts.maxYear, state.yearValue]);

  return {
    yearValue: state.yearValue,
    monthValue: state.monthValue,
    dayValue: state.dayValue,
    yearOptions,
    monthOptions,
    dayOptions,
    onYearChange: useCallback((e: React.ChangeEvent<HTMLSelectElement>) =>
      dispatch({ type: "SET_DATE", year: e.target.value }), []),
    onMonthChange: useCallback((e: React.ChangeEvent<HTMLSelectElement>) =>
      dispatch({ type: "SET_DATE", month: e.target.value }), []),
    onDayChange: useCallback((e: React.ChangeEvent<HTMLSelectElement>) =>
      dispatch({ type: "SET_DATE", day: e.target.value }), []),
    dateValue: state.dateString,
    onDateChange: useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const { year, month, day } = parseDateString(e.target.value)
      dispatch({ type: "SET_DATE", year, month, day })
    }, [])
  };
};
