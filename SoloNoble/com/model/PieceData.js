
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

    static clear() {
        pieceMap.clear();
        pieces = [];
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

}

export default PieceData;