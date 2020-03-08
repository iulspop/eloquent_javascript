let AnObject = {
  prop1: "2",
  prop2: "3"
};

delete AnObject["prop2"];

console.log("prop1" in AnObject);

console.log("prop2" in AnObject);
