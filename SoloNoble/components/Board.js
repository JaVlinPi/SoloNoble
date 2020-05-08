import React from "react";
import { View, StyleSheet } from "react-native";
import TileMap from "./TileMap";
import { TILE_SIZE, PIECE_MOVE_DURATION, STAR_BURST_DURATION, BOARD_PADDING } from "../constants";
import PiecesView from "./PiecesView";
import PieceData from "../com/model/PieceData";
import Explosion from "./Explosion";

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
            explosionPos: null,
        }

        this.explosions = [];

        this.clearSelection = this.clearSelection.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onTileSelect = this.onTileSelect.bind(this);
        this.createExplosion = this.createExplosion.bind(this);
        
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
        var sel = this.state.selected;
        var x = ( sel.x - tile.x ) / 2 + tile.x;
        var y = ( sel.y - tile.y ) / 2 + tile.y;
        this.setState({
            movePos: {
                x: tile.x,
                y: tile.y,
            }
        });
        setTimeout(()=>{
            PieceData.getArray2D().delete(x,y);
            this.createExplosion(x,y);
        },PIECE_MOVE_DURATION); // extra time prevents glitching
        setTimeout(()=>{
            sel.moveTo(tile.x,tile.y);
            this.setState({
                movePos: null,
            });
        },PIECE_MOVE_DURATION+200); // extra time prevents glitching
    }

    createExplosion(x,y) {
        var explosion = <Explosion x={x} y={y}/>;
        this.explosions.push(explosion);
        setTimeout(()=>{
            var i = this.explosions.indexOf(explosion);
            if ( i != -1 ) {
                this.explosions.splice(i,1);
                this.forceUpdate();
            }
        },STAR_BURST_DURATION+500);
    }

    render() {
        // console.log('################### Board.render()');
        var board = this.props.board;

        var style = {
            paddingLeft: board.startX*TILE_SIZE*-1+BOARD_PADDING,
            paddingTop: board.startY*TILE_SIZE*-1+BOARD_PADDING,
            width: (board.endX-board.startX+1)*TILE_SIZE+20+(BOARD_PADDING*2),
            height: (board.endY-board.startY+1)*TILE_SIZE+20+(BOARD_PADDING*2),
        }

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
            { this.explosions.length == 0 ? null : this.explosions }
        </View>;
    }

}

const styles = StyleSheet.create({
    tile: {
        // borderColor: 'green',
        // borderWidth: 10,
        overflow: 'visible',
        position: 'relative',
        backgroundColor: 'grey',
        // margin: 20,
    }
});

export default Board;