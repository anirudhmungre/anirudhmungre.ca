const headOffset = 89
const title = "ANIRUDHMUNGRE"
const fontSize = 150
// var f    ont

function preload(){
    // font = loadFont("../resources/Roboto-Bold.ttf");
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
    resizeCanvas(windowWidth, windowHeight - headOffset);
    textSize(windowWidth*0.07)
    // fill(175, 23, 23)
    noStroke()
    textAlign(CENTER, CENTER)
    text(title, windowWidth/2, windowHeight/2-headOffset)
}