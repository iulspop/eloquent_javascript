class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(vec) {
    this.x = this.x + vec.x;
    this.y = this.y + vec.y;
  }
  minus(vec) {
    this.x = this.x - vec.x;
    this.y = this.y - vec.y;
  }
}

module.exports = Vec;