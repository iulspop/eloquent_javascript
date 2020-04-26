const deepEqual = (x, y) => {
  if (deepEqualObject(x, y)) {
    return true;
  } else {
    return x === y;
  }

  function deepEqualObject(x, y) {
    if (x === null || y === null) {
      if (x !== y) {
        return false;
      }
    } else if (typeof x == "object" && typeof y == "object") {
      if (Object.keys(x).length == 0) {
        return x == y;
      }
      for (let index in Object.keys(x)) {
        return deepEqualObject(x[Object.keys(x)[index]], y[Object.keys(y)[index]]);
      }
      return true;
    } else if (x !== y) {
      return false;
    }
  }
};

deepEqual({ purple: "red" }, { purple: "purple" });

module.exports = deepEqual;
