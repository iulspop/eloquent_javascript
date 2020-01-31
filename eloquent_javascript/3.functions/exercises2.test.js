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

// test("0 is even", () => {
//   expect(isEven(0)).toEqual(true);
// });

// test("1 is not even", () => {
//   expect(isEven(1)).toEqual(false);
// });

// test("4 is even", () => {
//   expect(isEven(4)).toEqual(true);
// });

// test("50 is even", () => {
//   expect(isEven(50)).toEqual(true);
// });

// test("49 is not even", () => {
//   expect(isEven(49)).toEqual(false);
// });

// test("-3 is not even", () => {
//   expect(isEven(-3)).toEqual(false);
// });

// test("-54 is even", () => {
//   expect(isEven(-54)).toEqual(true);
// });

// function isEven(n) {
//   if (n == 0) return true;
//   if (n == 1) return false;
//   if (n < 0) return isEven((n += 2));
//   return isEven((n -= 2));
// }

// describe("Bean Counter", () => {
//   it("counts the letter 'B' in a string", () => {
//     expect(countBs("Burblebob")).toEqual(4);
//   });

//   it("counts the letter 'B' in a string", () => {
//     expect(countBs("Baddaaboom")).toEqual(2);
//   });
// });

// function countBs(string) {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == "b" || string[i] == "B") {
//       count++;
//     }
//   }
//   return count;
// }

describe("Character Counter", () => {
  it('should count five "e" in Boodeedodeede given "E" or "e"', () => {
    expect(countChar("Boodeedodeede", "E")).toEqual(5);
  });
});

function countChar(string, letter) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] == letter.toLowerCase() ||
      string[i] == letter.toUpperCase()
    ) {
      count++;
    }
  }
  return count;
}
