
class Array2D {
    
  constructor(height, width) {
    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;
    this._values = {};
    this._coords = [];
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
    if ( this._values[x] == undefined ) {
      this._values[x] = {};
    }
    this._values[x][y] = value;
    if ( this._coords.indexOf(x+','+y) == -1 ) {
      this._coords.push(x+','+y);
    }
  }

  get(x,y) {
    if ( this._values[x] && this._values[x][y] ) {
      // console.log("values["+'c'+x+','+y+"]:"+values['c'+x+','+y]);
      return this._values[x][y];
    }
    return null;
  }

  delete(x,y) {
    if ( this._values[x] && this._values[x][y] ) {
      // console.log("values["+'c'+x+','+y+"]:"+values['c'+x+','+y]);
      delete this._values[x][y];
      var i = this._coords.indexOf(x+','+y);
      if ( i != -1 ) {
        this._coords.splice(i,1);
      }
    }
  }

  getRandomCoord() {
    var index = Math.floor( Math.random() * this._coords.length );
    return this._coords[index];
  }

  getRandom() {
    var index = Math.random() * this._coords.length;
  }
  
  output() {
    console.log('Array2D output');
    console.log('Dimensions:');
    console.log('X: '+this.startX+' - '+this.endX);
    console.log('Y: '+this.startY+' - '+this.endY);
  }
}

export default Array2D;