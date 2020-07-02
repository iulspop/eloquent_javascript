class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    if (this.has(value)) {
      this.members = this.members.filter((v) => v !== value);
    }
  }

  has(value) {
    return this.members.includes(value);
  }

  [Symbol.iterator]() {
    return {
      arr: this.members,
      i: -1,
      next() {
        this.i++;
        return {
          value: this.arr[this.i],
          done: this.i >= this.arr.length,
        };
      },
    };
  }

  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

module.exports = Group;
