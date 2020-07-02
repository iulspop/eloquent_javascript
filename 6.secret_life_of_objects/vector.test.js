const Vec = require("./vector.js");

describe("vector type: repesents vector in two-dimensional space", () => {
  it("adds vectors by returning new vector that is the sum", () => {
    expect(new Vec(1, 2).plus(new Vec(2, 3))).toEqual({ x: 3, y: 5 });
  });

  it("substract vectors by returning new vector that is the sum", () => {
    expect(new Vec(1, 2).minus(new Vec(2, 3))).toEqual({ x: -1, y: -1 });
  });

  it("gets length", () => {
    expect(new Vec(3, 4).length).toEqual(5);
  });
});
