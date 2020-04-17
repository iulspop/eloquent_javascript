const range = (start, end) => {
  let range = [];
  while (end >= start) {
    range.unshift(end);
    end--;
  }
  return range;
};

console.log(range(1, 10));

const sum = (numbers) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

console.log(sum(range(1, 10)));

const rangeWithStep = (start, end, step = 1) => {
  let range = [];
  while (start >= end) {
    range.unshift(start);
    start += step;
  }
  return range;
};

console.log(rangeWithStep(1, 10));
