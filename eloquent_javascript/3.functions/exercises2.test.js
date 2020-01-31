// test("smallest of two numbers 5 and 9 is 5", () => {
//   expect(min(5, 9)).toEqual(5);
// });

// test("smallest of five numbers 5, 6, 9987, 9, 1 is 1", () => {
//   expect(min(3, 6, 9987, 9, 1)).toEqual(1);
// });

// test("smallest of five negative numbers -5, -6, -9987, -9, -1 is -9987", () => {
//   expect(min(-5, -6, -9987, -9, -1)).toEqual(-9987);
// });

// function min() {
//   let smallestNum = arguments[0];
//   for (let i = 1; i < arguments.length; i++) {
//     if (arguments[i] < smallestNum) {
//       smallestNum = arguments[i];
//     }
//   }
//   return smallestNum;
// }

// test("smallest of two num -5, 10 is -5", () => {
//   expect(min2(-5, 10)).toEqual(-5);
// });

// test("smallest of two num 28, 59 is 28", () => {
//   expect(min2(28, 59)).toEqual(28);
// });

// test("smallest of three num should ignore third num", () => {
//   expect(min2(108, 90, 50)).toEqual(90);
// });

// function min2(a, b) {
//   if (a < b) return a;
//   return b;
// }
