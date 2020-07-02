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
  has(val) {
    if (this[val] === val) {
      return true;
    } else return false;
  }
}

module.exports = Group;
