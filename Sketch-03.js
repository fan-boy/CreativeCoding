const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');


const settings = {
  dimensions: [ 1080, 1080 ],
  animate:true
};

// const animate = () =>{
//   console.log("Animate");
//   requestAnimationFrame(animate)
// }

const sketch = ({ context, width, height }) => {
  const agents = [];

  for ( let i = 0; i < 40; i++){
    const x = random.range(0,width);
    const y = random.range(0,height);
    agents.push(new Agent(x,y));

  }

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    for(let i=0;i<40;i++){
      let agent = agents[i];

      for(let j=i+1;j<40;j++){
        let other = agents[j];

        const dist = agent.pos.getDistance(other.pos);

        if(dist > 200) continue;

        //context.lineWidth = math.mapRange(dist,0,200,12,1);
        context.beginPath();
        context.moveTo(agent.pos.x,agent.pos.y);
        context.lineTo(other.pos.x,other.pos.y);
        context.stroke();
      }

    }

    agents.forEach(a => {
      a.update();
      a.bounce(width,height);
      a.draw(context);
    })
    
  };
};

canvasSketch(sketch, settings);

class Vector{
  constructor(x,y){
    this.x = x;
    this.y = y;
   
  }

  getDistance(v){
    let dx = this.x - v.x;
    let dy = this.y - v.y;
    return Math.sqrt(dx*dx + dy*dy);
  }

}

class Agent{
  constructor(x,y){
    this.pos = new Vector(x,y);
    this.vel = new Vector(random.range(-1,1),random.range(-1,1));
    this.radius = random.range(4,12);
  }

  update(){
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  bounce(w,h){
    if(this.pos.x <=0 || this.pos.x >= w) this.vel.x *=-1;
    if(this.pos.y<=0 || this.pos.y >= h) this.vel.y *= -1;
  }

  draw(context){
    context.save();
    context.translate(this.pos.x,this.pos.y);
    context.lineWidth = random.range(1,3)
    context.beginPath();

    context.arc(0,0,this.radius,0,Math.PI*2);
    //context.fillStyle = 'black'
    context.fill();
    context.stroke();
    context.restore();

  }
}