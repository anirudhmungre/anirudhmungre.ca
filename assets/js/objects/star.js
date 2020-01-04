class Star {
    constructor() {
        this.size = random(0.25, 3);
        this.x = random(width);
        this.y = random(height);
        this.t = random(TAU);
        this.twinkleSize = this.size;
        this.color = 255;
    }

    update() {
        this.t += 0.02;
		this.twinkleSize = this.size + sin(this.t) * 2;
    }

    draw() {
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.twinkleSize, this.twinkleSize);
    }
}