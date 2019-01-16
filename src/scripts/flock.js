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
    }
}