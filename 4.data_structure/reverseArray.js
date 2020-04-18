const reverseArray = (array) => {
  const output = [];
  array.forEach((element) => output.unshift(element));
  return output;
};

module.exports = reverseArray;
