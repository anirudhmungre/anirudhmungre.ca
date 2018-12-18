const headOffset = 89
const title = "ANIRUDH MUNGRE"
const fontSize = 150
var font

function preload(){
    font = loadFont("../Resources/Roboto-Bold.ttf");
}

function setup(){
    let myCanvas = createCanvas(windowWidth, windowHeight-headOffset)
    myCanvas.parent("myCanvas")
    textSize(fontSize)
    setPoints()
}

function windowResized() {
    clear()
    resizeCanvas(windowWidth, windowHeight - headOffset);
    setPoints()
}

function setPoints(){
    let bounds, x, y, points, pt
    bounds = font.textBounds(title)
    x = windowWidth / 2 - bounds.w / 2
    y = windowHeight / 2 - bounds.h / 2 //- headOffset
    points = font.textToPoints(title, x, y, fontSize)
    for (let i = 0; i < points.length; i++){
        pt = points[i]
        stroke(175, 23, 23)
        strokeWeight(10)
        point(pt.x, pt.y)
    }
}