
var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;
var values = {};

class Array2D {
    
  constructor(height, width) {
    
  }

  set(x,y,value) {
    if ( x < startX ) {
      startX = x;
    }
    else if ( x > endX ) {
      endX = x;
    }
    if ( y < startY ) {
      startY = y;
    }
    else if ( y > endY ) {
      endY = y;
    }
    values['c'+x+','+y] = value;
  }
  
  output() {
    console.log('Array2D output');
    console.log('Dimensions:');
    console.log('X: '+startX+' - '+endX);
    console.log('Y: '+startY+' - '+endY);
  }
}

export default Array2D;