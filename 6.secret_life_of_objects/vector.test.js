const Vec = require("./vector.js");

describe("vector type: repesents vector in two-dimensional space", () => {
  it("adds vectors", () => {
    let vector = new Vec(1, 2);
    vector.plus(new Vec(2, 3));
    expect(vector).toEqual({ x: 3, y: 5 });
  });
  it("substract vectors", () => {
    let vector = new Vec(1, 2);
    vector.minus(new Vec(2, 3));
    expect(vector).toEqual({ x: -1, y: -1 });
  });
});
