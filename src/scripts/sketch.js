function setup(){
    let sketchCanvas = createCanvas(windowWidth, windowHeight-90)
    sketchCanvas.parent("myCanvas")
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    background("#1f1f1f")
}