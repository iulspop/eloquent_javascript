// @ts-check
// let i = 0;

// setInterval(() => {
// 	console.log('iteration' + i)
// 	i++;
// }, 1000)

const factorial = function (x) {
	x = 5;
	let sum = 0;
	while (x > 2) {
		sum = (sum || x) * (x - 1);
		x--;
	}
	console.log(sum);
}

factorial(2);