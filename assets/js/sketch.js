function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('stars');
	// background(0);
  
	  for(var i=0;i<100;i++){
		  var diameter=random(2,5);
	  noStroke();
	  fill(255);
	  ellipse(random(width),random(height),diameter,diameter);
	}
  
  }
  
  function draw() {
  
	
  
  }