const range = require("./range");
const sum = require("./sum");

describe("range function", () => {
  test("returns array of whole numbers from start to end inclusively", () => {
    expect(range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test("edge case: negative numbers", () => {
    expect(range(-1, -10)).toEqual([]);
  });
  test("edge case: negative numbers", () => {
    expect(range(-15, -10)).toEqual([-15, -14, -13, -12, -11, -10]);
  });
  test("edge case: negative numbers", () => {
    expect(range(-15, 5)).toEqual([-15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
  });
});

describe("range function with step param", () => {
  test("if no arg, defaults to +1 step", () => {
    expect(range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test("if step = 2, returns array of whole number from start to end inclusively, by increments of two", () => {
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
  });
  test("if step = 5, returns array of whole number from start to end inclusively, by increments of five", () => {
    expect(range(0, 20, 5)).toEqual([0, 5, 10, 15, 20]);
  });
  test("edge case: negative num", () => {
    expect(range(-20, 5, 5)).toEqual([-20, -15, -10, -5, 0, 5]);
  });
  test("edge case: negative step", () => {
    expect(range(-20, 5, -5)).toEqual([]);
  });
  test("edge case: negative step", () => {
    expect(range(20, 5, -5)).toEqual([20, 15, 10, 5]);
  });
  test("edge case: negative step", () => {
    expect(range(-20, -40, -5)).toEqual([-20, -25, -30, -35, -40]);
  });
  test("edge case: negative step", () => {
    expect(range(5, 2, -1)).toEqual([5, 4, 3, 2]);
  });
  test("edge case: step 0 should return empty array", () => {
    expect(range(5, 100, 0)).toEqual([]);
  });
  test("edge case: step 0 should return empty array", () => {
    expect(range(100, 5, 0)).toEqual([]);
  });
  test("edge case: step negative step end is greater than start", () => {
    expect(range(20, 25, -5)).toEqual([]);
  });
});

describe("range and sum function working together", () => {
  test("", () => {
    expect(sum(range(1, 10))).toEqual(55);
  });
});
