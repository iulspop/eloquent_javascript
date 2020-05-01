const loop = require("./loop");

describe(`loop function: takes a value, a test function, an update function and a body function and runs loop`, () => {
  it("runs a loop", () => {
    expect(
      loop(
        3,
        (n) => n > 0,
        (n) => n - 1,
        console.log
      )
    ).toEqual(undefined);
  });
});
