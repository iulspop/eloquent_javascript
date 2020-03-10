// {
//   let AnObject = {
//     prop1: "2",
//     prop2: "3"
//   };

//   delete AnObject["prop2"];

//   console.log("prop1" in AnObject);

//   console.log("prop2" in AnObject);
// }

// {
//   console.log("array play 1 block start");
//   let array = ["a", "b", "c", "d", "e"];

//   function returnFirstInCue(array) {
//     return array.shift();
//   }

//   function addFirstInCue(array, value) {
//     return array.unshift(value);
//   }

//   function addLastInCue(array, value) {
//     return array.push(value);
//   }

//   function returnLastInCue(array) {
//     return array.pop();
//   }

//   console.log(returnFirstInCue(array));
//   console.log(returnFirstInCue(array));
//   console.log(addFirstInCue(array, "y"));
//   console.log(addFirstInCue(array, "x"));
//   console.log(returnFirstInCue(array));
//   console.log(addLastInCue(array, "f"));
//   console.log(returnLastInCue(array));
//   console.log(array);
//   console.log(returnFirstInCue(array));
//   console.log(returnFirstInCue(array));
//   console.log(returnFirstInCue(array));
//   console.log(addFirstInCue(array, "z"));
//   console.log(array);
//   console.log(array.length);
// }

// {
//   console.log("array play block 2");

//   const array = [0, 1, 2, 3, 4, 5];

//   console.log(array.unshift("z"));
// }

// {
//   let event1 = "hey";
//   let event2 = "no";
//   let event3 = "yes";

//   let objectLiteral = {
//     hey: "hey",
//     event2,
//     event3
//   };

//   for (let key in objectLiteral) {
//     console.log(objectLiteral[key]);
//   }
// }

{
  const array = [0, 1, 2, 7, 4, 5, 6, 7, 8, 9, 10];

  console.log(array.indexOf(7, 9));
}
