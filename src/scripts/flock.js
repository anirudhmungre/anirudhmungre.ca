class Flock{
    constructor(){
        this.boids = []
        this.species = color(random(0, 255), random(0, 255), random(0, 255))
        this.mass = random(2, 10)
        this.maxSpeed = 20/this.mass
        this.perceptionRadius = random(50, 100)
    }

    addBoid(x, y){
        this.boids.push(new Boid(x,y, this.maxSpeed, this.mass, this.perceptionRadius))
    }

    run(){
        for (let boid of this.boids){
            boid.flock(this.boids)
            boid.edges()
            boid.update()
            boid.show(this.species)
        }

        if (this.boids.length > 0){
            stroke(31, 31, 31)
            textSize(windowWidth*0.07)
            text("ANIRUDH MUNGRE", windowWidth/2, windowHeight/2-headOffset)
            textSize(windowWidth*0.02)
            text("Flocking Simulation", windowWidth/2, windowHeight/2)
        }
        else{
            noStroke()
            text("CLICK AND DRAG", windowWidth/2, windowHeight/2-headOffset)
        }
    }
}