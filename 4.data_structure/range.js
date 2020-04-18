const range = (start, end, step = 1) => {
  let range = [];
  while (start <= end) {
    range.push(start);
    start += step;
  }
  return range;
};
module.exports = range;
