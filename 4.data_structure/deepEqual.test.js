const deepEqual = require("./deepEqual");

describe("deepEqual", () => {
  let obj = { here: { is: "an" }, object: 2 };
  it("compares one value to another", () => {
    expect(deepEqual(obj, obj)).toEqual(true);
  });
  it("compares one value to another", () => {
    expect(deepEqual(obj, { here: 1, object: 2 })).toEqual(false);
  });
  it("compares one value to another", () => {
    expect(deepEqual(obj, { here: { is: "an" }, object: 2 })).toEqual(true);
  });
});
