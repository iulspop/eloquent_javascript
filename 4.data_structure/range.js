const range = (start, end, step = 1) => {
  let range = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) range.push(i);
  } else {
    for (let i = start; i >= end; i += step) range.push(i);
  }
  return range;
};

module.exports = range;
