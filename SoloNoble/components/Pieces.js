import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Tile from './Tile';
import { TILE_SIZE } from "../constants";
import Piece from "./PieceView";

class Pieces extends React.Component {

    constructor() {
        super();

        this.state = {
            style: {
                // width: 1300,
                // height: 1300,
            },
        }

        this.getPieces = this.getPieces.bind(this);
    }

    getPieces() {
        // console.log('Pieces.getPieces()');
        // console.log('this.props.map:',this.props.map);
        var map = this.props.map;
        var tiles = [];
        var tile;
        for ( var x = map.startX; x <= map.endX; x++ ) {
            for ( var y = map.startY; y <= map.endY; y++ ) {
                // console.log('check tile '+x+','+y);
                tile = map.get(x,y);
                if ( tile ) tiles.push(this.createPiece(x,y,tile));
            }
        }
        return tiles;
    }

    createPiece(x,y,piece) {
        console.log(' +++ createPiece('+x+','+y+',piece)');
        console.log('piece:',piece);
        console.log('this.props.selected:',this.props.selected);
        var isSeleted = this.props.selected == piece;
        console.log('isSeleted:',isSeleted);
        return <Piece x={x} y={y} piece={piece} onSelect={this.props.onSelect} isSelected={isSeleted}/>;
    }

    render() {
        var map = this.props.map;
        var style = {
            marginLeft: map.startX*TILE_SIZE*-1,
            marginTop: map.startY*TILE_SIZE*-1,
            width: (map.endX-map.startX+1)*TILE_SIZE+4,
            height: (map.endY-map.startY+1)*TILE_SIZE+4,
        }
        return <View style={[styles.tile,this.state.style,style,this.props.style]}>
            {this.getPieces()}
        </View>;
    }

}

const styles = StyleSheet.create({
    tile: {
        // borderColor: 'purple',
        // borderWidth: 1,
        overflow: 'visible',
        position: 'absolute',
        // backgroundColor: 'grey',
    },
});

export default Pieces;