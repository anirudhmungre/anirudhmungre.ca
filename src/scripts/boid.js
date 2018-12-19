class Boid {
    constructor(x, y) {
        this.pos = createVector(x, y)
        this.vel = p5.Vector.random2D()
        this.vel.setMag(random(1, 4)) // All moving different speeds
        this.acc = createVector()
        this.maxSpeed = 4
        this.maxAlign = 1
        // Implement below later to be random
        this.percepRad = 40
        this.mass = 8
    }

    flock(boids){
        let steerForce = createVector()
        this.acc = createVector(0, 0)
        steerForce.add(this.align(boids))

        steerForce.div(this.mass)
        this.acc.add(steerForce)
    }

    align(boids){
        let dis, steerForce
        let total = 0
        steerForce = createVector()
        for(let oBoid of boids){
            dis = dist(this.pos.x, this.pos.y, oBoid.pos.x, oBoid.pos.y)
            if ((oBoid != this) && (dis < this.percepRad)){
                steerForce.add(oBoid.vel)
                total++
            }
        }
        if (total > 0){
            steerForce.div(total)
            steerForce.setMag(this.maxSpeed)
            steerForce.sub(this.vel)
            steerForce.limit(this.maxAlign)
        }
        return steerForce
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
        stroke(255)//random(0, 255), random(0, 255), random(0, 255))
        point(this.pos.x, this.pos.y)
    }
}