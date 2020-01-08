// not uncommon to see this:
// if (x == value1) action1();
// else if (x == value2) action2();
// else if (x == value3) action3();
// else defaultAction();

// construct called switch can do this too
let x = "happy";

switch (x) {
	case "happy":
		console.log("joy hop!");
	case "sad":
		console.log("go for a run!");
		break;
	case "deranged":
		console.log("sit on a cushion!");
	default:
		console.log("breathe");
}

// as you can see from output, it starts at case that matches value 
// or default if no matching value found
// then exe until break

// BE CAREFUL, EASY TO FORGET BREAK AND PROGRAM WILL EXECUTE STUFF
// YOU DO NOT WANT