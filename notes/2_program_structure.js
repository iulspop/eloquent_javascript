// #Control Flow

// ## While Loop
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