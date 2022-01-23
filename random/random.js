function setup() {
	simple();
}

function draw() {
	noStroke();
	
	for(let i = 0; i<=800; i=i+10){
		sinRectangle(i);
		
	}
	noFill();
	strokeWeight(1);
	
	for(let y = 10; y<=500; y= y+10){
		stroke("red");
		circle(200,300,y);
		circle(600,300,y);
		stroke("blue");
		circle(400,300,y);
	
		
	}
	
}

function sinRectangle(x){
	
	let h = 150 * sin(x);
	
	fill("blue")
	rectangle(x,300,4,-h);
	
	
	fill("red")
	rectangle(x,300,3,-h * 0.8);
	
	
	fill("blue")
	rectangle(x,300,2,-h*0.6);
	
	fill("red")
	rectangle(x,300,2,-h * 0.4);
}