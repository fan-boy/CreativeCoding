function setup() {
	simple();
	colorMode(HSB);
}

function draw() {
	strokeWeight(0);
	for(let y = 100;y<=500;y=y+100){
	for(let x = 100;x<=600;x=x+100){
	
		stripe(x,y);
	}
	}
}

function stripe(x,y){

	let hue1 = randomNumber(0,360);
	let hue0 = (hue1 -25)%360;
	let hue2 = (hue1 + 25)%360;
	
	fill(hue0,60,90,0.5);
	circle(x,y,75);
	
	fill(hue1,50,90,0.5);
	circle(x+25,y+25,50);
	
	fill(hue2,50,90,0.5);
	circle(x+50,y+50,25);
	
	

}