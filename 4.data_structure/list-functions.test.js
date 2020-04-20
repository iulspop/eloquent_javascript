const { arrayToList } = require("./list-functions");

describe("arrayToList", () => {
  it("returns list (nested set of objects) from array argument", () => {
    expect(arrayToList([10, 20])).toEqual({ value: 10, rest: { value: 20, rest: null } });
  });
  it("returns list (nested set of objects) from array argument", () => {
    expect(arrayToList([10, 20, 30])).toEqual({ value: 10, rest: { value: 20, rest: { value: 30, rest: null } } });
  });
});
