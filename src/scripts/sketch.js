const headOffset = 79
var flocks = [],
    i = 0,
    b

function preload(){
}

function setup(){
    let myCanvas
    myCanvas = createCanvas(windowWidth, windowHeight - headOffset)
    myCanvas.parent("myCanvas")
    flocks.push(new Flock())
    button()
    textFont("Roboto")
    fill(175, 23, 23)
    textSize(windowWidth*0.07)
    // noStroke()
    textAlign(CENTER, CENTER)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight - headOffset)
    textSize(windowWidth*0.07)
    b.position(windowWidth/2 - 100, windowHeight*0.005)
}

function draw(){
    background(31, 31, 31)
    for (let flock of flocks){
        flock.run()
    }
}

function mouseDragged() {
    newBoid()
}

function mousePressed() {
    newBoid()
}
function newBoid(){
    flocks[i].addBoid(mouseX, mouseY)
    b.style("visibility: visible;")
}

function newFlock(){
    flocks.push(new Flock())
    i++
}

function button(){
    b = createButton('Add Species')
    b.parent('myCanvas')
    b.position(windowWidth/2 - 100, windowHeight*0.005)
    b.style("visibility: hidden;")
    b.size(200, windowHeight*0.05)
    b.mousePressed(newFlock)
}