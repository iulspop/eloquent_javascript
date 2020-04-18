const sum = (numbers) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
};

module.exports = sum;
