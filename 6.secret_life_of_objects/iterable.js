class fruitGuide {
  constructor() {
    this[0] = "anana";
    this[1] = "banana";
    this[2] = "citrus";
  }
  [Symbol.iterator]() {
    return {
      guide: this.,
      i: -1,
      next() {
        ++i;
        return { value: this[i], done: false };
      },
    };
  }
}

let guide = new fruitGuide();

for (let fruitIndex of guide) {
  console.log(fruitIndex);
}
