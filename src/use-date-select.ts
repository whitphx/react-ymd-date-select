import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Locale } from "date-fns";
import formatDate from "date-fns/format";
import { range } from "./range";
import { compileDateString, parseDateString } from "./date-string";
import { Options } from "./types";

const DEFAULT_MIN_YEAR = 1960;
const DEFAULT_MAX_YEAR = new Date().getFullYear();

function parseSelectValue(value: string): number {
  return parseInt(value);
}
function convertToSelectValue(value: number): string {
  return value.toString();
}

interface DefaultDateOptions {
  defaultYear?: number | "now";
  defaultMonth?: number | "now";
  defaultDay?: number | "now";
}
function compileDefaultDate(opts: DefaultDateOptions) {
  const now = new Date();
  let defaultYear: number | null = null;
  if (opts.defaultYear != null) {
    if (opts.defaultYear === "now") {
      defaultYear = now.getFullYear();
    } else if (typeof opts.defaultYear === "number") {
      defaultYear = opts.defaultYear;
    }
  }
  let defaultMonth: number | null = null;
  if (opts.defaultMonth != null) {
    if (opts.defaultMonth === "now") {
      defaultMonth = now.getMonth() + 1;
    } else if (typeof opts.defaultMonth === "number") {
      defaultMonth = opts.defaultMonth;
    }
  }
  let defaultDay = null;
  if (opts.defaultDay != null) {
    if (opts.defaultDay === "now") {
      defaultDay = now.getDate();
    } else if (typeof opts.defaultDay === "number") {
      defaultDay = opts.defaultDay;
    }
  }

  return { defaultYear, defaultMonth, defaultDay };
}

interface DateSelectState {
  yearValue: string; // It's of type string because it's <select />'s value.
  monthValue: string; // It's of type string because it's <select />'s value.
  dayValue: string; // It's of type string because it's <select />'s value.
  dateString: string | null;
}

export interface UseDateSelectOptions {
  minYear?: number;
  maxYear?: number;
  defaultYear?: number | "now";
  defaultMonth?: number | "now";
  defaultDay?: number | "now";
  locale?: Locale;
  yearFormat?: string;
  monthFormat?: string;
  dayFormat?: string;
}
export interface UseDateSelectInterface {
  yearValue: string;
  monthValue: string;
  dayValue: string;
  yearOptions: Options;
  monthOptions: Options;
  dayOptions: Options;
  onYearChange: (e: React.ChangeEvent<HTMLSelectElement> | string) => void;
  onMonthChange: (e: React.ChangeEvent<HTMLSelectElement> | string) => void;
  onDayChange: (e: React.ChangeEvent<HTMLSelectElement> | string) => void;
  dateValue: string | null;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
  setDate: (dateString: string) => void;
}
export const useDateSelect = (
  value: string,
  onChange: (dateString: string) => void,
  opts: UseDateSelectOptions = {}
): UseDateSelectInterface => {
  const [state, setState] = useState<DateSelectState & { changeCount: number }>(
    () => {
      const { defaultYear, defaultMonth, defaultDay } =
        compileDefaultDate(opts);
      return {
        yearValue: defaultYear ? convertToSelectValue(defaultYear) : "",
        monthValue: defaultMonth ? convertToSelectValue(defaultMonth) : "",
        dayValue: defaultDay ? convertToSelectValue(defaultDay) : "",
        dateString: null,
        changeCount: 0, // HACK: Use this state as a dependency of the `useEffect` below so that `onChange` is called only when it should be.
      };
    }
  );

  const updateDate = useCallback(
    ({ year, month, day }: { year?: string; month?: string; day?: string }) => {
      setState((curState) => {
        const yearValue = year ?? curState.yearValue;
        const monthValue = month ?? curState.monthValue;
        const dayValue = day ?? curState.dayValue;

        const dateString = compileDateString(
          parseSelectValue(yearValue),
          parseSelectValue(monthValue),
          parseSelectValue(dayValue)
        );

        return {
          yearValue,
          monthValue,
          dayValue,
          dateString,
          changeCount: curState.changeCount + 1, // `updateDate` changes `state.changeCount` so that `onChange` is triggered.
        };
      });
    },
    []
  );

  const setDate = useCallback((dateString: string) => {
    const { year, month, day } = parseDateString(dateString);
    setState((curState) => ({
      yearValue: year,
      monthValue: month,
      dayValue: day,
      dateString,
      changeCount: curState.changeCount, // This method does not update `state.changeCount` so that `onChange` is not triggered.
    }));
  }, []);

  // Sync from the state to the upper component through onChange when necessary.
  const mountedRef = useRef(false);
  useEffect(() => {
    if (!mountedRef.current) {
      return;
    }
    onChange(state.dateString || "");
  }, [state.changeCount]);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Sync from the passed value to the state when necessary.
  useEffect(() => {
    if (typeof value !== "string") {
      return;
    }

    const dateValueAsString = state.dateString || "";
    if (dateValueAsString !== value) {
      setDate(value);
    }
  }, [setDate, value]);

  // Generate year, month, and day arrays based on locale and specified formats
  const locale = opts.locale;

  const yearFormat = opts.yearFormat;
  const rawYearOptions = useMemo(() => {
    const minYear = opts.minYear != null ? opts.minYear : DEFAULT_MIN_YEAR;
    const maxYear = opts.maxYear != null ? opts.maxYear : DEFAULT_MAX_YEAR;
    return range(minYear, maxYear).map((i) => {
      const label = yearFormat
        ? formatDate(new Date(i, 0, 1), yearFormat, { locale })
        : i.toString();
      return { value: convertToSelectValue(i), label };
    });
  }, [opts.minYear, opts.maxYear, locale, yearFormat]);

  const monthFormat = opts.monthFormat;
  const monthOptions = useMemo(() => {
    return range(1, 12).map((i) => {
      const label = monthFormat
        ? formatDate(new Date(1960, i - 1), monthFormat, { locale })
        : i.toString();
      return { label, value: convertToSelectValue(i) };
    });
  }, [locale, monthFormat]);

  const dayFormat = opts.dayFormat;
  const dayOptions = useMemo(() => {
    return range(1, 31).map((i) => {
      const label = dayFormat
        ? formatDate(new Date(1960, 0, i), dayFormat, { locale })
        : i.toString();
      return { label, value: convertToSelectValue(i) };
    });
  }, [locale, dayFormat]);

  // If `state.yearValue` is not included in the year options, add it.
  const yearOptions = useMemo(() => {
    if (
      state.yearValue !== "" &&
      !rawYearOptions.some((o) => o.value === state.yearValue)
    ) {
      let label: string;
      try {
        label = yearFormat
          ? formatDate(
              new Date(parseSelectValue(state.yearValue), 0, 1),
              yearFormat,
              { locale }
            )
          : state.yearValue;
      } catch {
        label = state.yearValue;
      }
      return rawYearOptions.concat({ label, value: state.yearValue });
    }

    return rawYearOptions;
  }, [state.yearValue, rawYearOptions]);

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
    setDate,
  };
};
