const sketch2d = (p) => {
	var sky;

	const initSky = () => {
		const NUM_STARS = Math.floor(p.windowWidth / 2);
		sky = new Sky(p, NUM_STARS);
	};

	p.setup = () => {
		p.createCanvas(p.windowWidth, 3 * p.windowHeight / 4);
		initSky();
	}

	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, 3 * p.windowHeight / 4);
		initSky();
	}

	p.draw = () => {
		p.clear();
		sky.refresh();
	}
};

new p5(sketch2d, 'sky');