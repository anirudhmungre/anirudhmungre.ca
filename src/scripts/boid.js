class Boid {
    constructor(x, y) {
        this.mass = random(1, 10)
        this.pos = createVector(x, y)
        this.vel = p5.Vector.random2D()
        this.acc = createVector()
    }

    edges() {
        if (this.pos.x > windowWidth) {
            this.pos.x = 0
        } 
        else if (this.pos.x < 0) {
            this.pos.x = windowWidth
        }
        if (this.pos.y > windowHeight) {
            this.pos.y = 0
        } 
        else if (this.pos.y < 0) {
            this.pos.y = windowHeight
        }
    }    

    update(){
        this.pos.add(this.vel)
        this.vel.add(this.acc)
    }

    show(){
        strokeWeight(this.mass)
        stroke(255)
        point(this.pos.x, this.pos.y)
    }
}