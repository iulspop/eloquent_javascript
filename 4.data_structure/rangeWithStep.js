const rangeWithStep = (start, end, step = 1) => {
  let range = [];
  while (start >= end) {
    range.unshift(start);
    start += step;
  }
  return range;
};

module.exports = rangeWithStep;
