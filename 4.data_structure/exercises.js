{
  let AnObject = {
    prop1: "2",
    prop2: "3"
  };

  delete AnObject["prop2"];

  console.log("prop1" in AnObject);

  console.log("prop2" in AnObject);
}

{
  let array = ["a", "b", "c", "d", "e"];

  function returnFirstInCue(array) {
    return array.shift();
  }

  function addFirstInCue(array, value) {
    return array.unshift(value);
  }

  function addLastInCue(array, value) {
    return array.push(value);
  }

  function returnLastInCue(array) {
    return array.pop();
  }

  console.log(returnFirstInCue(array));
  console.log(returnFirstInCue(array));
  console.log(addFirstInCue(array, "z"));
  console.log(addFirstInCue(array, "y"));
  console.log(addFirstInCue(array, "x"));
  console.log(returnFirstInCue(array));
  console.log(addLastInCue(array, "f"));
  console.log(returnLastInCue(array));
  console.log(array);
  console.log(returnFirstInCue(array));
  console.log(returnFirstInCue(array));
  console.log(returnFirstInCue(array));
}
