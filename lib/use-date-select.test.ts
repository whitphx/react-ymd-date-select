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
});
