import { describe, expect, it } from "vitest";
import {
  compileDateString,
  parseDateString,
  getDateString,
} from "./date-string";

describe("compileDateString()", () => {
  const validCases: [
    number,
    number,
    number,
    ReturnType<typeof compileDateString>
  ][] = [
    [1, 1, 1, "0001-01-01"],
    [1900, 10, 10, "1900-10-10"],
    [2022, 10, 10, "2022-10-10"],
    [2000, 2, 29, "2000-02-29"], // Leap day
    [2000, -1, 1, null], // Invalid month
    [2000, 0, 1, null], // Invalid month
    [2000, 13, 1, null], // Invalid month
    [2000, 1, -1, null], // Invalid day
    [2000, 1, 0, null], // Invalid day
    [2000, 1, 32, null], // Invalid day
    [1999, 2, 29, null], // Invalid day (leap day)
    [2000, 4, 31, null], // Invalid day
    [0, 1, 0, null], // Invalid year
    [-1, 1, 32, null], // Invalid year
    [NaN, 1, 1, null],
    [2000, NaN, 1, null],
    [NaN, 1, 1, null],
  ];
  validCases.forEach(([year, month, day, expected]) => {
    it(`returns "${expected}" from (year=${year}, month=${month}, day=${day})`, () => {
      expect(compileDateString(year, month, day)).toEqual(expected);
    });
  });
});

describe("parseDateString()", () => {
  const testCases: [string, string, string, string][] = [
    ["2022-01-01", "2022", "1", "1"],
    ["2022-12-01", "2022", "12", "1"],
    ["2022-01-31", "2022", "1", "31"],
    ["0000-01-01", "0", "1", "1"],
    ["0999-01-01", "999", "1", "1"],
    ["2022-00-01", "", "", ""],
    ["2022-01-00", "", "", ""],
    ["2022-13-01", "", "", ""],
    ["2022-01-32", "", "", ""],
  ];
  testCases.forEach(([input, year, month, day]) => {
    it(`returns ({ year: "${year}", month: "${month}", day: "${day}"}) for the input "${input}"`, () => {
      expect(parseDateString(input)).toEqual({ year, month, day });
    });
  });
});

describe("getDateString", () => {
  const testcases: [Date, string][] = [
    [new Date(2022, 0, 2), "2022-01-02"],
    [new Date(100, 0, 1), "0100-01-01"],
  ];
  testcases.forEach(([date, expectedDateString]) => {
    it(`converts ${date} to "${expectedDateString}"`, () => {
      expect(getDateString(date)).toEqual(expectedDateString);
    });
  });
});
