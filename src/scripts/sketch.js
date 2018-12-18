const headOffset = 79
const title = "ANIRUDHMUNGRE"
const fontSize = 150
var flock = []

function preload(){
}

function setup(){
    let myCanvas//, bounds
    myCanvas = createCanvas(windowWidth, windowHeight-headOffset)
    myCanvas.parent("myCanvas")
    textFont("Roboto")
    textSize(windowWidth*0.07)
    fill(175, 23, 23)
    noStroke()
    textAlign(CENTER, CENTER)
    text(title, windowWidth/2, windowHeight/2-headOffset)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight - headOffset)
    textSize(windowWidth*0.07)
    // fill(175, 23, 23)
    noStroke()
    textAlign(CENTER, CENTER)
    text(title, windowWidth/2, windowHeight/2-headOffset)
}

function draw(){
    clear()
    flock.forEach(boid => {
        boid.edges()
        boid.update()
        boid.show()
    })

    textSize(windowWidth*0.07)
    noStroke()
    textAlign(CENTER, CENTER)
    text(title, windowWidth/2, windowHeight/2-headOffset)
}

function mouseDragged() {
    for (let i = 0; i < 5; i++)
        flock.push(new Boid(mouseX,mouseY))
}