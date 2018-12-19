const headOffset = 79
const title = "ANIRUDH MUNGRE"
var flock;

function preload(){
}

function setup(){
    let myCanvas
    myCanvas = createCanvas(windowWidth, windowHeight - headOffset)
    myCanvas.parent("myCanvas")
    flock = new Flock()
    textFont("Roboto")
    fill(175, 23, 23)
    textSize(windowWidth*0.07)
    noStroke()
    textAlign(CENTER, CENTER)
    text(title, windowWidth/2, windowHeight/2-headOffset)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight - headOffset)
    textSize(windowWidth*0.07)
}

function draw(){
    clear()

    flock.run()

    stroke(31, 31, 31)
    text(title, windowWidth/2, windowHeight/2-headOffset)
}

function mouseDragged() {
    flock.addBoid(mouseX, mouseY)
}

function mousePressed() {
    flock.addBoid(mouseX, mouseY)
}