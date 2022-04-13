import { assert, describe, expect, it } from "vitest";
import { range } from "./range";

describe("range()", () => {
  const testCases: [number, number, number[]][] = [
    [1, 1, [1]],
    [1, 2, [1, 2]],
    [1, 12, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]],
    [2, 1, [2, 1]],
  ];
  testCases.forEach(([first, last, expected]) => {
    it(`range(${first}, ${last}) returns ${JSON.stringify(expected)}`, () => {
      expect(range(first, last)).toEqual(expected);
    });
  });
});
