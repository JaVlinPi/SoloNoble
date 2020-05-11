
import Array2D from "../Array2D";

var pieces = [];
var pieceMap = new Array2D();

class PieceData {

    static getArray2D() {
        // console.log('getArray2D()');
        return pieceMap;
    }

    static create(x,y,value) {
        // console.log(' @@@@@@@@ PieceData.create('+x+','+y+','+value+')');
        var piece = new PieceData(x,y,value);
        pieceMap.set(x,y,piece);
        pieces.push(piece);
    }

    static getPieces() {
        return pieces;
    }

    static delete(x,y) {
        pieceMap.delete(x,y);
        var i = pieces.findIndex((data)=>{
            return data.x == x && data.y == y;
        });
        console.log('i:',i);
        if ( i != -1 ) {
            pieces.splice(i,1);
        }
    }

    static clear() {
        pieceMap.clear();
        pieces = [];
    }

    static toString() {
        return pieces.join(';');
    }

    static loadFromString(str) {
        console.log('loadFromString(str)');
        console.log('str:',str);
        var cells = str.split(';');
        var cell;
        for ( var i = 0; i < cells.length; i++ ) {
            cell = cells[i].split(',');
            // this.set(cell[0],cell[1],cell[2]);
            PieceData.create(cell[0],cell[1],cell[2]);
        }
    }

    static getLength() {
        return pieceMap.getLength();
    }

    constructor(x,y,value) {
        // console.log('new PieceData('+x+','+y+','+value+')');
        this.x = x;
        this.y = y;
        this.value = value;

        this.moveTo = this.moveTo.bind(this);
    }

    moveTo(newX,newY) {
        pieceMap.delete(this.x,this.y);
        pieceMap.set(newX,newY,this);
        this.x = newX;
        this.y = newY;
    }

    toString() {
        return this.x+','+this.y+','+this.value;
    }

}

export default PieceData;