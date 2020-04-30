const every = (array, predicate) => {
  for (let el of array) {
    if (predicate(el) == false) {
      return false;
    }
  }
  return true;
};

module.exports = every;
