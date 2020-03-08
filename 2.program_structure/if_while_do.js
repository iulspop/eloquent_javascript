/// #	Control Flow

// ##	While Loop
// while expression truthy, loop block

let num = 0;
let count = 0;

while (num < 10) {
	alphabet = ["a", "b", "c", "d", "e", "f", "g"];
	console.log(alphabet[count])

	if (count == 6) {
		count = 0;
	} else {
		count += 1;
	}
	num += 1;
}

let nthPower = 2;
let sum = 1; //  keeps track of
let loopCount = 0;

while (loopCount < nthPower) {
	sum *= 2;
	loopCount += 1;
}

console.log(sum);


// Do loop always executes it's body at least once
let pop = 1;
do {
	pop *= 2;
} while (pop < 100);

console.log(pop);
