const Group = require("./group.js");

describe("group type: holds values like Set data structure", () => {
  it("adds values", () => {
    let group = new Group();
    group.add(10);
    group.add("string");
    expect(group.members).toEqual([10, "string"]);
  });

  it("deletes values", () => {
    let group = new Group();
    group.add(10);
    group.add("string");
    group.delete(10);
    expect(group.members).toEqual(["string"]);
  });

  it("has checks", () => {
    let group = new Group();
    group.add(10);
    group.add("string");
    expect(group.has(15)).toEqual(false);
    expect(group.has(10)).toEqual(true);
  });

  it("creates group from iterable collection", () => {
    let group = Group.from([1, 2, 3]);
    expect(group.members).toEqual([1, 2, 3]);
  });

  it("is iterable (provides Symbol.iterator interface)", () => {
    let group = Group.from([1, 2, 3, 4]);
    let members = [];
    for (let member of group) {
      members.push(member);
    }
    expect(members).toEqual([1, 2, 3, 4]);
  });
});
