const range = (start, end) => {
  let range = [];
  while (end >= start) {
    range.unshift(end);
    end--;
  }
  return range;
};
module.exports = range;
