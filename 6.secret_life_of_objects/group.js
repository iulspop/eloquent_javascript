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

  static from(iterable) {
    let group = new Group();
    for (let val of iterable) {
      group[val] = val;
    }
    return group;
  }
}

module.exports = Group;
