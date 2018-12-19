class Boid {
    constructor(x, y) {
        this.mass = random(1, 10)
        this.pos = createVector(x, y)
        this.vel = createVector(0, random(1, 4))//p5.Vector.random2D()
        this.vel.rotate(random(7*PI/4, 2*PI))
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
        strokeWeight(random(1, 20))//this.mass)
        stroke(random(0, 255), random(0, 255), random(0, 255))
        point(this.pos.x, this.pos.y)
    }
}