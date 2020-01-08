class Star {
    constructor(p5) {
        this.p5 = p5;
        this.size = this.p5.random(0.25, 3);
        this.x = this.p5.random(this.p5.width);
        this.y = this.p5.random(this.p5.height);
        this.t = this.p5.random(this.p5.TAU);
        this.twinkleSize = this.size;
        this.color = 255;
    }

    update() {
        this.t += 0.02;
		this.twinkleSize = this.size + this.p5.sin(this.t) * 2;
    }

    draw() {
        this.p5.noStroke();
        this.p5.fill(255);
        this.p5.ellipse(this.x, this.y, this.twinkleSize, this.twinkleSize);
    }
}