// @ts-check
// let i = 0;

// setInterval(() => {
// 	console.log('iteration' + i)
// 	i++;
// }, 1000)

// const factorial = function (x) {
// 	x = 5;
// 	let sum = 0;
// 	while (x > 2) {
// 		sum = (sum || x) * (x - 1);
// 		x--;
// 	}
// 	console.log(sum);
// }
// factorial(10);

// let x = 0;
// function nestBlocks() {
// 	let x = 5;
// 	{
// 		var y = 5;
// 		x = x * x;
// 	}
// 	x = x * y;
// 	return x;
// }
// x = 100;
// nestBlocks()



// Testing Function Hoisting
// function timeMachine() {
// 	return "a great flood";
// }

// {
// 	console.log("The weather 10000 years ago was:", timeMachine());
// }



// Testing Call Stack
// const firstFunction = () => { console.log('hello from first function') }
// function secondFunction() { firstFunction(); }
// function thirdFunction() { secondFunction(); }
// thirdFunction();

// const throwError = () => { throw new Error('stack trace error') };
// function secondStackFrame() { console.log(''); throwError(); };
// secondStackFrame();



// // Testing Optional Arguments
// function printToConsole(string, functioned) {
// 	var x = functioned();
// 	console.log(string + (x || ""));
// }

// let functionPotato = () => " hello back";
// printToConsole("hello");



// Testing Closures
// let wrapValue = (n) => {
// 	let local = n;
// 	return () => local; // this is a closure, because it references a value from local scope around it.
// }

// let x = wrapValue(10);
// let y = wrapValue(999);

// console.log(x());
// console.log(y());



// RECURSION PUZZLE
// Consider this puzzle: 
// by starting from the number 1 and 
// repeatedly either adding 5 or multiplying by 3,
// an infinite set of numbers can be produced. 
// How would you write a function that, given a number,
// tries to find a sequence of such additions and
// multiplications that produces that number?

// function solvePuzzle(target) {
// 	// Recursion
// 	function find(current = target, sequence = "") {
// 		if (current == 1) {
// 			return sequence;
// 		} else if (current < 1) {
// 			return null;
// 		} else {
// 			// @ts-ignore
// 			return find(current / 3, "3" + sequence) || find(current - 5, "5" + sequence);
// 		}
// 	}
// 	let sequence = find();
// 	sequence = "1" + sequence;
// 	console.log(sequence);
// }

// solvePuzzle(12);

// function findSolution(target) {
// 	function find(current, history) {
// 		if (current == target) {
// 			return history;
// 		} else if (current > target) {
// 			return null;
// 		} else {
// 			return find(current + 5, `(${history} + 5)`) ||
// 				find(current * 3, `(${history} * 3)`);
// 		}
// 	}
// 	return find(1, "1");
// }

// console.log(findSolution(24));
//  // → (((1 * 3) + 5) * 3)

function pow(x, n, product = 1) {
	if (n == 0) {
		return product
	}
	product *= x;
	return pow(x, n - 1, product);
}

console.log(pow(5, 5));