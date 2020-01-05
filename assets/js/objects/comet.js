class Comet {
    constructor(maxWidth) {
        this.maxWidth = maxWidth;
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
        this.rotation = random(-HALF_PI/4, -HALF_PI/2);
        this.x = random(width);
        this.y = random(height/4);
        this.vx = this.shootSpeed * cos(this.rotation)/2;
        this.vy = this.shootSpeed * sin(this.rotation)/2;
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
        noStroke();        
        translate(this.x, this.y);
        rotate(this.rotation);
        fill(255, this.alpha);
        ellipse(0, 0, this.width, this.height);
    }
}