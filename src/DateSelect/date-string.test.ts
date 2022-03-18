import { assert, describe, expect, it } from 'vitest'
import { compileDateString } from "./date-string"

describe("compileDateString()", () => {
  const validCases: [number, number, number, ReturnType<typeof compileDateString>][] = [
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
  ]
  validCases.forEach(([year, month, day, expected]) => {
    it(`returns "${expected}" from (year=${year}, month=${month}, day=${day})`, () => {
      expect(compileDateString(year, month, day)).toEqual(expected)
    })
  })
})
