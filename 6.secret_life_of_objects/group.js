class Group {
  constructor() {}
  add(val) {
    if (this[val] === undefined) {
      this[val] = val;
    }
  }
}

module.exports = Group;
