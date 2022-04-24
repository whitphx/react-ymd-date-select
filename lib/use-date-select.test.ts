import { afterEach, describe, expect, it, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";

import { useDateSelect } from "./use-date-select";

describe("useDateSelect", () => {
  afterEach(() => {
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

  it("calls onChange with an empty string if the selected date is invalid", () => {
    const value = "";
    const onChange = vi.fn();
    const { result } = renderHook(() => useDateSelect(value, onChange));

    act(() => {
      result.current.onYearChange("2022");
      result.current.onMonthChange("2");
      result.current.onDayChange("31");
    });

    expect(onChange).toBeCalledWith("");
  });
});
