var starfield = [];

function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('stars');

	for (let i = 0; i < 400; i++) {
		starfield.push(new Star());
	}
}

function draw() {
	clear();
	starfield.forEach(star => {
		star.update();
		star.show();
	});
}