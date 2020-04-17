const range = require("./range");

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
