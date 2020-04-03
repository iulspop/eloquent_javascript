const range = (start, end) => {
  let range = [];
  while (end >= start) {
    range.unshift(end);
    end--;
  }
  return range;
};

console.log(range(1, 10));
