const { arrayToList, listToArray, prepend, nth } = require("./list-functions");

describe("arrayToList", () => {
  it("returns list (nested set of objects) from array", () => {
    expect(arrayToList([10, 20])).toEqual({ value: 10, rest: { value: 20, rest: null } });
  });
  it("returns list (nested set of objects) from array", () => {
    expect(arrayToList([10, 20, 30])).toEqual({ value: 10, rest: { value: 20, rest: { value: 30, rest: null } } });
  });
});

describe("listToArray", () => {
  it("returns array from list", () => {
    expect(listToArray({ value: 10, rest: { value: 20, rest: null } })).toEqual([10, 20]);
  });
  it("returns array empty array from empty list", () => {
    expect(listToArray({})).toEqual([]);
  });
  it("returns array from list", () => {
    expect(listToArray({ value: 10, rest: { value: 20, rest: { value: 30, rest: null } } })).toEqual([10, 20, 30]);
  });
  it("returns array from list", () => {
    expect(
      listToArray({
        value: 10,
        rest: { value: 55, rest: { value: 30, rest: { value: 40, rest: { value: 50, rest: null } } } },
      })
    ).toEqual([10, 55, 30, 40, 50]);
  });
});

describe("prepend function", () => {
  it("adds element to front of list and returns new list", () => {
    expect(prepend("bananas", { value: 10, rest: { value: 20, rest: null } })).toEqual({
      value: "bananas",
      rest: { value: 10, rest: { value: 20, rest: null } },
    });
  });
  it("adds element to front of list and returns new list", () => {
    expect(prepend("purples", { value: 10, rest: { value: 20, rest: null } })).toEqual({
      value: "purples",
      rest: { value: 10, rest: { value: 20, rest: null } },
    });
  });
});

describe("nth function", () => {
  it("returns element value from position number and list", () => {
    expect(nth(arrayToList([10, 30]), 1)).toEqual(30);
  });
  it("returns element value from position number and list", () => {
    expect(nth(arrayToList([10, 30, 60]), 2)).toEqual(60);
  });
  it("returns undefined if element doesn't exist", () => {
    expect(nth(arrayToList([10, 30, 60]), 5)).toEqual(undefined);
  });
});
