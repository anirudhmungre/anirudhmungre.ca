let headOffset = 90

function preload(){
    
}

function setup(){
    let sketchCanvas = createCanvas(windowWidth, windowHeight-headOffset)
    sketchCanvas.parent("myCanvas")
    textSize(128)
    fill(255)
    noStroke()
    text("ANIRUDH", 10, 200)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight-headOffset)
}

function draw(){
    background("#1f1f1f")
}