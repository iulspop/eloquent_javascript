const every = require("./every");

describe("every function: returns true if every element of array passes predicate", () => {
  it("tests every array element", () => {
    expect(every([1, 2, 3], (el) => el > 0)).toEqual(true);
  });
  it("tests every array element again", () => {
    expect(every([1, 2, 3], (el) => el === 3)).toEqual(false);
  });
  it("tests every array element again once more", () => {
    expect(every([1, 3, 5], (n) => n < 10)).toEqual(true);
  });
});
