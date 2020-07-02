class Group {
  constructor() {}
  add(val) {
    if (this[val] === undefined) {
      this[val] = val;
    }
  }
  delete(val) {
    if (this[val] === val) {
      delete this[val];
    }
  }
}

module.exports = Group;
