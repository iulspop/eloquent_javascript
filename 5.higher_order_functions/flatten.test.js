const flatten = require("./flatten");

describe(`flatten function: takes an array of arrays returns 
          a new single array containing all elements of original array`, () => {
  it("flattens array", () => {
    expect(
      flatten([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("flattens another array", () => {
    expect(
      flatten([
        [1, 2, 3],
        [4, 5, 6],
      ])
    ).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it("flattens another array again", () => {
    expect(flatten([[1, 2, 3], [4, 5], [6]])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
