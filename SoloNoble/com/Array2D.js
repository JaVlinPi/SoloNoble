
class Array2D {
    
  constructor() {
    this.clear();
  }

  set(x,y,value) {
    // console.log(' ::::: set('+x+','+y+','+value+')');
    x = parseInt(x);
    y = parseInt(y);
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
    // if used breaks code for placinng pieces
    // if ( x == this.startX || x == this.endX ||
    //       y == this.startY || y == this.endY ) {
    //         this.updateSize();
    // }
  }

  updateSize() {
    console.log(' ????? updateSize()');
    var xMin = 0;
    var xMax = 0;
    var yMin = 0;
    var yMax = 0;
    var c;
    for ( var i = 0; i < this._coords.length; i++ ) {
      c = this._coords[i].split(',');
      if ( c[0] < xMin ) {
        xMin = c[0];
      }
      else if ( c[0] > xMax ) {
        xMax = c[0];
      }
      if ( c[1] < yMin ) {
        yMin = c[1];
      }
      else if ( c[1] > yMax ) {
        yMax = c[1];
      }
    }
    this.startX = xMin;
    this.endX = xMax;
    this.startY = yMin;
    this.endY = yMax;
  }

  getRandomCoord() {
    // var index = Math.floor( Math.random() * this._coords.length );
    // return this._coords[index];
  }

  getRandom() {
    // var index = Math.random() * this._coords.length;
  }
  
  output() {
    console.log('Array2D output');
    console.log('Dimensions:');
    console.log('X: '+this.startX+' - '+this.endX);
    console.log('Y: '+this.startY+' - '+this.endY);
  }

  toString() {
    var returnStr = '';
    var c, v;
    for ( var i = 0; i < this._coords.length; i++ ) {
      c = this._coords[i].split(',');
      v = this._values[c[0]][c[1]];
      returnStr = returnStr+c[0]+','+c[1]+','+v;
      if ( i < this._coords.length-1 ) {
        returnStr = returnStr+';';
      }
    }
    return returnStr;
  }

  loadString(str) {
     var cells = str.split(';');
     var cell;
     for ( var i = 0; i < cells.length; i++ ) {
      cell = cells[i].split(',');
      this.set(cell[0],cell[1],cell[2]);
     }
  }

  clear() {
    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;
    this._values = {};
    this._coords = [];
  }
}

export default Array2D;