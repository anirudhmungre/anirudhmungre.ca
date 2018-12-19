class Boid {
    constructor(x, y) {
        this.pos = createVector(x, y)
        this.vel = p5.Vector.random2D()
        this.vel.setMag(4)//random(1, 4)) // All moving different speeds
        this.acc = createVector()
        this.maxSpeed = 4
        this.maxForce = 1
        // Implement below later to be random
        this.percepRad = 50
        this.mass = 8
    }

    flock(boids){
        let steerForce = createVector()
        steerForce = this.acs(boids)
        // steerForce.add(this.align(boids))
        // steerForce.add(this.cohesion(boids))
        // steerForce.add(this.seperation(boids))

        // steerForce.div(this.mass)
        this.acc.add(steerForce)
    }

    acs(boids){
        let dis
        let total = 0
        let steerForceT = createVector() // Total steer force
        let steerForceA = createVector() // Steer force of alignment
        let steerForceC = createVector() // Steer force of cohesion
        let steerForceS = createVector() // Steer force of seperation
        for(let oBoid of boids){
            dis = dist(this.pos.x, this.pos.y, oBoid.pos.x, oBoid.pos.y)
            if ((oBoid != this) && (dis < this.percepRad)){
                steerForceA.add(oBoid.vel)

                steerForceC.add(oBoid.pos)

                let diff = p5.Vector.sub(this.pos, oBoid.pos)
                diff.div(dis)
                steerForceS.add(diff)

                total++
            }
        }
        if (total > 0){
            steerForceA.div(total)
            steerForceA.setMag(this.maxSpeed)
            steerForceA.sub(this.vel)
            steerForceA.limit(this.maxForce)

            steerForceC.div(total)
            steerForceC.sub(this.pos)
            steerForceC.setMag(this.maxSpeed)
            steerForceC.sub(this.vel)
            steerForceC.limit(this.maxForce)

            steerForceS.div(total)
            steerForceS.setMag(this.maxSpeed)
            steerForceS.sub(this.vel)
            steerForceS.limit(this.maxForce)
        }

        steerForceT.add(steerForceA)
        steerForceT.add(steerForceC)
        steerForceT.add(steerForceS)
        return steerForceT
    }

    // align(boids){
    //     let dis, steerForce
    //     let total = 0
    //     steerForce = createVector()
    //     for(let oBoid of boids){
    //         dis = dist(this.pos.x, this.pos.y, oBoid.pos.x, oBoid.pos.y)
    //         if ((oBoid != this) && (dis < this.percepRad)){
    //             steerForce.add(oBoid.vel)
    //             total++
    //         }
    //     }
    //     if (total > 0){
    //         steerForce.div(total)
    //         steerForce.setMag(this.maxSpeed)
    //         steerForce.sub(this.vel)
    //         steerForce.limit(this.maxForce)
    //     }
    //     return steerForce
    // }

    // cohesion(boids){
    //     let dis, steerForce
    //     let total = 0
    //     steerForce = createVector()
    //     for(let oBoid of boids){
    //         dis = dist(this.pos.x, this.pos.y, oBoid.pos.x, oBoid.pos.y)
    //         if ((oBoid != this) && (dis < this.percepRad)){
    //             steerForce.add(oBoid.pos)
    //             total++
    //         }
    //     }
    //     if (total > 0){
    //         steerForce.div(total)
    //         steerForce.sub(this.pos)
    //         steerForce.setMag(this.maxSpeed)
    //         steerForce.sub(this.vel)
    //         steerForce.limit(this.maxForce)
    //     }
    //     return steerForce
    // }

    // seperation(boids){
    //     let dis, steerForce
    //     let total = 0
    //     steerForce = createVector()
    //     for(let oBoid of boids){
    //         dis = dist(this.pos.x, this.pos.y, oBoid.pos.x, oBoid.pos.y)
    //         if ((oBoid != this) && (dis < this.percepRad)){
    //             let diff = p5.Vector.sub(this.pos, oBoid.pos)
    //             diff.div(dis)
    //             steerForce.add(diff)
    //             total++
    //         }
    //     }
    //     if (total > 0){
    //         steerForce.div(total)
    //         steerForce.setMag(this.maxSpeed)
    //         steerForce.sub(this.vel)
    //         steerForce.limit(this.maxForce)
    //     }
    //     return steerForce
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
        this.vel.limit(this.maxSpeed)
        this.acc.mult(0)
    }

    show(){
        strokeWeight(this.mass)
        stroke(255)//random(0, 255), random(0, 255), random(0, 255))
        point(this.pos.x, this.pos.y)
    }
}