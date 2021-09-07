const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    for(i=0;i<=5;i++){  
      for (j=0; j<=5; j++){

          let w = 50;
      let h = 50;
      let gap = 20;
      let x = 100 + (gap +w)*i;
      let y = 100 + (gap +h)*j;

  context.beginPath();

  context.rect(x,y,w,h);
  context.stroke();
  if(i === 0 || j === 0 || i ===5 || j === 5){        
  context.beginPath();
  context.rect(x+8,y+8,w - 16,h -16);
  //context.fill = 'red';
  context.stroke();
  }


      }
      
  }

  };
};

canvasSketch(sketch, settings);
