class Flock{
    constructor(){
        this.boids = []
    }

    addBoid(x, y){
        // for (let i = 0; i < 5; i++)
            this.boids.push(new Boid(x,y))
    }

    run(){
        // clear()
        for (let boid of this.boids){
            boid.flock(this.boids)
            boid.edges()
            boid.update()
            boid.show()
        }
    }
}