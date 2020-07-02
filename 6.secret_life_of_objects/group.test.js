const Group = require("./group.js");

describe("group type: holds values like Set data structure", () => {
  it("adds values", () => {
    let group = new Group();
    group.add(10);
    group.add("string");
    expect(group).toEqual({ 10: 10, string: "string" });
  });
});
