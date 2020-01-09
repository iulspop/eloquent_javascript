function pyramidMaker() {
	let holdForTest = []
	for (let line = "#"; line.length < 8; line += "#") {
		holdForTest.push(line);
		console.log(line);
	}
	return holdForTest;
}

test('print pyramid of "#" with a seven "#" base', () => {
	expect(pyramidMaker()).toEqual(["#", "##", "###", "####", "#####", "######", "#######"])
});

function printFizzBuzz() {
	let print = [];
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			print.push("FizzBuzz");
		} else if (i % 3 === 0) {
			print.push("Fizz");
		} else if (i % 5 === 0) {
			print.push("Buzz");
		} else {
			print.push(i);
		}
	}
	return print;
}

function printFizzBuzz2() {
	let print = [];
	for (let n = 1; n <= 100; n++) {
		let output = "";
		if (n % 3 == 0) { output += "Fizz" };
		if (n % 5 == 0) { output += "Buzz" };
		print.push(output || n);
	}
	return print;
}

test(`print all numbers from 1 to 100, 
except multiples of 3 are replaced by "Fizz", 
except multiples of 5 are replaced by "Buzz",
except multiples of both 3 and 5 are replaced by "FizzBuzz"`, () => {
	expect(printFizzBuzz2()).toEqual([
		1,
		2,
		"Fizz",
		4,
		"Buzz",
		"Fizz",
		7,
		8,
		"Fizz",
		"Buzz",
		11,
		"Fizz",
		13,
		14,
		"FizzBuzz",
		16,
		17,
		"Fizz",
		19,
		"Buzz",
		"Fizz",
		22,
		23,
		"Fizz",
		"Buzz",
		26,
		"Fizz",
		28,
		29,
		"FizzBuzz",
		31,
		32,
		"Fizz",
		34,
		"Buzz",
		"Fizz",
		37,
		38,
		"Fizz",
		"Buzz",
		41,
		"Fizz",
		43,
		44,
		"FizzBuzz",
		46,
		47,
		"Fizz",
		49,
		"Buzz",
		"Fizz",
		52,
		53,
		"Fizz",
		"Buzz",
		56,
		"Fizz",
		58,
		59,
		"FizzBuzz",
		61,
		62,
		"Fizz",
		64,
		"Buzz",
		"Fizz",
		67,
		68,
		"Fizz",
		"Buzz",
		71,
		"Fizz",
		73,
		74,
		"FizzBuzz",
		76,
		77,
		"Fizz",
		79,
		"Buzz",
		"Fizz",
		82,
		83,
		"Fizz",
		"Buzz",
		86,
		"Fizz",
		88,
		89,
		"FizzBuzz",
		91,
		92,
		"Fizz",
		94,
		"Buzz",
		"Fizz",
		97,
		98,
		"Fizz",
		"Buzz"
	])
});