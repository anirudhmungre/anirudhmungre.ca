class Boid {
    constructor(x, y, species) {
        this.pos = createVector(x, y)
        this.vel = p5.Vector.random2D()
        this.vel.setMag(random(1, 4)) // All moving different speeds
        this.acc = createVector()
        this.maxSpeed = 3
        this.maxForce = 0.06

        this.aliWeight = 1
        this.cohWeight = 1
        this.sepWeight = 3
        // Implement below later to be random
        this.species = species
        this.percepRad = 50 //random(20, 100)
        this.mass = 10
    }

    flock(boids){
        let sep = this.seperation(boids)   // Separation
        let ali = this.align(boids)      // Alignment
        let coh = this.cohesion(boids)   // Cohesion
        // Arbitrarily weight these forces
        ali.mult(this.aliWeight)
        coh.mult(this.cohWeight)
        sep.mult(this.sepWeight)

        // steerForce.div(this.mass)
        this.acc.add(ali)
        this.acc.add(coh)
        this.acc.add(sep)
    }

    align(boids){
        let dis, avgVel, steerForce
        let total = 0
        avgVel = createVector()
        steerForce = createVector()
        for(let oBoid of boids){
            dis = p5.Vector.dist(this.pos, oBoid.pos)
            if ((oBoid != this) && (dis < this.percepRad)){
                avgVel.add(oBoid.vel)
                total++
            }
        }
        if (total > 0){
            avgVel.div(total)
            avgVel.normalize()
            avgVel.mult(this.maxSpeed)
            steerForce = p5.Vector.sub(avgVel, this.vel)
            steerForce.limit(this.maxForce)
        }
        return steerForce
    }

    cohesion(boids){
        let dis, steerForce
        let total = 0
        steerForce = createVector()
        for(let oBoid of boids){
            dis = dist(this.pos.x, this.pos.y, oBoid.pos.x, oBoid.pos.y)
            if ((oBoid != this) && (dis < this.percepRad)){
                steerForce.add(oBoid.pos)
                total++
            }
        }
        if (total > 0){
            steerForce.div(total)
            steerForce.sub(this.pos)
            steerForce.setMag(this.maxSpeed)
            steerForce.sub(this.vel)
            steerForce.limit(this.maxForce)
        }
        return steerForce
    }

    seperation(boids){
        let dis, steerForce, desiredSep
        let total = 0
        desiredSep = 30
        steerForce = createVector()
        for(let oBoid of boids){
            dis = p5.Vector.dist(this.pos, oBoid.pos)
            if ((oBoid != this) && (dis < desiredSep)){
                let diff = p5.Vector.sub(this.pos, oBoid.pos)
                diff.normalize()
                diff.div(dis)
                steerForce.add(diff)
                total++
            }
        }
        if (total > 0){
            steerForce.div(total)
        }
        if (steerForce.mag() > 0){
            steerForce.normalize()
            steerForce.mult(this.maxSpeed)
            steerForce.sub(this.vel)
            steerForce.limit(this.maxForce)
        }
        return steerForce
    }

    // Steering = Desired - Velocity
    reynolds(target){
        let desired = target.sub(this.pos)
        desired.normalize() // Create unit vec in proper direction
        desired.mult(this.maxSpeed)
        let steerForce = desired.sub(this.vel)
        steerForce.limit(this.maxForce)
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
        this.vel.add(this.acc)
        this.vel.limit(this.maxSpeed)
        this.pos.add(this.vel)
        this.acc.mult(0)
    }

    show(){
        // Particle Shape
        // strokeWeight(this.mass)
        // stroke(this.species)//random(0, 255), random(0, 255), random(0, 255))
        // point(this.pos.x, this.pos.y)

        // Cat Shape
        // noStroke();
		// fill(this.species);
		// ellipse(this.pos.x, this.pos.y, 20, 20);
		// triangle(this.pos.x - 10, this.pos.y - 15, this.pos.x - 10, this.pos.y, this.pos.x - 2, this.pos.y - 10);
		// triangle(this.pos.x + 10, this.pos.y - 15, this.pos.x + 10, this.pos.y, this.pos.x + 2, this.pos.y - 10);
		// fill(31, 31, 31);
		// ellipse(this.pos.x - 5, this.pos.y - 2, 5, 5);
        // ellipse(this.pos.x + 5, this.pos.y - 2, 5, 5);
        // fill(175, 23, 23)

        // Arrow Shape
        let theta = this.vel.heading() + radians(90);
        fill(this.species);
        stroke(200);
        push();
        translate(this.pos.x,this.pos.y);
        rotate(theta);
        beginShape();
        vertex(0, -this.mass*2);
        vertex(-this.mass, this.mass*2);
        vertex(this.mass, this.mass*2);
        endShape(CLOSE);
        pop();
        fill(175, 23, 23)
    }
}