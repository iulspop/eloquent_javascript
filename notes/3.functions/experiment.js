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
function timeMachine() {
	return "a great flood";
}

{
	console.log("The weather 10000 years ago was:", timeMachine());
}
