import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TileMap from "./TileMap";
import { TILE_SIZE, PIECE_MOVE_DURATION } from "../constants";
import PiecesView from "./PiecesView";
import PieceData from "../com/model/PieceData";

var _instance;

class Board extends React.Component {

    static clearSelection() {
        _instance.clearSelection();
    }

    constructor() {
        super();
        _instance = this;


        this.state = {
            selected: null,
            turnTimer: null,
            movePos: null,
        }

        this.clearSelection = this.clearSelection.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onTileSelect = this.onTileSelect.bind(this);
    }

    clearSelection() {
        this.setState({
            selected: null,
        });
    }

    onSelect(piece) {
        this.setState({
            selected: piece,
        })
    }

    onTileSelect(tile) {
        // console.log('onTileSelect(tile)');
        // console.log('this.state.selected:',this.state.selected);
        /*
        var sel = this.state.selected;
        console.log('tile:',tile);
        // remove piece
        var x = ( sel.x - tile.x ) / 2 + tile.x;
        var y = ( sel.y - tile.y ) / 2 + tile.y;
        console.log('remove piece '+x+','+y);
        console.log('PieceData.getArray2D().get('+x+','+y+'):',PieceData.getArray2D().get(x,y));
        if ( PieceData.getArray2D().get(x,y) ) {
            PieceData.getArray2D().delete(x,y);
            sel.moveTo(tile.x,tile.y);
            // this.clearSelection();
            this.forceUpdate();
        }
        else {
            throw('invalid move, no piece to jump');
        }
        */
        var sel = this.state.selected;
        var x = ( sel.x - tile.x ) / 2 + tile.x;
        var y = ( sel.y - tile.y ) / 2 + tile.y;
        // this.forceUpdate();
        this.setState({
            movePos: {
                x: tile.x,
                y: tile.y,
            }
        });
        setTimeout(()=>{
            PieceData.getArray2D().delete(x,y);
            sel.moveTo(tile.x,tile.y);
            this.setState({
                movePos: null,
            });
        },PIECE_MOVE_DURATION+200); // extra time prevents glitching
    }

    createExplosion() {

    }

    render() {
        // console.log('################### Board.render()');
        var board = this.props.board;
        // console.log('board:',board);
        // console.log('this.props.pieces:',this.props.pieces);

        var style = {
            paddingLeft: board.startX*TILE_SIZE*-1,
            paddingTop: board.startY*TILE_SIZE*-1,
            width: (board.endX-board.startX+1)*TILE_SIZE+20,
            height: (board.endY-board.startY+1)*TILE_SIZE+20,
        }
        // console.log(' ---- style:',style);

        return <View style={[styles.tile,style,this.props.style]}>
            <TileMap
                map={this.props.board}
                onSelect={this.onTileSelect}
                selected={this.state.movePos ? null : this.state.selected}
            />
            <PiecesView
                map={this.props.pieces}
                onSelect={this.state.movePos ? null : this.onSelect}
                selected={this.state.selected}
                movePos={this.state.movePos}
            />
        </View>;
    }

}

const styles = StyleSheet.create({
    tile: {
        borderColor: 'green',
        borderWidth: 10,
        overflow: 'visible',
        position: 'relative',
        backgroundColor: 'grey',
        margin: 20,
    }
});

export default Board;