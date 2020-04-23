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
    array.push(list.value);
    checkRest(list.rest);
  }

  function checkRest(rest) {
    if (rest) {
      array.push(rest.value);
      checkRest(rest.rest);
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

const nth = (list, position) => {
  let array = listToArray(list);
  return array[position];
};

module.exports = { arrayToList, listToArray, prepend, nth };
