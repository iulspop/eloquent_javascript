const reverseArray = require("./reverseArray");
const reverseArrayInPlace = require("./reverseArrayInPlace");

describe("reverse array function", () => {
  test("takes array and reverses elements order, returns new array", () => {
    expect(reverseArray(["A", "B", "C"])).toEqual(["C", "B", "A"]);
  });
  test("same, diff test", () => {
    expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });

  let array = [1, 2, 3, 4];
  test("new array is different than old array", () => {
    expect(reverseArray(array)).not.toEqual(array);
  });
});

describe("reverse array in place function", () => {
  test("takes array and reverses elements order, returns new array", () => {
    expect(reverseArrayInPlace(["A", "B", "C"])).toEqual(["C", "B", "A"]);
  });
  test("same, diff test", () => {
    expect(reverseArrayInPlace([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });

  let array = [1, 2, 3, 4];
  test("new array is same as old array", () => {
    expect(reverseArrayInPlace(array)).toEqual(array);
  });
});
