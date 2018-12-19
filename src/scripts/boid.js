class Boid {
    constructor(x, y) {
        this.pos = createVector(x, y)
        this.vel = p5.Vector.random2D()
        this.vel.setMag(random(1, 4)) // All moving different speeds
        this.acc = createVector()
        // Implement below later to be random
        this.perception = 100
        this.mass = 8
    }

    // align(){

    // }

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
        stroke(255)//random(0, 255), random(0, 255), random(0, 255))
        point(this.pos.x, this.pos.y)
    }
}