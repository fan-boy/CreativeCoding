function setup() {
	simple();
}

function draw() {
	
	for(let i = 0; i<=500 ; i++){
	baloon();
	}
}

function baloon(){
	var x = randomNumber(100,700);
	var y = randomNumber(100,500);
	
	var r = randomNumber(0,255);
	var g = randomNumber(0,255);
	var b = randomNumber(0,255);
	
	fill(x/3,x/3,b);
	circle(x,y,20);
		
}