class Species{
    constructor(){
        this.boids = []
        this.mass = random(2, 10)
        this.maxSpeed = random(2, 5)
        this.perceptionRadius = random(50, 100)
        this.species = color(random(0, 255), random(0, 255), random(0, 255))
        this.maxForce = 0.06
    }

    addBoid(){
        boids.push(new Boid(mouseX, mouseY))
    }
}