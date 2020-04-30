const every = (array, predicate) => {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
};

const every2 = (array, predicate) => {
  return !array.some((element) => !predicate(element));
};

module.exports = every2;
