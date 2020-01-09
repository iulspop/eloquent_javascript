function pyramidMaker() {
	let holdForTest = []
	for (let line = "#"; line.length < 8; line += "#") {
		holdForTest.push(line);
		console.log(line);
	}
	return holdForTest;
}

test('logs pyramid of "#" with a seven "#" base', () => {
	expect(pyramidMaker()).toEqual(["#", "##", "###", "####", "#####", "######", "#######"])
});


test('print all numbers from 1 to 100'), () => {

}