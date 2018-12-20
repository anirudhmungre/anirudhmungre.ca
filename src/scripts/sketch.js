const headOffset = 79
var flocks = []
var i = 0

function setup(){
    let myCanvas
    myCanvas = createCanvas(windowWidth, windowHeight - headOffset)
    myCanvas.parent("myCanvas")
    flocks.push(new Flock())
    textFont("Roboto")
    fill(175, 23, 23)
    textSize(windowWidth*0.07)
    // noStroke()
    textAlign(CENTER, CENTER)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight - headOffset)
    textSize(windowWidth*0.07)
}

function draw(){
    background(31, 31, 31)
    flocks[i].run()
}

function mouseDragged() {
    flocks[i].addBoid(mouseX, mouseY)
}

function mousePressed() {
    flocks[i].addBoid(mouseX, mouseY)
}

function newFlock(){
    flocks.push(new Flock())
    i++
}