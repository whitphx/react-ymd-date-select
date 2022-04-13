import { useCallback, useMemo, useState } from "react";
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

interface UseDateSelectOptions {
  minYear: number;
  maxYear: number;
}
export const useDateSelect = (opts: UseDateSelectOptions) => {
  const [state, setState] = useState<DateSelectState>({
    yearValue: "",
    monthValue: "",
    dayValue: "",
    dateString: null,
  });

  const setDate = useCallback(({ year, month, day }: { year?: string, month?: string, day?: string }) =>
    setState((curState) => {
      const yearValue = year || curState.yearValue;
      const monthValue = month || curState.monthValue;
      const dayValue = day || curState.dayValue;

      return {
        yearValue,
        monthValue,
        dayValue,
        dateString: compileDateString(
          parseInt(yearValue),
          parseInt(monthValue),
          parseInt(dayValue)
        ),
      }
    })
    , [])

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
    onYearChange: useCallback((e: React.ChangeEvent<HTMLSelectElement> | string) => {
      const value = typeof e === "string" ? e : e.target.value;
      setDate({ year: value })
    }, []),
    onMonthChange: useCallback((e: React.ChangeEvent<HTMLSelectElement> | string) => {
      const value = typeof e === "string" ? e : e.target.value;
      setDate({ month: value })
    }, []),
    onDayChange: useCallback((e: React.ChangeEvent<HTMLSelectElement> | string) => {
      const value = typeof e === "string" ? e : e.target.value;
      setDate({ day: value })
    }, []),
    dateValue: state.dateString,
    onDateChange: useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const { year, month, day } = parseDateString(e.target.value)
      setDate({ year, month, day })
    }, [])
  };
};
