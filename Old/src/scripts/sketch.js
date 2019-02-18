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
    text("ANIRUDH MUNGRE", windowWidth/2, windowHeight/2-headOffset)
    button()
    textFont("Roboto")
    fill(175, 23, 23)
    textSize(windowWidth*0.07)
    textAlign(CENTER, CENTER)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight - headOffset)
    textSize(windowWidth*0.07)
    b.position(windowWidth/2 - 100, windowHeight*0.005)
}

function draw(){
    background(31)
    for (let flock of flocks){
        flock.run()
    }
    stroke(31, 31, 31)
    strokeWeight(5)
    textSize(windowWidth*0.07)
    text("ANIRUDH MUNGRE", windowWidth/2, windowHeight/2-headOffset)
}

// function mouseDragged() {
//     newBoid()
// }

// function mousePressed() {
//     newBoid()
// }
function newBoid(){
    flocks[i].addBoid(windowWidth/2, 3*windowHeight/4)
}

function newFlock(){
    flocks.push(new Flock())
    for (let i = 0; i < 20; i++){
        newBoid()
    }
    i++
}

function button(){
    b = createButton('Add Species')
    b.parent('myCanvas')
    b.position(windowWidth/2 - 100, windowHeight*0.005)
    b.size(200, windowHeight*0.05)
    b.mousePressed(newFlock)
}