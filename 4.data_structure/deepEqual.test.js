const deepEqual = require("./deepEqual");
const { arrayToList } = require("./list-functions");

describe("deepEqual", () => {
  it("compares one value to another", () => {
    expect(deepEqual(5, 4)).toEqual(false);
  });
  it("compares one value to another", () => {
    expect(deepEqual(5, 5)).toEqual(true);
  });
  it("compares one value to another", () => {
    expect(deepEqual("string", 5)).toEqual(false);
  });
  it("compares one value to another", () => {
    expect(deepEqual("5", 5)).toEqual(false);
  });
  it("compares one value to another", () => {
    expect(deepEqual(undefined, null)).toEqual(false);
  });
  it("if both values object, then do a deep comparison", () => {
    expect(deepEqual({}, { purple: "purple" })).toEqual(false);
  });
  it("if both values object, then do a deep comparison", () => {
    expect(deepEqual({ purple: "red" }, { purple: "purple" })).toEqual(false);
  });
  let obj = { here: { is: "an" }, object: 2 };
  it("if both values object, then do a deep comparison", () => {
    expect(deepEqual(obj, { here: { is: "an" }, object: 2 })).toEqual(true);
  });
  it("if both values object, then do a deep comparison", () => {
    expect(deepEqual(arrayToList([30, "a", 50, 90, null]), arrayToList([30, "a", 50, 90, null]))).toEqual(true);
  });
  it("if both values object, then do a deep comparison", () => {
    expect(deepEqual([30, "a", 50, 90, null], [(30, "a", 50, 90, null)])).toEqual(true);
  });
  it("checks for exception of typeof null returning object", () => {
    expect(deepEqual(null, { purple: "purple" })).toEqual(false);
  });
});
