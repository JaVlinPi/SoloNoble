

var values = {};

class Array2D {
    
  constructor(height, width) {
    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;
  }

  set(x,y,value) {
    console.log(' ::::: set('+x+','+y+','+value+')');
    if ( x < this.startX ) {
      this.startX = x;
    }
    else if ( x > this.endX ) {
      this.endX = x;
    }
    if ( y < this.startY ) {
      this.startY = y;
    }
    else if ( y > this.endY ) {
      this.endY = y;
    }
    values['c'+x+','+y] = value;
  }

  get(x,y) {
    if ( values['c'+x+','+y] ) {
      // console.log("values["+'c'+x+','+y+"]:"+values['c'+x+','+y]);
      return values['c'+x+','+y];
    }
    return null;
  }
  
  output() {
    console.log('Array2D output');
    console.log('Dimensions:');
    console.log('X: '+this.startX+' - '+this.endX);
    console.log('Y: '+this.startY+' - '+this.endY);
  }
}

export default Array2D;