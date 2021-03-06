// {
//   let AnObject = {
//     prop1: "2",
//     prop2: "3",
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

{
  let event1 = "hey";
  let event2 = "no";
  let event3 = "yes";

  let objectLiteral = {
    hey: "hey",
    event2,
    event3,
  };

  let arrayLiteral = ["play", "apples", "ball"];

  for (let key in objectLiteral) {
    console.log(objectLiteral[key]);
  }
  for (let element in arrayLiteral) {
    console.log(element);
  }
}

// {
//   console.log("play with array.indexOf");
//   const array = [0, 1, 2, 7, 4, 5, 6, 7, 8, 9, 10];

//   console.log(array.indexOf(7, 9));
// }

// {
//   console.log("play with array.filter");
//   const l = [0, 1, 2, 7, "4", 5, 6, 7, 8, 9, 10, "purple", "red", "green"];

//   const newList = l.filter((v) => typeof v == typeof 4 && v <= 4);
//   const newList2 = l.filter((v, index, array) => array.length > 9);

//   console.log(newList);
//   console.log(newList2);
// }

// {
//   console.log("play with array.slice() and array.concat()");
//   const l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   console.log(l.slice(1, 5)); // [1, 5[
//   console.log(
//     l
//       .slice(0, 7)
//       .concat({ hello: { hello: { hello: { hello: { hello: "purple" } } } } }, [
//         1,
//         2,
//         4,
//         5,
//       ])
//   );
// }

// {
//   console.log("play with string methods");

//   const hello =
//     "             \n \n \n    My1 name is tyranosoraus rex. I'm a bloodthirsty dinosaur from an ancient period in history. Pleased to meet you :)       ";
//   console.log(hello.indexOf("ancient"));
//   console.log(hello.slice(0));
//   console.log(hello.trim());

//   const hello2 = "^";
//   console.log(hello2.padEnd(11, "0"));
// }

// {
//   console.log("play with more string methods");

//   const hello =
//     "My name is tyranosoraus rex. I'm a bloodthirsty dinosaur from an ancient period in history. Pleased to meet you :)";

//   console.log(hello.split("blood").join("happy"));
//   console.log(hello.repeat(2));

//   const hello2 = ["yellow", "purple", "red", 5, 6, 8, true];
//   console.log(hello2.join(" "));
// }

// {
//   console.log("play with Math object");

//   console.log(Math.max("a", "gg", "cssd", "hellow"));
//   console.log(Math.max());
//   console.log(Math.max(-10, -2, true));
//   console.log(Math.max(...[-10, -2, false]));
//   console.log(Math.max(1, 2.4242));

//   console.log(Math.min("-2323", "5", 10));

//   console.log(Math.sqrt(100));

//   console.log(Math.round(-5.4));
//   console.log(Math.round(5.4));
// }

// {
//   console.log(
//     "play with Javascript not warning you when rebinding var, standard bindings or functions"
//   );

//   var Math = 5;
//   // console.log(Math.max(5, 7));

//   function appleJuicer() {
//     console.log("apple juice");
//   }
//   appleJuicer = 5;
//   // appleJuicer();

//   const appleJuicerSupreme = () => {
//     console.log("super apple juice");
//   };
//   appleJuicerSupreme();

//   var coconuts = 10;
//   coconuts = "bananas";
//   console.log(coconuts);
// }

// {
//   console.log("play with destructuring");

//   const array = [1, 2, 3, 4, 5];
//   const object = { a: 1, b: 2, c: 3, d: 4 };

//   function logDestructuredArray([
//     hello,
//     helloAgain,
//     finalHello,
//     neverAgain,
//     oneMore,
//     andAgain,
//   ]) {
//     console.log(hello, helloAgain, finalHello, andAgain);
//   }

//   logDestructuredArray(array);

//   function logDestrucuredObject({ turtle, d, a }) {
//     console.log(a, turtle, d);
//   }

//   logDestrucuredObject(object);
// }

// {
//   console.log("play with JSON");

//   let jsonString = `{
//     "hello": 5,
//     "myNameIs": "Iuliu",
//     "no": false,
//     "yes": {
//       "ok": "ok",
//       "silent approval": [
//         "gesture of the hand",
//         { "a": "a", "b": "b", "c": "c" },
//         "nod of the head"
//       ]
//     }
//   }`;

//   console.log(JSON.parse(jsonString));

//   console.log(
//     JSON.stringify({ number1: 1, number2: 2, helloNumbers: [0, 1, 2, 3] })
//   );
//   console.log(JSON.stringify(5));
// }
