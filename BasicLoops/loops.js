function setup() {
	simple();
}

function draw() {
	for (let i = 0;i<=100000;i++){
		flower();
	}
	
}

function flower(){
var x = randomNumber(100,700);
	var y = randomNumber(100,500);
	noStroke();
	fill("LightBlue");
	circle(x+50,y+50,2);
	
	fill("LavenderBlush");
	circle(x,y-50,2);
	fill("LemonChiffon");
	circle(x-50,y,2);
}