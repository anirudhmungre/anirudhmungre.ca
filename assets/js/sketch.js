var sky;

function initSky() {
	const NUM_STARS = Math.floor(windowWidth / 2);
	sky = new Sky(NUM_STARS);
}

function setup() {
	let canvas = createCanvas(windowWidth, 3*windowHeight/4);
	canvas.parent('sky');
	initSky();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	initSky();
}

function draw() {
	clear();
	sky.refresh();
}
