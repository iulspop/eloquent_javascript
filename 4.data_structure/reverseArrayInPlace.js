const reverseArrayInPlace = (array) => {
  for (let i in array) {
    array.unshift(array.splice(i, 1)[0]);
  }
  return array;
};

module.exports = reverseArrayInPlace;
