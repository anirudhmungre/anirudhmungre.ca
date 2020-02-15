class Comet {
    constructor(p5) {
        this.p5 = p5;
        this.maxWidth = this.p5.random(100, 120);
        this.height = 1;
        this.shootSpeed = 9;
        this.fadeSpeed = 10;

        this.width;
        this.alpha;
        this.rotation;
        this.x;
        this.y;
        this.vx;
        this.vy;
        this.resetMovement();
    }

    resetMovement() {
        this.width = 0;
        this.alpha = 255;
        this.rotation = this.p5.random(-this.p5.HALF_PI/4, -this.p5.HALF_PI/2);
        this.x = this.p5.random(this.p5.width);
        this.y = this.p5.random(this.p5.height/4);
        this.vx = this.shootSpeed * this.p5.cos(this.rotation)/2;
        this.vy = this.shootSpeed * this.p5.sin(this.rotation)/2;
    }

    update() {
        if (this.width <= this.maxWidth) {
            this.width += this.shootSpeed;
            this.x -= this.vx;
            this.y -= this.vy;
        } else if (this.alpha >= 0) {
            this.alpha -= this.fadeSpeed;
        }
    }

    draw() {
        this.p5.noStroke();        
        this.p5.translate(this.x, this.y);
        this.p5.rotate(this.rotation);
        this.p5.fill(255, this.alpha);
        this.p5.ellipse(0, 0, this.width, this.height);
    }
}