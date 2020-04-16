const rangeWithStep = require("./rangeWithStep");

console.log(rangeWithStep);

describe("rangeWithStep function", () => {
  test("returns range", () => {
    expect(rangeWithStep(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
