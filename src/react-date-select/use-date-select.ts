import { useCallback, useEffect, useMemo, useState } from "react";
import { range } from "./range";
import { compileDateString, parseDateString } from "./date-string";
import { Option, Options } from "./types";

const DEFAULT_MIN_YEAR = 1960;
const DEFAULT_MAX_YEAR = new Date().getFullYear();

function compileOption(value: string): Option {
  return { value, label: value }; // TODO: Be customizable for localization
}

const monthOptions: Options = range(1, 12).map((i) =>
  compileOption(i.toString())
);
const dayOptions: Options = range(1, 31).map((i) =>
  compileOption(i.toString())
);

interface DateSelectState {
  yearValue: string; // It's of type string because it's <select />'s value.
  monthValue: string; // It's of type string because it's <select />'s value.
  dayValue: string; // It's of type string because it's <select />'s value.
  dateString: string | null;
}

interface UseDateSelectOptions {
  minYear?: number;
  maxYear?: number;
  onChange: (dateString: string) => void;
}
export const useDateSelect = (opts: UseDateSelectOptions) => {
  const [state, setState] = useState<DateSelectState & { changeCount: number }>(
    {
      yearValue: "",
      monthValue: "",
      dayValue: "",
      dateString: null,
      changeCount: 0, // HACK: Use this state as a dependency of the `useEffect` below so that `opts.onChange` is called only when it should be.
    }
  );

  const updateDate = useCallback(
    ({ year, month, day }: { year?: string; month?: string; day?: string }) => {
      setState((curState) => {
        const yearValue = year || curState.yearValue;
        const monthValue = month || curState.monthValue;
        const dayValue = day || curState.dayValue;

        const dateString = compileDateString(
          parseInt(yearValue),
          parseInt(monthValue),
          parseInt(dayValue)
        );

        return {
          yearValue,
          monthValue,
          dayValue,
          dateString,
          changeCount: curState.changeCount + 1, // `updateDate` changes `state.changeCount` so that `opts.onChange` is triggered.
        };
      });
    },
    [opts.onChange]
  );

  useEffect(() => {
    opts.onChange(state.dateString || "");
  }, [state.changeCount, opts.onChange]);

  const yearOptions = useMemo(() => {
    const minYear = opts.minYear != null ? opts.minYear : DEFAULT_MIN_YEAR;
    const maxYear = opts.maxYear != null ? opts.maxYear : DEFAULT_MAX_YEAR;
    const raw = range(minYear, maxYear).map((i) => {
      const s = i.toString();
      return { value: s, label: s };
    });
    if (!raw.some((o) => o.value === state.yearValue)) {
      return raw.concat(compileOption(state.yearValue));
    }
    return raw;
  }, [opts.minYear, opts.maxYear, state.yearValue]);

  return {
    yearValue: state.yearValue,
    monthValue: state.monthValue,
    dayValue: state.dayValue,
    yearOptions,
    monthOptions,
    dayOptions,
    onYearChange: useCallback(
      (e: React.ChangeEvent<HTMLSelectElement> | string) => {
        const value = typeof e === "string" ? e : e.target.value;
        updateDate({ year: value });
      },
      [updateDate]
    ),
    onMonthChange: useCallback(
      (e: React.ChangeEvent<HTMLSelectElement> | string) => {
        const value = typeof e === "string" ? e : e.target.value;
        updateDate({ month: value });
      },
      [updateDate]
    ),
    onDayChange: useCallback(
      (e: React.ChangeEvent<HTMLSelectElement> | string) => {
        const value = typeof e === "string" ? e : e.target.value;
        updateDate({ day: value });
      },
      [updateDate]
    ),
    dateValue: state.dateString,
    onDateChange: useCallback(
      (e: React.ChangeEvent<HTMLInputElement> | string) => {
        const value = typeof e === "string" ? e : e.target.value;
        const { year, month, day } = parseDateString(value);
        updateDate({ year, month, day });
      },
      [updateDate]
    ),
    setDate: useCallback((dateString: string) => {
      const { year, month, day } = parseDateString(dateString);
      setState((curState) => ({
        yearValue: year,
        monthValue: month,
        dayValue: day,
        dateString,
        changeCount: curState.changeCount, // This method does not update `state.changeCount` so that `opts.onChange` is not triggered.
      }));
    }, []),
  };
};
