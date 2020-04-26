const arrayToList = (array) => {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list,
    };
  }
  return list;
};

const listToArray = (list) => {
  let array = [];

  if (list.value) {
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
  }

  return array;
};

const prepend = (element, list) => {
  const newList = {};
  newList.value = element;
  newList.rest = list;
  return newList;
};

const nth = (list, n) => {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
};

module.exports = { arrayToList, listToArray, prepend, nth };
