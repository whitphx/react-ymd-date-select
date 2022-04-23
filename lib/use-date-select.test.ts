import { afterEach, describe, expect, it, vi } from "vitest";
import { renderHook } from "@testing-library/react";

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
});
