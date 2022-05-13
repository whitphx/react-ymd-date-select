import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";

import { useDateSelect } from "./use-date-select";

describe("useDateSelect", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();

    vi.restoreAllMocks();
  });

  it("returns year, month, and day values based on the given value argument", () => {
    const value = "2022-01-02";
    const onChange = vi.fn();
    const { result } = renderHook(() => useDateSelect(value, onChange));
    expect(result.current.yearValue).toEqual("2022");
    expect(result.current.monthValue).toEqual("1");
    expect(result.current.dayValue).toEqual("2");
  });

  ["", "xxx", "0000-00-00"].forEach((invalidValue) => {
    it(`returns empty year, month, and day values when the given value is invalid date string ("${invalidValue}")`, () => {
      const onChange = vi.fn();
      const { result } = renderHook(() =>
        useDateSelect(invalidValue, onChange)
      );
      expect(result.current.yearValue).toEqual("");
      expect(result.current.monthValue).toEqual("");
      expect(result.current.dayValue).toEqual("");
    });
  });

  it("calls onChange when on(Year|Month|Day)Change called", () => {
    const value = "";
    const onChange = vi.fn();
    const { result } = renderHook(() => useDateSelect(value, onChange));

    expect(onChange).not.toBeCalled();

    act(() => {
      result.current.onYearChange("2022");
    });
    expect(onChange).toBeCalledWith("");

    act(() => {
      result.current.onMonthChange("10");
    });
    expect(onChange).toBeCalledWith("");

    act(() => {
      result.current.onDayChange("21");
    });
    expect(onChange).toBeCalledWith("2022-10-21");
  });

  it(`calls onChange("") if the selected date is invalid, but still preserves the selected values after "" is passed as the value prop`, () => {
    const value = "";
    const onChange = vi.fn();
    const { result, rerender } = renderHook(
      ({ value, onChange }) => useDateSelect(value, onChange),
      {
        initialProps: { value, onChange },
      }
    );

    act(() => {
      result.current.onYearChange("2022");
      result.current.onMonthChange("2");
      result.current.onDayChange("31");
    });

    expect(result.current.yearValue).toEqual("2022");
    expect(result.current.monthValue).toEqual("2");
    expect(result.current.dayValue).toEqual("31");
    expect(onChange).toBeCalledWith("");

    rerender({ value: "", onChange });

    expect(result.current.yearValue).toEqual("2022");
    expect(result.current.monthValue).toEqual("2");
    expect(result.current.dayValue).toEqual("31");
  });

  it(`preserves the selected values after calling onChange("") even if the y-m-d combination is invalid`, () => {
    const value = "1960-01-02";
    const onChange = vi.fn();
    const { result, rerender } = renderHook(
      ({ value, onChange }) => useDateSelect(value, onChange),
      {
        initialProps: { value, onChange },
      }
    );

    act(() => {
      result.current.onYearChange("2022");
      result.current.onMonthChange("2");
      result.current.onDayChange("31");
    });

    expect(onChange).toBeCalledWith("");

    rerender({ value: "", onChange });

    expect(result.current.yearValue).toEqual("2022");
    expect(result.current.monthValue).toEqual("2");
    expect(result.current.dayValue).toEqual("31");
  });

  describe("with defaultYear, -Month, and -Day options", () => {
    it("sets the default values of year, month, and day", () => {
      const value = "";
      const onChange = vi.fn();
      const { result } = renderHook(() =>
        useDateSelect(value, onChange, {
          defaultYear: 1897,
          defaultMonth: 2,
          defaultDay: 1,
        })
      );
      expect(result.current.yearValue).toEqual("1897");
      expect(result.current.monthValue).toEqual("2");
      expect(result.current.dayValue).toEqual("1");
    });
  });

  it(`accepts "now" and sets the today as the default value`, () => {
    const mockedCurrentDate = new Date(1867, 0, 2);
    vi.setSystemTime(mockedCurrentDate);

    const value = "";
    const onChange = vi.fn();
    const { result } = renderHook(() =>
      useDateSelect(value, onChange, {
        defaultYear: "now",
        defaultMonth: "now",
        defaultDay: "now",
      })
    );
    expect(result.current.yearValue).toEqual("1867");
    expect(result.current.monthValue).toEqual("1");
    expect(result.current.dayValue).toEqual("2");
  });

  it(`ignores string inputs other than "now"`, () => {
    const value = "";
    const onChange = vi.fn();
    const { result } = renderHook(() =>
      useDateSelect(value, onChange, {
        /* eslint-disable @typescript-eslint/ban-ts-comment */
        // @ts-ignore
        defaultYear: "foo",
        // @ts-ignore
        defaultMonth: "foo",
        // @ts-ignore
        defaultDay: "foo",
        /* eslint-enable @typescript-eslint/ban-ts-comment */
      })
    );
    expect(result.current.yearValue).toEqual("");
    expect(result.current.monthValue).toEqual("");
    expect(result.current.dayValue).toEqual("");
  });

  it("ignores the defaults when value is initially given", () => {
    const value = "2022-01-02";
    const onChange = vi.fn();
    const { result } = renderHook(() =>
      useDateSelect(value, onChange, {
        defaultYear: 1892,
        defaultMonth: 9,
        defaultDay: 10,
      })
    );
    expect(result.current.yearValue).toEqual("2022");
    expect(result.current.monthValue).toEqual("1");
    expect(result.current.dayValue).toEqual("2");
  });

  describe("firstYear and lastYear options", () => {
    it("generates years from 2000 to the current year if neither specified", () => {
      const mockedCurrentDate = new Date(2003, 0, 2);
      vi.setSystemTime(mockedCurrentDate);

      const value = "";
      const onChange = vi.fn();
      const { result } = renderHook(() => useDateSelect(value, onChange));
      expect(result.current.yearOptions).toEqual([
        expect.objectContaining({ value: "2000" }),
        expect.objectContaining({ value: "2001" }),
        expect.objectContaining({ value: "2002" }),
        expect.objectContaining({ value: "2003" }),
      ]);
    });

    it("works when both specified and first < last", () => {
      const value = "";
      const onChange = vi.fn();
      const { result } = renderHook(() =>
        useDateSelect(value, onChange, {
          firstYear: 2000,
          lastYear: 2002,
        })
      );
      expect(result.current.yearOptions).toEqual([
        expect.objectContaining({ value: "2000" }),
        expect.objectContaining({ value: "2001" }),
        expect.objectContaining({ value: "2002" }),
      ]);
    });

    it("works when both specified and first > last", () => {
      const value = "";
      const onChange = vi.fn();
      const { result } = renderHook(() =>
        useDateSelect(value, onChange, {
          lastYear: 2000,
          firstYear: 2002,
        })
      );
      expect(result.current.yearOptions).toEqual([
        expect.objectContaining({ value: "2002" }),
        expect.objectContaining({ value: "2001" }),
        expect.objectContaining({ value: "2000" }),
      ]);
    });

    it("works with only the first is specified and first < now", () => {
      const mockedCurrentDate = new Date(2002, 0, 2);
      vi.setSystemTime(mockedCurrentDate);

      const value = "";
      const onChange = vi.fn();
      const { result } = renderHook(() =>
        useDateSelect(value, onChange, {
          firstYear: 2000,
        })
      );
      expect(result.current.yearOptions).toEqual([
        expect.objectContaining({ value: "2000" }),
        expect.objectContaining({ value: "2001" }),
        expect.objectContaining({ value: "2002" }),
      ]);
    });

    it("works with only the first is specified and now < first", () => {
      const mockedCurrentDate = new Date(2000, 0, 2);
      vi.setSystemTime(mockedCurrentDate);

      const value = "";
      const onChange = vi.fn();
      const { result } = renderHook(() =>
        useDateSelect(value, onChange, {
          firstYear: 2002,
        })
      );
      expect(result.current.yearOptions).toEqual([
        expect.objectContaining({ value: "2002" }),
        expect.objectContaining({ value: "2001" }),
        expect.objectContaining({ value: "2000" }),
      ]);
    });

    it("works with only the last is specified and last <  the default first (2000)", () => {
      const mockedCurrentDate = new Date(2002, 0, 2);
      vi.setSystemTime(mockedCurrentDate);

      const value = "";
      const onChange = vi.fn();
      const { result } = renderHook(() =>
        useDateSelect(value, onChange, {
          lastYear: 1998,
        })
      );
      expect(result.current.yearOptions).toEqual([
        expect.objectContaining({ value: "2000" }),
        expect.objectContaining({ value: "1999" }),
        expect.objectContaining({ value: "1998" }),
      ]);
    });

    it("works with only the last is specified and the default first (2000) < last", () => {
      const mockedCurrentDate = new Date(2002, 0, 2);
      vi.setSystemTime(mockedCurrentDate);

      const value = "";
      const onChange = vi.fn();
      const { result } = renderHook(() =>
        useDateSelect(value, onChange, {
          lastYear: 2002,
        })
      );
      expect(result.current.yearOptions).toEqual([
        expect.objectContaining({ value: "2000" }),
        expect.objectContaining({ value: "2001" }),
        expect.objectContaining({ value: "2002" }),
      ]);
    });
  });
});
