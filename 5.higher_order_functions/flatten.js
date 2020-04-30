const flatten = (arrays) => {
  return arrays.reduce((flat, current) => flat.concat(current), []);
};

module.exports = flatten;
