const Group = require("./group.js");

describe("group type: holds values like Set data structure", () => {
  it("adds values", () => {
    let group = new Group();
    group.add(10);
    group.add("string");
    expect(group).toEqual({ 10: 10, string: "string" });
  });

  it("deletes values", () => {
    let group = new Group();
    group.add(10);
    group.add("string");
    group.delete(10);
    expect(group).toEqual({ string: "string" });
  });

  it("checks if it has values", () => {
    let group = new Group();
    group.add(10);
    group.add("string");
    expect(group.has(15)).toEqual(false);
    expect(group.has(10)).toEqual(true);
  });

  it("creates group from iterator values", () => {
    let group = Group.from([10, 20]);
    expect(group).toEqual({ 10: 10, 20: 20 });
  });
});
