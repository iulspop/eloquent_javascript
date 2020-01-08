// many while loops use a counter binding to track progress of loop
// so for loop is abbreviated form

// three parts, fist initializes loop, next checks if loop continues, next updates state of loop
// for (let count = 0; count < 10; count += 1) {
// 	console.log(count);
// }

// the check returning false is not the only way to break out of loop
// can also use break

// for (let count = 1; count < 45; count += 3) {
// 	if (count % 7 === 0) {
// 		console.log(count);
// 		break
// 	}
// }

// continue keyword also affects progress of the loop
// when encountered in loop body, tells program to skip to next loop

// for count += 1 and count -= 1 can use count-- and count++
